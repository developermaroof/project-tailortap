import React from 'react'
import { IoMdClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";


const chooseLang = () => {
  return (
    <div className='m-4'>
      {/*  */}
      <div className='pb-1 pt-16'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='font-bold font-poppins uppercase leading-tight tracking-wide'>Choose</h1>
          <h1 className='font-bold font-poppins uppercase leading-tight tracking-wide'>Language</h1>
          <div className='border-[1px] border-green-500 w-[150px]'></div>
        </div>
        <div className='relavite'>
          <div className='absolute top-5 right-5 bg-green-500 rounded-full p-1'>
            <IoMdClose />
          </div>
        </div>
      </div>
      {/*  */}
      <div className='py-2 mt-10'>

        <div className='flex flex-col gap-5'>
          
          <button className='flex justify-between cursor-pointer hover:bg-hoverColor bg-hoverColor p-4 shadow-md shadow-gray-400 rounded-md'>
            <h1 className='font-inner font-normal'>English</h1>
            <div className='bg-green-500 rounded-full border-2 border-green-500 flex justify-center items-center p-1'> <FaCheck className='w-[12px] h-[12px]'/> </div>
          </button>

          <button className='flex justify-between cursor-pointer hover:bg-hoverColor p-4 shadow-md shadow-gray-400 rounded-md'>
            <h1 className='font-inner font-normal'>Urdu</h1>
            {/* <div className='bg-green-500 rounded-full border-2 border-green-500 flex justify-center items-center p-1'> <FaCheck className='w-[12px] h-[12px]'/> </div> */}
          </button>
          
          <button className='flex justify-between cursor-pointer hover:bg-hoverColor p-4 shadow-md shadow-gray-400 rounded-md'>
            <h1 className='font-inner font-normal'>Sindhi</h1>
            {/* <div className='bg-green-500 rounded-full border-2 border-green-500 flex justify-center items-center p-1'> <FaCheck className='w-[12px] h-[12px]'/> </div> */}
          </button>

          <button className='flex justify-center font-bold font-poppins text-white cursor-pointer py-2 mt-10 bg-themeColor'>
            <h1>Continue</h1>
          </button>
        </div>

      </div>
      {/*  */}
    </div>
  )
}

export default chooseLang