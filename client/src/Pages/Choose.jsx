import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Choose = () => {
  const nav = useNavigate();
  const handleRentaroom = ()=>{
    nav('/viewrooms')
  }
  return (

    <>
    <div className='min-h-screen flex md:flex-row flex-col items-center justify-around mx-5 md:mx-[20vh]'>
      <div className='shadow-xl rounded-xl w-[40vh] h-[40vh] flex flex-col items-center justify-center gap-10 cursor-pointer  hover:scale-110 duration-300'>
        <img src='./assets/shareroom.png' alt='shareroom icon' className='w-[25vh] h-[25vh]'/>
        <button className=' text-2xl'>Share Your Room</button>
      </div>
      <Link to={'/viewrooms'}><div className='shadow-xl rounded-xl w-[40vh] h-[40vh] flex flex-col items-center justify-center gap-10 cursor-pointer  hover:scale-110 duration-300'>
        <img src='./assets/searchhome.png' alt='shareroom icon' className='w-[26vh] h-[26vh] '/>
        <p className=' text-2xl'>Rent A Room</p>
      </div>
      </Link>
        </div> 
        </>
  )
}

export default Choose