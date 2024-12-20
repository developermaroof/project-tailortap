import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { FaSearch, FaRegUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

const nav = () => {
  return (
    <nav className="fixed bottom-0 w-full z-50 mx-auto max-w-sm">
      <div>
        {/* nav inner */}
        <div className="w-full px-8 bg-black h-[40px] flex justify-between items-center text-white">
          <div className='bg-black rounded-full p-2 text-themeColor mb-10 border-4 border-themeColor'>
            <GoHomeFill className='w-[20px] h-[20px] cursor-pointer'/>
          </div>
          <FaSearch className='w-[20px] h-[20px] cursor-pointer'/>
          <IoIosSettings className='w-[25px] h-[25px] cursor-pointer'/>
          <FaRegUser className='w-[20px] h-[20px] cursor-pointer'/>
        </div>
      </div>
    </nav>
  )
}

export default nav