import express from 'express'
import cors from 'cors'
import authRoutes from './routes/auth.routes'

const app = express()
const port = 4000

app.use(express.json())
app.use(cors())

app.use('/api', authRoutes)

export function setupServer () {
  app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}`)
  })
}

export { app }
