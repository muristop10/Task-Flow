import { Router } from 'express'
import { register } from '../controllers/authController'
import { projects } from '../controllers/projectsController'
import { tasks } from '../controllers/tasksController'
import { ensureAuthenticated } from '../middlewares/authMiddleware'

export const authRouter = Router()
authRouter.post('/register', register)

export const projectsRouter = Router()
projectsRouter.get('/projects', ensureAuthenticated, projects)

export const tasksRouter = Router()
tasksRouter.get('/tasks', ensureAuthenticated, tasks)