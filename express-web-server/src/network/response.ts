/** 请求响应类 */ 
export class ResponseController {
  // 应用内请求状态码
  public static StatusCode = {
    SUCCESS: 200,
    ERROR: 500,
    UNAUTH: 401
  }

  // 成功请求
  public static onSuccess<T>(data: T) {
    return {
      status: this.StatusCode.SUCCESS,
      data,
      msg: '请求成功'
    }
  }

  // 失败请求
  public static onError(message: string) {
    return {
      status: this.StatusCode.ERROR,
      data: null,
      msg: message
    }
  }

  // 未授权
  public static onUnauth<T>() {
    return {
      status: this.StatusCode.UNAUTH,
      data: null,
      msg: '登录过期'
    }
  }
}