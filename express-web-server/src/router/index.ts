import Koa from 'koa'
import Router from '@koa/router'
import routes from './routes'
import { RouteConfig } from '@/router/@types/router'

// 初始化 路由实例
const router = new Router()

// 注册路由
export function registerRouter(app: Koa, routers: RouteConfig[] = routes) {
  routers.forEach(routerItem => {
    router.register(routerItem.path, [routerItem.method], routerItem.callback)
  })

  // 响应用户请求
  app.use(router.routes()).use(router.allowedMethods())
}
