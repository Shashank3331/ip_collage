import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function PrivatePortal() {
  const auth = localStorage.getItem('user')
  return auth ? <Outlet/> : <Navigate to='signup'/>

}

export default PrivatePortal
