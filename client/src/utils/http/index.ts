import axios from 'axios'
import type { Axios, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

export const http: Axios = axios.create({
  baseURL: '',
  timeout: 10000,
})

http.interceptors.request.use((config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  return config
})

http.interceptors.response.use(
  <T>(response: AxiosResponse<T>): AxiosResponse<T> => {
    return response
  },
  (err: AxiosError) => {
    throw err
  },
)
