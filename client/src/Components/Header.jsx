import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
     {/* bg-gradient-to-r from-[rgb(255,20,196)] via-[rgb(246,86,214)] to-pink-500 text-white*/}
    <header className='flex justify-between px-[2%] py-[2%] items-center sticky top-0 left-0  z-20 bg-white'>
        <div className='logo'>
            <Link to={'/'}><p className='dancing-script text-3xl '>SheShares</p></Link>
        </div>
        <div className='access flex gap-[4%]'>
           <Link to={'/signup'} className='hover:bg-[rgb(255,170,230)] hover:rounded-full p-2  hover:text-pink-950 duration-700 border-b-4 border-transparent'>Register</Link>
           <Link to={'/login'} className='hover:bg-[rgb(255,170,230)] p-2 hover:rounded-full hover:text-pink-950 duration-700 border-b-4 border-transparent'>Login</Link>
        </div>
        </header>
        </>
  )
}

export default Header