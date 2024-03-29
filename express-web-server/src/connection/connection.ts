import { Connection } from 'mysql'

/**
 * 数据库服务类
 * 说明：与db的创建连接解耦，只服务于数据库的操作
 */
export default class ConnectionController<T extends Connection> {
	// 数据库建立连接实例
	readonly dbInstance: T

	constructor(dbConnection: T) {
		this.dbInstance = dbConnection
	}

	// 数据库连接
	connect() {
		// TODO 错误返回待添加
		this.dbInstance.connect()
	}

	// 断开连接
	disconnect() {
		this.dbInstance.destroy()
	}

	// 数据库查询
	query(sql: string) {
		return new Promise((resolve, reject) => {
			this.dbInstance.query({ sql }, (error, rows) => {
				if (error) {
					reject(`[SELECT ERROR] - ${error.message}`)
				} else {
					resolve(rows)
				}
			})
		})
	}

	// 数据库插入
	insert(sql: string, data: Array<string>) {
		return new Promise((resolve, reject) => {
			this.dbInstance.query({ sql }, data, (error, rows) => {
				if (error) {
					reject(`[INSERT ERROR] - ${error.message}`)
				} else {
					resolve(rows)
				}
			})
		})
	}

	// 数据库更新
	update(sql: string, data: Array<string>) {
		return new Promise((resolve, reject) => {
			this.dbInstance.query({ sql }, data, (error, rows) => {
				if (error) {
					reject(`[UPDATE ERROR] - ${error.message}`)
				} else {
					resolve(rows)
				}
			})
		})
	}
}
