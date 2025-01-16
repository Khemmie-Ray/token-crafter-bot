import React from 'react'
import logo from '../assets/logo.svg'
import { BsTwitterX } from "react-icons/bs";

const Header = () => {
  return (
    <header className='lg:flex md:flex hidden justify-between items-center w-[90%] mx-auto my-12'>
        <img src={logo} alt="" className='w-[200px]'/>
        <button className='flex py-3 px-6 rounded-lg items-center bg-dark text-white'>Connect with <BsTwitterX className='ml-2'/></button>
    </header>
  )
}

export default Header