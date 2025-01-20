import React from 'react'
import logo from '../assets/foot-logo.svg'
import ConnectButton from './ConnectButton'

const MobileHeader = () => {
  return (
    <header className='flex lg:hidden md:hidden justify-between items-center w-[90%] mx-auto my-12'>
        <img src={logo} alt="" className='w-[60px]'/>
        <ConnectButton />
    </header>
  )
}

export default MobileHeader