import { createStore } from "redux";
import useStorage, { StorageKey } from "../hooks/useStorage";

/** 登录 */
function login(storage: ReturnType<typeof useStorage>, state: any) {
  // TODO ADD AXIOS
  state = true
  storage.set(state)
  return state
}

/** 登出 */
function logout(storage: ReturnType<typeof useStorage>, state: any) {
  // TODO CLEAR STORAGE
  state = false
  storage.clear()
  return state
}

const loginStore = createStore((state = false, action) => {
  const loginStorage = useStorage(StorageKey.login)
  switch (action.type) {
    case 'login':
      return login(loginStorage, state)
    case 'logout':
      return logout(loginStorage, state)
    default:
      return state
  }
});

export default loginStore