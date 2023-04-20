import { ResponseController } from './../network/response';
import connection from '../db'
import { Context } from 'koa'

export default class AuthController {
	public static async login(ctx: Context) {
		connection.query({ sql: 'SELECT * FROM user' }, (error, row) => {
			console.log(row)
		})
		ctx.body = ResponseController.onSuccess('Login controller')
	}

	public static async register(ctx: Context) {
		ctx.body = 'Register controller'
	}
}
