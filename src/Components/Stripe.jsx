import React from 'react'

function Stripe({url,num,key}) {
  return (
    <div key={key} className='flex items-center w-1/4 border-[0.7px] border-zinc-400 px-5 py-4 justify-between'>
        <img  src={url} alt=""  />
        <h6>{num}</h6>
    </div>
  )
}

export default Stripe