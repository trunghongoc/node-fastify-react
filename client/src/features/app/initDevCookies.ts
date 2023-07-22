import { http, setCookie, ENV } from '@/utils'

export const initDevCookies = async () => {
  if (!ENV.DEV) {
    return
  }

  const response = await http.get('/get-necessaries')

  // set cookies
  setCookie('user-json-placeholder', JSON.stringify(response.data.user), 1)
}
