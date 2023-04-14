import { createStore } from "redux";

/** 获取用户信息 */
function getUser(state: any) {
  // TODO ADD AXIOS
  return state + 'userinfo'
}

/** 清空用户信息 */
function clearUser(state: any) {
  // TODO CLEAR STORAGE
  return state + 'clear'
}

const userStore = createStore((state = {}, action) => {
  switch (action.type) {
    case 'getUser':
      return getUser(state)
    case 'clear':
      return clearUser(state)
    default:
      return state
  }
});

export enum UserActionType {
  getUser = 'getUser',
  clear = 'clear'
}
export default userStore