export default class ProjectSql {
	// 数据查询
	public static query() {
		return ''
	}

	// 添加项目
	public static add() {
		return `INSERT INTO service_project (pid, name, remark) VALUES (?, ?, ?)`
	}

	// 修改项目
	public static update() {
		return ''
	}

	// 删除 / 批量删除
	public static delete() {
		return ''
	}

	// 项目禁用
	public static disable() {
		return ''
	}

	// 项目启用
	public static enable() {
		return ''
	}
}
