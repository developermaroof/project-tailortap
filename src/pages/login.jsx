import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const navigate = useNavigate()

  const handleInput = (event) => {
    console.log(event.target.value)
    console.log(event.target.name)
    const name = event.target.name
    const value = event.target.value
    if ("username" === name) {
      setUsername(value)
    }
    if ("password" === name) {
      setPassword(value)
    }
}

const handleSubmit = (event) => {
  event.preventDefault();

  if (username === "" || password === "") {
    alert("Please enter details");
  } else {
    let getUserDetails = JSON.parse(localStorage.getItem("user")) || [];

    // Find a matching user
    let matchedUser = getUserDetails.find(
      (user) => user.firstname === username && user.password === password
    );

    if (matchedUser) {
      alert("Login Successfully");
      navigate("/home");
    } else {
      alert("Invalid username or password");
    }
  }
};


  return (
    <div className='flex flex-col  justify-center items-center m-4 py-2 mx-auto max-w-sm '>
      <div className='mt-20 '>
        <img src={Logo} alt="" />
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col justify-center items-center mt-20 '>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='font-bold font-poppins uppercase text-[30px] leading-tight tracking-wide'>Login</h1>
            <div className='border-[1px] border-green-500 w-[110px]'></div>
          </div>
          <div className='p-2 mt-12 flex flex-col justify-center items-center gap-2 '>
              <input onChange={handleInput} type="text" name='username' placeholder='Your Name' className='border-[1px] p-2 pl-4 text-sm border-green-600 rounded-[50px] w-[250px]'/>
              <input onChange={handleInput} type="text" name='password' placeholder='Your Password' className='border-[1px] p-2 pl-4 text-sm border-green-600 rounded-[50px] w-[250px]'/>
          </div>
          <div className='w-full px-[10px]'>
            <p className='text-red-600 text-[12px] text-right'>Forgot Password?</p>
          </div>
        </div>
        <div className=' mt-4'>
          <button className='font-bold font-poppins text-white cursor-pointer bg-themeColor rounded-[50px] w-[250px] p-2'>Log in</button>
        </div>
      </form>
      <div className='flex justify-between items-center mt-6 w-[250px]'>
        <p className='text-gray-400 text-sm tracking-wide'>Don't have an Account?</p>
        <div>
          <button className='text-red-600 text-sm'><Link to="/signup">Sign up</Link></button>
          <div className='border-[1px] border-red-600 w-full leading-tight'></div>
        </div>
      </div>
    </div>
  )
}

export default Login