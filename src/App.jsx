import React from 'react'
import Navbar from './Components/Navbar'
import Work from './Components/Work'
import Stripes from './Components/Stripes'
import Products from './Components/Products'
import Marquees from './Components/Marquees'
import Cards from './Components/Cards'
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='bg-[#161618] w-full   text-white'>
        <Navbar/>
        <Work/>
        <Stripes/>
        <Products/>
        <Marquees/>
        <Cards/>
    </div>
  )
}

export default App