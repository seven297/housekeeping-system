import { Context } from 'koa'

/** TODO 增加到全局.d.ts文件 */

// declare module '@app/router' {
//   // 请求方式
//   export enum RouteMethod {
//     POST = 'post',
//     GET = 'get',
//     PUT = 'put',
//     DELETE = 'delete'
//   }
  
//   // 路由配置项
//   export interface RouteConfig {
//     method: RouteMethod,
//     path: string,
//     callback: (ctx: Context, next: Function) => Promise<void>
//   }
// }

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