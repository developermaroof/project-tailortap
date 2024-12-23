import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'

const choosePlan = () => {
  return ( 
    <div className='mx-auto max-w-sm'>
        <div>
            <div className='relative bg-themeColor rounded-b-[40px] py-10'>
                <div className='absolute top-5 right-5 bg-green-500 rounded-full p-1'>
                    <IoMdClose />
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='font-semibold font-poppins text-xl uppercase'>This is Your Plan</h1>
                    <ul className='list-disc font-poppins text-sm mt-3'>
                        <li>1 year plan</li>
                        <li>1 Month plan</li>
                        <li>1 week plan</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='m-4'>
            {/*  */}
            <div className='pb-1 pt-16 uppercase'>
                {/*  */}
                <div className='flex flex-col text-xl justify-center items-center font-bold font-poppins'>
                    <h1>Choose your plan:</h1>
                    <div className='border-[1px] border-themeColor w-[200px] leading-tight'></div>
                </div>
                <div className='mt-10 flex flex-col gap-4'>
                    <div className='cursor-pointer relative border-2 border-themeColor hover:bg-hoverColor bg-hoverColor p-5 shadow-md shadow-gray-400 rounded-md flex font-poppins font-semibold text-sm items-center'>
                        <div className='flex justify-between w-full'>
                            <p>1 year / 12 Months</p>
                            <p className='border-l-[1px] border-gray-400 pl-4'>8000/-</p>
                        </div>
                        <div className='bg-themeColor right-[-8px] top-[-8px] absolute rounded-full border-2 border-themeColor flex justify-center items-center p-1'> <FaCheck className='w-[12px] h-[12px]'/> </div>
                    </div>
                    <div className='cursor-pointer hover:bg-hoverColor p-4 shadow-md shadow-gray-400 rounded-md flex font-poppins font-semibold text-sm justify-between items-center'>
                        <p>3 Months</p>
                        <p className='border-l-[1px] border-gray-400 pl-4'>2000/-</p>
                    </div>
                    <div className='cursor-pointer hover:bg-hoverColor p-4 shadow-md shadow-gray-400 rounded-md flex font-poppins font-semibold text-sm justify-between items-center'>
                        <p>1 Months</p>
                        <p className='border-l-[1px] border-gray-400 pl-4'>1000/-</p>
                    </div>
                    <button className='flex justify-center font-bold font-poppins text-white cursor-pointer py-3 mt-10 bg-themeColor'>
                        <Link to="/choosebankacc"><h1>Next</h1></Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default choosePlan