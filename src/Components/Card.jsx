import { motion } from 'framer-motion';
import React from 'react';
import { GoArrowRight } from "react-icons/go";

function Card({width,start,para,hover='false'}) {

  return (
    <motion.div whileHover={{backgroundColor : hover === 'true' && '#7443FF',padding : '25px'}} className={`${width} h-[25rem] flex flex-col justify-between bg-zinc-800 rounded-lg p-4`}>
        <div>
            <div className='w-full flex items-center justify-between text-zinc-100'>
                <h6 className='text-sm'>Lorem ipsum dolor.</h6>
                <GoArrowRight />
            </div>
            <h3 className='text-2xl mt-3 font-medium'>Lorem ipsum dolor sit.</h3>
        </div>
        <div className="bottom">
            {start && (
                <>
                <h2 className='text-8xl font-semibold'>Start a Project</h2>
            <button className='border-[1px] border-zinc-400 px-4 py-2 rounded-full mt-5'>Contact Us</button>
                </>
            )}
            {para && (
                <>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </>
            )}
           
          
        </div>
    </motion.div>
  )
}

export default Card