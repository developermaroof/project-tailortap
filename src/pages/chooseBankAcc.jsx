import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Jazzcash from "../assets/jazzcash.png"
import Easypaisa from "../assets/easypaisa.png"
const ChooseBankAcc = () => {
  return ( 
    <div className='mx-auto max-w-sm'>
        <div>
            <div className='relative'>
                <div className='absolute top-5 right-5 bg-green-500 rounded-full p-1'>
                    <IoMdClose />
                </div>
            </div>
        </div>
        <div className='m-4'>
            {/*  */}
            <div className='pb-1 pt-16 uppercase'>
                {/*  */}
                <div className='mt-10 flex flex-col text-center text-xl justify-center items-center font-bold font-poppins'>
                    <h1>Choose your Bank <br /> Account</h1>
                    <div className='border-[1px] border-themeColor w-[200px] leading-tight'></div>
                </div>
                <div className='mt-20 flex flex-col gap-4'>
                    <div className='cursor-pointer relative hover:bg-hoverColor bg-hoverColor p-6 shadow-md shadow-gray-400 rounded-md flex font-poppins font-semibold text-sm items-center'>
                        <img src={Jazzcash} alt="" className='w-[100px] h-[100px] absolute left-[80px]'/>
                        <div className='bg-themeColor right-[-8px] top-[-8px] absolute rounded-full border-2 border-themeColor flex justify-center items-center p-1'> <FaCheck className='w-[12px] h-[12px]'/> </div>
                    </div>
                    <div className='cursor-pointer relative hover:bg-hoverColor p-6 shadow-md shadow-gray-400 rounded-md flex font-poppins font-semibold text-sm justify-between items-center'>
                        <img src={Easypaisa} alt="" className='w-[100px] h-[100px] absolute left-[80px]'/>
                    </div>
                    <div className='cursor-pointer hover:bg-hoverColor p-4 shadow-md shadow-gray-400 rounded-md flex font-poppins font-semibold text-sm justify-center text-gray-400 items-center'>
                        <p>+ Add another option</p>
                    </div>
                    <button className='flex justify-center font-bold font-poppins text-white cursor-pointer py-3 mt-10 bg-themeColor'>
                        <Link to="/bankinfo"><h1>Next</h1></Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ChooseBankAcc