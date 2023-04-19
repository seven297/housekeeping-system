import AuthController from "../../controllers/auth";
import { RouteConfig, RouteMethod } from "../@types/router";

const authRoutes: RouteConfig[] = [
  {
    method: RouteMethod.POST,
    path: '/login',
    callback: AuthController.login
  }
]

export default authRoutes