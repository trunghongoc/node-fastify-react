import { useEffect } from 'react'

import { Link, Outlet } from 'react-router-dom'
import axios from 'axios'

export const NavigateLinks = () => {
  const fetchData = () => {
    axios.get('/test-url').then(() => {
      //
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | {` `}
      <Link to="/post">Post</Link>
      <div>
        <Outlet />
      </div>
    </>
  )
}
