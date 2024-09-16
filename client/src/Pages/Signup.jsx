import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const nav = useNavigate();
  const handleContinue = ()=>{
    nav('/profile')
  }
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center  ">
           {/*Login container */}
           
           <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 -mt-20">
           <div className="w-1/2 md:block hidden">
              <img src="/assets/login.jpg" className=" rounded-2xl" alt="loginvector"/>
            </div>
            <div className="md:w-1/2 px-16">
              <h2 className="font-bold text-2xl text-[#4A3568]">Register</h2>
              <h3 className="text-sm mt-4 text-[#4A3568]">Become part of <span className='satisfy-regular'>exclusive</span> women only community</h3>

              <form className="flex flex-col gap-2">
                <input type='text' className='outline-none focus-within:border-purple-800 focus-within:bg-purple-200 placeholder-purple-300 focus-within:placeholder-purple-600 duration-200 p-2 mt-8 rounded-xl border text-[#4A3568]' placeholder='Username'/>
                <input className="outline-none focus-within:border-purple-800 focus-within:bg-purple-200 placeholder-purple-300 focus-within:placeholder-purple-600 duration-200 p-2 mt-4 rounded-xl border text-[#4A3568]" type="email" placeholder="Email"/>
                <div className="relative">
                <input className="outline-none focus-within:border-purple-800 focus-within:bg-purple-200 placeholder-purple-300 focus-within:placeholder-purple-600 duration-200 p-2 mt-4 rounded-xl border text-[#4A3568] w-full" type="password" placeholder="Password"/>
                <svg className="absolute top-1/2 right-3 translate-y-1/2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye absolute top-1/2 right-3 translate-y-1/2" viewBox="0 0 16 16">
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
</svg>
                </div>
                <button className="bg-[#4A3568] rounded-xl text-white py-2 " onClick={handleContinue}>Continue</button>
              </form>
              <div className="text-xs mt-3 flex justify-between items-center">
                <p>Already have an account?</p>
                <Link to={'/login'} className="py-2 px-1 bg-white border-rounded-xl rounded-xl my-2">Login</Link>
              </div>
            </div>
         
           </div>
    </section>
  );
}

export default Signup