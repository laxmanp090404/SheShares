import React from 'react'

const RoomListBanner = () => {
  return (
    <div className='relative'>
        <img src='/assets/banner.jpg' className='w-full h-[300px] sm:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[650px]'/>
        <div className='absolute text-[rgb(0,0,0)] top-1/2 w-full text-center'>
            <p className='text-sm text-bold md:text-lg font-bold'>Not sure where to go?Perfect</p>
            <button className='text-purple-400 bg-white px-10 py-4 rounded-full hover:shadow-2xl active:scale-90 duration-150 my-3 font-bold'>I'm flexible</button>
        </div>
    </div>
  )
}

export default RoomListBanner