import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

function Button({title = 'Get Started'}) {
  return (
    <div className='w-40 px-2 py-2 justify-center font-regular rounded-full text-black bg-zinc-100 flex gap-2 items-center'>
        <span className='text-sm'>{title}</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button