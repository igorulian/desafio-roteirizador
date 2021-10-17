import { Request, Response } from 'express'
import { Model } from 'mongoose'
import { IRoute, IUser, UserModel } from '../database/models/user'

const User:Model<IUser> = UserModel

export async function addHistory (req:Request, res:Response) {
  try {
    const { id } = req
    const data:IRoute = req.body

    if (!data.origin || !data.stops)
      return res.status(400).send({ error: 'Request malformada' })

    const updatedUser = await User.findByIdAndUpdate(id, {
      $push: { history: data }
    }, { new: true })

    return res.status(200).send(updatedUser.history)
  } catch {
    return res.status(400).send({ error: 'Erro ao criar rota' })
  }
}

export async function listHistory (req:Request, res:Response) {
  try {
    const { id } = req

    const user = await User.findByIdAndUpdate(id)

    return res.status(200).send(user.history)
  } catch {
    return res.status(400).send({ error: 'Erro ao listar rotas' })
  }
}

export async function deleteHistory (req:Request, res:Response) {
  try {
    const routeid = req.params.id

    const user = await User.findByIdAndUpdate(req.id, {
      $pull: {
        history: { _id: routeid }
      }
    }, { new: true })

    return res.status(200).send(user.history)
  } catch {
    return res.status(400).send({ error: 'Erro ao deletar rota' })
  }
}
