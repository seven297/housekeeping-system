import Koa from 'koa'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'
import { registerRouter } from './router'
import connection from './db'

// 初始化 Koa 应用实例
const app = new Koa()

// 注册中间件
app.use(cors())
app.use(bodyParser())

// 注册路由
registerRouter(app)

// 运行服务器
app.listen(process.env.PORT)

// 连接数据库
connection.connect()

console.log(`runing node web server[post:${process.env.PORT}] ....`)
