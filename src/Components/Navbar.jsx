import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    <div>
        <nav className='max-w-screen-xl mx-auto flex  items-center justify-between p-4 border-b-2 border-zinc-600'>
            <div className='flex items-center gap-14 '>
                <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
                <div className='flex items-center gap-10'>

               {['Home', 'Works', 'Culture','','News'].map((elem,index)=>{
                   return (
                       elem.length === 0 ? <span className='w-[1px] h-6 bg-zinc-500'></span> : (
                        <a href='#' className= ' flex items-center gap-2 text-zinc-300 hover:text-white font-medium text-sm  rounded-md text-center  transition duration-150 ease-in-out'>
                        {index === 1 &&  <span className='inline-block w-1 h-1 rounded-full bg-green-500'></span>  }
                        {elem}
                    </a>
                       )
                       
                       
          
                )
            })}
            </div>
            </div>
           <Button/>

        </nav>
    </div>
  )
}

export default Navbar