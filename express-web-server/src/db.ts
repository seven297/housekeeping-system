import mysql from "mysql"

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'housekeeping'
})

export default connection