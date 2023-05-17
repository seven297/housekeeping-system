export enum StorageKey {
  login = 'login-state',
  uid = 'uid',
  dict = 'dict',
  project = 'project',
  user = 'user',
  customer = 'customer',
  worker = 'worker',
  work_ability = 'work_ability',
  work_experience = 'work_experience',
  income = 'income',
  comment = 'comment'
}

export default function useStorage(key: StorageKey) {
  const STORAGE_PREFIX = 'system-app-2023'
  const storageName = `${STORAGE_PREFIX}-${key}`
  
  const get = <T>() => {
    try {
      const value = window.localStorage.getItem(storageName)
      if (value) {
        return JSON.parse(value) as T
      }
      return null
    } catch (error) {
      console.error(`获取--${key}--失败！`)
    }
  }

  const set = <T>(value: T) => {
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