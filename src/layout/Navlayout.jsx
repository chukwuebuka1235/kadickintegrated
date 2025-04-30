import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'

const Navlayout = () => {
  return (
    <>
     <Navbar />
     <Outlet />
    </>
  )
}

export default Navlayout