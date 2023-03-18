import router from './routes'
import Koa from 'koa'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'

// 初始化 Koa 应用实例
const app = new Koa()

// 注册中间件
app.use(cors())
app.use(bodyParser())

// 响应用户请求
app.use(router.routes()).use(router.allowedMethods())

// 运行服务器
app.listen(3000)

console.log('runing')
