import { Request, Response } from 'express'


export async function register (req:Request, res:Response) {
  try {
    const { email, password } = req.body

    if (!email || !password) 
      return res.status(400).send({ error: 'Request malformed' })

      res.status(200).send({email,password})

  } catch {
    res.status(400).send({ error: 'Erro ao efetuar o cadastro' })
  }
}
export async function login (req:Request, res:Response) {
  try {
    const { email, password } = req.body

    if (!email || !password) 
      return res.status(400).send({ error: 'Request malformed' })

      res.status(200).send({email,password})

  } catch {
    res.status(400).send({ error: 'Erro ao efetuar o login' })
  }
}

