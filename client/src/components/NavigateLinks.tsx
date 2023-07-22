import { useEffect, useState } from 'react'

import { Link, Outlet } from 'react-router-dom'
import axios, { AxiosResponse } from 'axios'

export const NavigateLinks = () => {
  const [localhost80ApiRes, setLocalhost80ApiRes] = useState<string>('')

  const fetchData = () => {
    axios.get('http://localhost/test-url').then((response: AxiosResponse<unknown>) => {
      setLocalhost80ApiRes(JSON.stringify(response.data))
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | {` `}
      <Link to="/post">Post</Link>
      <div>localhost:80/test-url</div>
      <div>{localhost80ApiRes}</div>
      <div>
        <Outlet />
      </div>
    </>
  )
}
