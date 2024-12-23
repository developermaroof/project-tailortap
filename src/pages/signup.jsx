import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const SignUp = () => {
    const UserDetails = {
        firstname: '',
        lastname: '',
        email: '',
        number: '',
        password: ''
    }
    const [data, setData] = useState(UserDetails)

    const handleInput = (event) => {
        console.log(event.target.value)
        console.log(event.target.name)
        const name = event.target.name
        const value = event.target.value

        setData({...data, [name]: value })
    }

    console.log(data);
    

  return (
    <div className='flex flex-col  justify-center items-center m-4 py-2 mx-auto max-w-sm '>
        <div className='mt-20 '>
            <img src={Logo} alt="" />
        </div>
        <form>
            <div className='flex flex-col justify-center items-center mt-12 '>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='font-bold font-poppins uppercase text-[30px] leading-tight tracking-wide'>SignUp</h1>
                    <div className='border-[1px] border-green-500 w-[110px]'></div>
                </div>
                <div className='flex w-[250px] gap-3 mt-12'>
                    <input onChange={handleInput} type="text" name='firstname' placeholder='First Name' className='border-[1px] p-2 pl-4 text-sm border-green-600 rounded-[50px] w-[118px]'/>
                    <input onChange={handleInput} type="text" name='lastname' placeholder='Last Name' className='border-[1px] p-2 pl-4 text-sm border-green-600 rounded-[50px] w-[118px]'/>
                </div>
                <div className='p-2 mt-2 flex flex-col justify-center items-center gap-4 '>
                    <input onChange={handleInput} type="email" name='email' placeholder='Email' className='border-[1px] p-2 pl-4 text-sm border-green-600 rounded-[50px] w-[250px]'/>
                    <input onChange={handleInput} type="number" name='number' placeholder='Phone Number' className='border-[1px] p-2 pl-4 text-sm border-green-600 rounded-[50px] w-[250px]'/>
                    <input onChange={handleInput} type="password" name='password' placeholder='Password' className='border-[1px] p-2 pl-4 text-sm border-green-600 rounded-[50px] w-[250px]'/>
                </div>
                <div className='flex items-center mt-2 gap-2 px-2 w-[250px]'>
                    <input type="checkbox" name='checkbox'/>
                    <p className='text-gray-400 text-[12px] tracking-wide'>I Agree with <span className='text-red-600'>privacy</span> and <span className='text-red-600'>policy</span>?</p>
                </div>
            </div>
            <div className=' mt-4 flex justify-center'>
                <button className='font-bold font-poppins text-white cursor-pointer bg-themeColor rounded-[50px] w-[250px] p-2'> <Link to="/home">Sign up</Link></button>
            </div>
        </form>
    </div>
  )                  
}      

export default SignUp       