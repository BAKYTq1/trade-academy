import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../shared/Header/Header'
import Footer from '../../shared/Footer/Footer'

function Layout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout
