export enum StorageKey {
  login = 'login-state',
  uid = 'uid',
}

export default function useStorage(key: StorageKey) {
  const STORAGE_PREFIX = 'system-app-2023'
  const storageName = `${STORAGE_PREFIX}-${key}`
  
  const get = () => {
    return window.localStorage.getItem(storageName)
  }

  const set = <T = Record<string, unknown>>(value: T) => {
    window.localStorage.setItem(storageName, JSON.stringify(value))
  }

  const clear = () => {
    try {
      window.localStorage.removeItem(storageName)
    } catch (error) {
      console.error(`清除--${key}--失败！`)
    }
  }

  return {
    get,
    set,
    clear
  }
}