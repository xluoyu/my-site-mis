import axios from 'axios'

const server = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000
})

server.interceptors.request.use((config) => {

  return config
})

server.interceptors.response.use(res => {
  return res.data
})

export const Get = (options: any) => server({...options, method: 'GET'})
export const Post = (options: any) => server({...options, method: 'POST'})

export default server