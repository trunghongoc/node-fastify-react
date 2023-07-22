import { useState, useEffect } from 'react'
import type { ISampleProps } from './typed'
import { http } from '@/utils'
import type { AxiosResponse } from 'axios'
import style from './style.module.scss'

export const Sample = ({ text }: ISampleProps) => {
  const [mockResponseData, setMockResponseData] = useState<string>('')

  useEffect(() => {
    http.get('https://jsonplaceholder.typicode.com/todos/2').then((response: AxiosResponse<string>) => {
      console.log('=====> res.data:', response.data)
      setMockResponseData(response.data)
    })
  }, [])

  return (
    <>
      <div className={style.text}>{text}</div>
      <div data-testid="http-mock-response">{mockResponseData}</div>
    </>
  )
}

Sample.defaultProps = {
  text: 'Sample component',
}
