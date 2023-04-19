import { RouteConfig } from "@/router/@types/router"
import authRoutes from "./routes/auth"
// // auth 相关的路由
// router.post('/auth/login', AuthController.login)
// router.post('/auth/register', AuthController.register)

// // users 相关的路由
// router.get('/users', UserController.listUsers)
// router.get('/users/:id', UserController.showUserDetail)
// router.put('/users/:id', UserController.updateUser)
// router.delete('/users/:id', UserController.deleteUser)

function formatRoute(namespace: string, routes: RouteConfig[]): RouteConfig[] {
  return routes.map((r) => ({ ...r, path: `${namespace}${r.path}`}))
}

const routes: RouteConfig[] = [
  ...formatRoute('/auth', authRoutes),
]

export default routes