import axios from "axios";
import { set } from "lodash";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_SERVER_URL,
  timeout: 60 * 1000,
})

axiosInstance.interceptors.request.use(
  (config) => {
    // TODO 继续完善
    set(config, ['headers', 'Content-Type'], 'application/json')
    
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

const serverApi = axiosInstance
export default serverApi
