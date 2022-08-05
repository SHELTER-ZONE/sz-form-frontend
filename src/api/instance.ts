import axios, { AxiosResponse, AxiosError } from 'axios'

export type AxiosInstanceResponse = Promise<[any | null, Error | null]>

export const api = axios.create({
  baseURL: 'https://sz-form.deta.dev',
})

// Handler
const handleSuccessRes = (response: AxiosResponse) => {
  return [response.data, null]
}
const handleErrorRes = (error: AxiosError) => {
  const errorData = error.response?.data
  return [null, errorData || error]
}

// Res
api.interceptors.response.use(handleSuccessRes, handleErrorRes)
// Req
api.interceptors.request.use(async (config: any) => {
  // config.headers.Authorization = `Bot ${process.env.BOT_TOKEN}`
  return config
})
