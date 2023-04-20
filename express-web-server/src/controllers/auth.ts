import { ResponseController } from './../network/response';
import connection from '../db'
import { Context } from 'koa'

export default class AuthController {
	public static async login(ctx: Context) {
		const rows = await connection.query('SELECT * FROM user')
		ctx.body = ResponseController.onSuccess(rows)
	}

	public static async register(ctx: Context) {
		ctx.body = 'Register controller'
	}
}
