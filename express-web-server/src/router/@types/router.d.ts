import { Context } from 'koa'

// 请求方式
export enum RouteMethod {
  POST = 'post',
  GET = 'get',
  PUT = 'put',
  DELETE = 'delete'
}

// 路由配置项
export interface RouteConfig {
  method: RouteMethod,
  path: string,
  callback: (ctx: Context, next: Function) => Promise<void>
}