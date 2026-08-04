import { Router } from 'express'
import { register } from '../controllers/authController'
import { projects } from '../controllers/projectsController'
import { tasks } from '../controllers/tasksController'

export const authRouter = Router()
authRouter.post('/register', register)

export const projectsRouter = Router()
projectsRouter.get('/projects', projects)

export const tasksRouter = Router()
tasksRouter.get('/tasks', tasks)