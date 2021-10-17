import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import tokencfg from '../config/token.json'

const secret = tokencfg.secret

export function middleware (req:Request, res:Response, next:NextFunction) {
  const authHeader:string|undefined = req.headers.authorization

  if (!authHeader)
    return res.status(401).send({ error: 'Nenhum token encontrado' })

  const parts:string[] = authHeader.split(' ')

  if (parts.length !== 2)
    return res.status(401).send({ error: 'Token erro' })

  const [scheme, token] = parts

  if (!/^Bearer$/i.test(scheme))
    return res.status(401).send({ error: 'Token malformado' })

  jwt.verify(token, secret, (err, decoded) => {
    if (err)
      return res.status(401).send({ error: 'Token inválido' })

    req.id = decoded?.id
  })

  next()
}
