import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const ENV = loadEnv(mode, './env') as ImportMetaEnv
  console.log('[mode]', mode)
  console.log('[ENV]', ENV)
  return {
    plugins: [react()],
    envDir: './env',
    server: {
      port: 3000,
      proxy: {
        [ENV.VITE_BASE_SERVER_URL]: {
          target: ENV.VITE_TARGET_SERVER_URL,
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace('/api', '')
        }
      }
    }
  }
})
