import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'
import ScreenShot from '../assets/uploadscreenshot.png'
const BankInfo = () => {
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
            <div className='pb-1 pt-16'>
                {/*  */}
                <div className='mt-10 flex flex-col text-center text-xl justify-center items-center font-bold font-poppins'>
                    <h1>BANK ACCOUNT <br /> INFORMATION</h1>
                    <div className='border-[1px] border-themeColor w-[200px] leading-tight'></div>
                </div>
                <div className='mt-10 flex flex-col gap-4'>
                    <div className='flex flex-col gap-10'>
                        <div>
                            <label className='text-sm font-poppins'>Transection ID</label>
                            <input type="number" placeholder='#3100098097656' className='mt-2 border-[1px] p-2 pl-4 text-sm border-themeColor rounded-[6px] w-[250px]'/>
                        </div>
                        <div>
                            <p className='text-sm font-poppins'>Upload Screenshot</p>
                            <div className='shadow-md gap-3 mt-4 shadow-gray-400 rounded-md cursor-pointer flex flex-col justify-center items-center p-6 text-center'>
                                <img src={ScreenShot} alt="" className='w-[50px] h-[50px]'/>
                                <p className='text-xs'>Upload your <span className='text-themeColor'>Screenshot</span> here to <br /> confirm purchase</p>
                            </div>
                        </div>
                    </div>
                    <button className='flex justify-center font-bold font-poppins text-white cursor-pointer py-3 mt-10 bg-themeColor'>
                        <Link to="/thankyou"><h1>CONFIRM PURCHASE</h1></Link>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BankInfo