import Router from '@koa/router'

import AuthController from './controllers/auth'
import UserController from './controllers/user'

const router = new Router()

// auth 相关的路由
router.post('api/auth/login', AuthController.login)
router.post('api/auth/register', AuthController.register)

// users 相关的路由
router.get('api/users', UserController.listUsers)
router.get('api/users/:id', UserController.showUserDetail)
router.put('api/users/:id', UserController.updateUser)
router.delete('api/users/:id', UserController.deleteUser)

export default router
