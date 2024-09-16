import React from 'react'

const MediumCard = ({img,title}) => {
  return (
    <div className='cursor-pointer mt-5 m-2 hover:scale-105 duration-200 ease-out'>
        <div className='relative h-60 w-80'><img src={img} className='rounded-xl h-60 w-80'/></div>
        <p className='text-purple-900 text-2xl mt-3 '>{title}</p>
    </div>
  )
}

export default MediumCard