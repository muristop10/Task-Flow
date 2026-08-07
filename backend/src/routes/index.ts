import { Router } from 'express'
import { register } from '../controllers/authController'
import { deleteProjects, getProjects, patchProjects, postProjects } from '../controllers/projectsController'
import { deleteTasks, getTasks, patchTasks, postTasks } from '../controllers/tasksController'
import { ensureAuthenticated } from '../middlewares/authMiddleware'
import { login } from '../controllers/loginController'
import { editMe, me } from '../controllers/meController'

// signup
export const router = Router()
router.post('/register', register)

// login
router.post('/login', login)

// projects
router.get('/projects', ensureAuthenticated, getProjects)
router.post('/projects/', ensureAuthenticated, postProjects)
router.patch('/projects/:id', ensureAuthenticated, patchProjects)
router.delete('/projects/:id', ensureAuthenticated, deleteProjects)

// tasks
router.get('/tasks', ensureAuthenticated, getTasks)
router.post('/tasks', ensureAuthenticated, postTasks)
router.patch('/tasks/:id', ensureAuthenticated, patchTasks)
router.delete('/tasks/:id', ensureAuthenticated, deleteTasks)

// me
router.get('/me', ensureAuthenticated, me)
router.patch('/me', ensureAuthenticated, editMe)