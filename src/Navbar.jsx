import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { companyLogo } from './assets/Image'
import Footer from './Components/Footer'
import { AlignRight, X, XCircle } from 'lucide-react'
// import image from '../src/Images/'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const displayMenu = () => {
    setShowMenu(!showMenu)
  }
  // const cancelMenu = () => {
  //   setShowMenu(!showMenu)
  // }

  return (
    <>
    {/* mobile Menu */}
    <nav className=' mt-5 shadow-lg p-2 bg-white md:hidden xl:hidden w-full'>
      <div className='flex justify-between items-center'>
        <Link to={'/'} >
          <img className='ml-0  w-[50px] cursor-pointer' src={companyLogo} alt="company logo" srcset=""  />
        </Link>
        <button onClick={displayMenu} className=''>
          {!showMenu? <AlignRight className='text-[#071a2b]'/> : <X className='border border-black rounded-[5px] text-[#071a2b]'/>}
        </button>
      </div>
      {showMenu?  
        <div className='flex gap-y-7 flex-col mt-10 justify-center bg-[#F8F9FB]  '>
          <Link className='hover:underline decoration-[#071A2B] underline-offset-[20px] text-[1.2rem] text-center' to={'/'}>Home</Link>
          <Link className='hover:underline decoration-[#071A2B] underline-offset-[20px] text-[1.2rem] text-center' to={'/about-us'}>About Us</Link>
          <Link className='hover:underline decoration-[#071A2B] underline-offset-[20px] text-[1.2rem] text-center' to={'/service'}>services</Link>
          <Link className='hover:underline decoration-[#071A2B] underline-offset-[20px] text-[1.2rem] text-center' to={'/projects'}>Our Projects</Link>
          <Link className='hover:underline decoration-[#071A2B] underline-offset-[20px] text-[1.2rem] text-center' to={'/contact-us'}>Contact Us</Link>
        </div> : <h1 className='hidden'></h1>
    }
    </nav>

    {/* desktop Menu */}
    <nav className='hidden md:flex md:justify-between md:items-center xl:flex xl:justify-between xl:items-center mt-5 shadow-lg p-2 bg-white w-full'>
      <Link to={'/'} >
        <img className='xl:ml-20 ml-0 xl:w-[60px] w-[50px] cursor-pointer md:ml-10' src={companyLogo} alt="company logo" srcset=""/>
      </Link>
        <div className='flex gap-7 mr-20 md:flex-row xl:flex-row flex-col '>
          <Link className='hover:underline decoration-[#071A2B] underline-offset-[20px] text-[1.2rem]' to={'/'}>Home</Link>
          <Link className='hover:underline decoration-[#071A2B] underline-offset-[20px] text-[1.2rem]' to={'/about-us'}>About Us</Link>
          <Link className='hover:underline decoration-[#071A2B] underline-offset-[20px] text-[1.2rem]' to={'/service'}>services</Link>
          <Link className='hover:underline decoration-[#071A2B] underline-offset-[20px] text-[1.2rem]' to={'/projects'}>Our Projects</Link>
          <Link className='hover:underline decoration-[#071A2B] underline-offset-[20px] text-[1.2rem]' to={'/contact-us'}>Contact Us</Link>
        </div>
    </nav>
    {/* <Footer /> */}
    </>
  )
}

export default Navbar