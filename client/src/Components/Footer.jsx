import React from 'react'

const Footer = () => {
  return (
    <footer className=' flex gap-5 py-[2%] md:flex-row flex-col md:justify-between justify-center items-center md:px-[1%] md:pb-[2%] md:items-start list-none bg-[rgb(246,6,134)] text-[rgb(253,198,230)]'>
        <nav className='sheshare flex flex-col items-center'>
        <li className=' text-3xl  text-[rgb(57,14,77)] dancing-script'>SheShares</li>
        <li className='cursor-pointer text-wrap text-xl'>About Us</li>
        <li className='cursor-pointer text-wrap text-xl'>Careers</li>
        <li className='cursor-pointer text-wrap text-xl'>Contact Us</li>
        <li className='cursor-pointer text-wrap text-xl'>Follow Us</li></nav>
        <nav className='support flex flex-col items-center'>
        <li className='text-3xl  text-[rgb(57,14,77)] dancing-script'>Support</li>
          <li className='cursor-pointer text-wrap text-xl '>FAQ</li>
          <li className='cursor-pointer text-wrap text-xl '>Cancellation Policy</li>
        </nav>
        <nav className='becomehost flex flex-col items-center'>
        <li className='text-3xl  text-[rgb(57,14,77)] text-wrap dancing-script'>Become a host</li>
          <li className='cursor-pointer text-wrap text-xl'>Hosting Resources</li>
          <li className='cursor-pointer text-wrap text-xl'>Hosting Responsibility</li>
          <li className='cursor-pointer text-wrap text-xl'>Share a Room</li>
          <li className='cursor-pointer text-wrap text-xl'>Pets</li>
        </nav>
        <nav className='terms flex flex-col items-center'>
          <li className='text-3xl  text-[rgb(57,14,77)] text-wrap dancing-script'>Terms and Privacy</li>
          <li className='text-wrap text-xl'>Terms and Conditions</li>
          <li className='text-wrap text-xl'>Privacy Policy</li>
        </nav>
    </footer>
  )
}

export default Footer