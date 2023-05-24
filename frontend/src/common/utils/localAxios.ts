import axios from 'axios'

const localAxios = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: true,
})

localAxios.interceptors.response.use((response) => response.data)

localAxios.interceptors.request.use((config) => {
  const [pathname, queries] = config.url?.split('?') || ''

  const q = new URLSearchParams(queries)

  const apiKey = localStorage.getItem('apiKey')
  if (apiKey) q.set('apiKey', apiKey)

  config.url = `${pathname}?${q.toString()}`

  return config
})

export default localAxios
