import mysql, { Connection } from "mysql"
import ConnectionController from "./connection/connection"

/** 
 * 数据库创建连接
 * 说明：与数据库操作类解耦，便于采用不同的数据库引入
 */
const dbConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) ?? 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'housekeeping'
})

// 初始化数据库类
const connection = new ConnectionController<Connection>(dbConnection)

export default connection