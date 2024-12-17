import React from 'react'
import { GoHomeFill } from "react-icons/go";
import { FaSearch, FaRegUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

const nav = () => {
  return (
    <nav className="fixed bottom-0 w-full z-50">
      <div>
        {/* nav inner */}
        <div className="w-full px-8 bg-black h-[40px] flex justify-between items-center text-white">
            <div className='bg-themeColor rounded-full p-2 text-black mb-10 border-4 border-white'>
                <GoHomeFill className='w-[20px] h-[20px]'/>
            </div>
            <FaSearch className='w-[20px] h-[20px]'/>
            <IoIosSettings className='w-[25px] h-[25px]'/>
            <FaRegUser className='w-[20px] h-[20px]'/>
        </div>
      </div>
    </nav>
  )
}

export default nav