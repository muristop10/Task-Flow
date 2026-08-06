import { Router } from 'express'
import { register } from '../controllers/authController'
import { projects } from '../controllers/projectsController'
import { tasks } from '../controllers/tasksController'
import { ensureAuthenticated } from '../middlewares/authMiddleware'
import { login } from '../controllers/loginController'
import { me } from '../controllers/meController'

export const authRouter = Router()
authRouter.post('/register', register)

export const loginRouter = Router()
loginRouter.post('/login', login)

export const projectsRouter = Router()
projectsRouter.get('/projects', ensureAuthenticated, projects)

export const tasksRouter = Router()
tasksRouter.get('/tasks', ensureAuthenticated, tasks)

export const meRouter = Router()
tasksRouter.get('/me', ensureAuthenticated, me)