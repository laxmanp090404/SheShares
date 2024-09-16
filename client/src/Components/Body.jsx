import React from 'react'
import { useNavigate } from 'react-router-dom'

const Body = () => {
  const nav = useNavigate();
  
  const handleGetStarted = ()=>{
       nav('/signup');
  }
  return (
    <div className='flex flex-col gap-5 md:flex-row  md:justify-between items-start pt-[10vh] md:pt-0 md:mx-10 md:my-[10vh] min-h-screen  mx-5'>
      <div className='content flex flex-col items-start gap-[5vh]'>
          <p className='md:text-[10vh] text-[7vh] satisfy-regular' >Discover Your Space</p>
          <p className='md:text-[4vh] text-[3vh] text-wrap'>Unlock the power of community. Experience personalized living tailored for <span className='satisfy-regular'>women</span>, with a free trial to discover your limitless potential.
           </p>
           <button className='text-2xl border-4 px-[2vh] py-[1vh] rounded border-pink-600 text-pink-950' onClick={handleGetStarted}>Join us today</button>
      </div>
      <div className='vector relative'>
            
              <img src='./assets/female.png' alt='women' title='women' className=' vector md:w-[80rem] md:mr-0 w-[50rem]'/>
              
      </div>
    
    </div>
  )
}

export default Body