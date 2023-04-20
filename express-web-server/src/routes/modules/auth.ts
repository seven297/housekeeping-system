import AuthController from "../../controllers/auth";
import { RouteConfig, RouteMethod } from "../../typings/router.type";

const authRoutes: RouteConfig[] = [
  {
    method: RouteMethod.POST,
    path: '/login',
    callback: AuthController.login
  }
]

export default authRoutes