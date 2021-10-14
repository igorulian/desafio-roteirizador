import { Request, Response } from 'express'
import { Model } from 'mongoose'
import { IUser, UserModel } from '../database/models/user'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import tokencfg from '../config/token.json'

const User:Model<IUser> = UserModel

function generateToken (params = {}) {
  return jwt.sign(params, tokencfg.secret)
}

export async function register (req:Request, res:Response) {
  try {
    const { email, password, username } = req.body

    if (!email || !password || !username)
      return res.status(400).send({ error: 'Request malformed' })

    if (await User.findOne({ email }))
      return res.status(400).send({ error: 'Usuário já existente' })

    const user = await User.create({ username, email, password })

    const token = generateToken({ id: user._id })

    return res.status(200).send({ username, email, token })
  } catch {
    return res.status(400).send({ error: 'Erro ao efetuar o cadastro' })
  }
}

export async function login (req:Request, res:Response) {
  try {
    const { email, password } = req.body

    if (!email || !password)
      return res.status(400).send({ error: 'Request malformed' })

    const user = await User.findOne({ email }).select('+password')

    if (!user)
      return res.status(400).send({ error: 'Usuário não encontrado' })

    if (!await bcrypt.compare(password, user.password))
      return res.status(400).send({ error: 'Senha inválida' })

    const token = generateToken({ id: user._id })

    return res.status(200).send({ username: user.username, email, token })
  } catch {
    return res.status(400).send({ error: 'Erro ao efetuar o login' })
  }
}
