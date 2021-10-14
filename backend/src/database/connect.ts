import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

const link = process.env.MONGO_CONNECT_LINK

export function connectDB () {
  mongoose.connect(`${link}`)
    .then(() =>
      console.log('Connectado ao db com sucesso!')
    )
    .catch(() =>
      console.log('ERRO AO connectar ao db')
    )
}
