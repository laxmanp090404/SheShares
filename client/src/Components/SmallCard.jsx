import React from 'react'

const SmallCard = ({img,place,distance}) => {
  return (
    <div className='flex items-center space-x-4 hover:bg-purple-100 rounded-lg cursor-pointer hover:scale-105 m-2 mt-5 duration-200 ease-out'>
        <div className='relative'>
               <img src={img} className='rounded-lg w-16 h-12' />
        </div>
        <div>
            <h2 className='text-pink-950'>{place}</h2>
            <h2 className='text-pink-500'>{distance}</h2>
        </div>
    </div>
//    <div className='flex items-center space-x-4 mt-5 m-2 rounded-lg cursor-pointer hover:bg-pink-100'>
//       {/* left */}
//            <div className='w-16 h-16 '>
//               <img src={img} className='rounded-lg'/>
//                         </div>
//            {/* rigth */}
//            <div className='text-sm'>
//                <h1>{place}</h1>
//                <h1>{distance}</h1>
//            </div>
//    </div>
  )
}

export default SmallCard