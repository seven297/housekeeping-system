/// <reference types="vite/client" />

interface ImportMetaEnv {
  // # 代理前请求url
  readonly VITE_BASE_SERVER_URL: string
  // 反代理目标url
  readonly VITE_TARGET_SERVER_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}