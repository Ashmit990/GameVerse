import React from 'react'
import NavBar from '../pages/NavBar'
import Footer from '../pages/Footer'
import { Outlet } from 'react-router'


const RootLayout = () => {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootLayout