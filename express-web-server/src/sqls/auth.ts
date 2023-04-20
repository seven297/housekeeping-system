/** 权限数据库操作语句 */
export default class AuthSql {
  // 查询全部数据
  public static query() {
    return 'SELECT * FROM user'
  }

  // 查询指定id数据
  public static queryById(id: number) {
    return `SELECT * FROM user WHERE id = ${id}`
  }
}