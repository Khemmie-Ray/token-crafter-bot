import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MobileHeader from '../components/MobileHeader'

const AppLayout = () => {
  return (
    <div>
        <Header />
        <MobileHeader />
        <Outlet />
        <Footer />
    </div>
  )
}

export default AppLayout