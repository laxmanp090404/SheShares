import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Textarea from '@mui/joy/Textarea';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
const Profile = () => {
    // const [startDate, setStartDate] = useState(new Date());
    const nav = useNavigate();
  
  const handleSignUp=(e) =>{
    e.preventDefault();
     nav('/login');
  }
  return (
  <>
        <section className="bg-gray-50 min-h-screen flex items-center justify-center  ">
           {/*Login container */}
           
           <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 -mt-20">
           <div className="w-1/2 md:block hidden">
              <img src="/assets/login.jpg" className=" rounded-2xl" alt="loginvector"/>
            </div>
            <div className="md:w-1/2 px-16">
              <h2 className="font-bold text-2xl text-[#4A3568]">Tell Us About Yourself</h2>

              <form className="flex flex-col gap-5 my-7">
                 <Textarea placeholder='Your Hobbies.....' minRows={2} maxRows={2} className="outline-none focus-within:border-purple-800 focus-within:bg-purple-200 placeholder-purple-300 focus-within:placeholder-purple-600 duration-200"/>
                 <Select placeholder="Smoking status">
                    <Option value={"Smoker"} className='text-red-600'>Smoker</Option>
                    <Option value={"Not a Smoker"} className='text-[rgb(77,255,86)]'>Not a Smoker</Option>

                 </Select>
                <div className="date flex flex-col gap-2">
                    <p className='text-[#4A3568]'>BirthDay:</p>
                <input type='date' className=' outline-none focus-within:border-purple-800 focus-within:bg-purple-200 placeholder-purple-300 focus-within:placeholder-purple-600 duration-200 rounded-sm p-2 text-[#4A3568] border' required/>
                </div>
                    
                <button type='submit' className="bg-[#4A3568] rounded-xl text-white py-2 " onClick={(e)=>{handleSignUp(e)}}>SignUp</button>
              </form>
              <div className="text-xs mt-3 flex justify-between items-center">
                <p>Already have an account?</p>
                <Link to={'/login'} className="py-2 px-1 bg-white border-rounded-xl rounded-xl my-2">Login</Link>
              </div>
            </div>
         
           </div>
    </section>
  </>
  )
}

export default Profile