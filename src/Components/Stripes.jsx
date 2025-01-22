import React from 'react'
import Stripe from './Stripe'

function Stripes() {
    let data = [
        {url:'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg',num:48},
        {url:'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg',num:12},
        {url:'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg',num:48},
        {url:'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg',num:12},
        {url:'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg',num:48},
    ];
  return (
    <div className='mt-[10vh] flex items-center '>
        {data.map((elem,index)=>{
            return (
                <Stripe key={index} url={elem.url} num={elem.num}/>
            )
        })}
          
         
        
        
    </div>
  )
}

export default Stripes