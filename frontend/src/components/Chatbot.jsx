import React from 'react'
import { BsFillSendFill } from "react-icons/bs";

const Chatbot = () => {
  return (
    <div className='fixed bottom-8 right-10'>
        <div className='bg-dark text-white py-8 px-10 rounded-full hover:bg-light hover:text-dark'>
        <button ><BsFillSendFill  className='text-2xl'/></button>
        </div>
    </div>
  )
}

export default Chatbot