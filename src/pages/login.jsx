import React from 'react'
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const login = () => {
  return (
    <div className='flex flex-col  justify-center items-center m-4 py-2 mx-auto max-w-sm '>
      <div className='mt-20 '>
        <img src={Logo} alt="" />
      </div>
      <div className='flex flex-col justify-center items-center mt-20 '>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-bold font-poppins uppercase text-[30px] leading-tight tracking-wide'>Login</h1>
          <div className='border-[1px] border-green-500 w-[110px]'></div>
        </div>
        <div className='p-2 mt-12 flex flex-col justify-center items-center gap-2 '>
            <input type="text" placeholder='Your Name' className='border-[1px] p-2 pl-4 text-sm border-green-600 rounded-[50px] w-[250px]'/>
            <input type="text" placeholder='Your Name' className='border-[1px] p-2 pl-4 text-sm border-green-600 rounded-[50px] w-[250px]'/>
        </div>
        <div className='w-full px-[10px]'>
          <p className='text-red-600 text-[12px] text-right'>Forgot Password?</p>
        </div>
      </div>
      <div className=' mt-4'>
        <button className='font-bold font-poppins text-white cursor-pointer bg-themeColor rounded-[50px] w-[250px] p-2'>Log in</button>
      </div>
      <div className='flex justify-between items-center mt-6  w-[250px]'>
        <p className='text-gray-400 text-sm tracking-wide'>Don't have an Account?</p>
        <div>
          <button className='text-red-600 text-sm'><Link to="/signup">Sign up</Link></button>
          <div className='border-[1px] border-red-600 w-full leading-tight'></div>
        </div>
        
      </div>
    </div>
  )
}

export default login