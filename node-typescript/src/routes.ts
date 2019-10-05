import { Router } from 'express'

import UserController from './controllers/UserController'
//import PostController from './controllers/PostController'

const routes = Router()
// User routes

routes.get('/users/:id?', UserController.find)/*
routes.post('/users', UserController.create)
routes.put('/users/:id', UserController.update)
routes.delete('/users:id', UserController.delete)



// Post rotes

routes.get('/posts/:id?', PostController.find)
routes.post('/posts', PostController.create)
routes.put('/posts/:id', PostController.update)
routes.delete('/posts:id', PostController.delete)

*/


export default routes