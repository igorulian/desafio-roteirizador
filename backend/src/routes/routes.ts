import { Router } from 'express'
import { login, register } from '../controllers/auth.controller'
import { addHistory, deleteHistory, listHistory } from '../controllers/routes.controller'
import { middleware } from '../middlewares/middleware'

const routes:Router = Router()

routes.post('/register', register)
routes.post('/login', login)

routes.use(middleware)

routes.post('/history/add', addHistory)
routes.get('/history/list', listHistory)
routes.post('/history/delete/:id', deleteHistory)

export default routes
