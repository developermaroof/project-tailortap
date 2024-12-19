import React from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import Video from "../assets/video.png"
import Nav from "../components/nav"
import { Link } from'react-router-dom';


const clientDetail = () => {
  return (
    <div className='mx-auto max-w-sm'>
      <div className='m-4'>
        {/*  */}
        <div className='pb-1 pt-16'>
          {/*  */}
          <div className='relavite'>
            <div className='absolute top-5 right-5 bg-black rounded-full p-[2px]'>
              <img src={Video} alt="" className='w-[22px] h-[22px]'/>
            </div>
            <div className='absolute top-5 left-5'>
                <FaAngleLeft className='w-[22px] h-[22px]'/>
            </div>
          </div>
          {/*  */}
          <div className='flex flex-col gap-14'>
            <div className='flex flex-col justify-center'>
              <h1 className='font-bold font-inner uppercase'>Client Detail</h1>
              <div className='border-[1px] border-green-500 w-[120px]'></div>
            </div>

            <div>
              <form className='flex flex-col gap-6'>
                <div className='text-sm'>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" className='border-themeColor border-[2px] rounded-md w-full p-2'/>
                </div>
                <div className='text-sm'>
                  <label htmlFor="cast">Cast</label>
                  <input type="text" className='border-themeColor border-[2px] rounded-md w-full p-2'/>
                </div>
                <div className='text-sm'>
                  <label htmlFor="number">Phone Number*</label>
                  <input type="number" className='border-themeColor border-[2px] rounded-md w-full p-2'/>
                </div>
                <div className='text-sm'>
                  <label htmlFor="address">Address <span className='text-gray-500'>(optional)</span> </label>
                  <input type="text" className='border-themeColor border-[2px] rounded-md w-full p-2'/>
                </div>
                <div>
                  <button className='font-bold font-poppins text-white cursor-pointer bg-themeColor rounded-md w-full p-3'> <Link to="/measurements/length">Next</Link></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Nav />
    </div>

  )
}

export default clientDetail