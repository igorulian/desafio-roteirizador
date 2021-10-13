import { setupServer } from './app'
import { connectDB } from './database/connect'

function start () {
  connectDB()
  setupServer()
}

start()
