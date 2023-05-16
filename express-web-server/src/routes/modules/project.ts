import ProjectController from '../../controllers/project'
import { RouteConfig, RouteMethod } from '../../typings/router.type'

/** 权限路由 */
const projectRoutes: RouteConfig[] = [
	{
		method: RouteMethod.GET,
		path: '/query',
		callback: ProjectController.query,
	},
	{
		method: RouteMethod.POST,
		path: '/add',
		callback: ProjectController.add,
	},
	{
		method: RouteMethod.POST,
		path: '/delete',
		callback: ProjectController.delete,
	},
	{
		method: RouteMethod.POST,
		path: '/update',
		callback: ProjectController.update,
	},
	{
		method: RouteMethod.POST,
		path: '/enable',
		callback: ProjectController.enable,
	},
	{
		method: RouteMethod.POST,
		path: '/disable',
		callback: ProjectController.disable,
	},
]

export default projectRoutes
