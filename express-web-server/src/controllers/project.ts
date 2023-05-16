import { ResponseController } from './../network/response'
import connection from '../db'
import { Context } from 'koa'
import ProjectSql from './../sqls/project'
import { ProjectForm } from '@/typings/project.type'

/** 项目服务类 */
export default class ProjectController {
	public static async query(ctx: Context) {
		console.log(ctx)
		console.log(ctx.query)
		const body = ctx.request.body as Partial<ProjectForm>
		const id = body.id
		// const rows = await connection.query(ProjectSql.query(id))
		ctx.body = ResponseController.onSuccess('')
	}

	public static async add(ctx: Context) {
		console.log(ctx.request.body)
		const rows = await connection.insert(ProjectSql.add(), ['0', '钟点工', ''])
		ctx.body = ResponseController.onSuccess('')
	}

	public static async delete(ctx: Context) {
		const rows = await connection.query(ProjectSql.delete())
		ctx.body = ResponseController.onSuccess(rows)
	}

	public static async update(ctx: Context) {
		const rows = await connection.query(ProjectSql.update())
		ctx.body = ResponseController.onSuccess(rows)
	}

	public static async disable(ctx: Context) {
		const rows = await connection.query(ProjectSql.disable())
		ctx.body = ResponseController.onSuccess(rows)
	}

	public static async enable(ctx: Context) {
		const rows = await connection.query(ProjectSql.enable())
		ctx.body = ResponseController.onSuccess(rows)
	}
}
