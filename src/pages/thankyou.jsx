import React from 'react'
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
        <div className='mx-auto max-w-sm bg-themeColor h-[100vh]'>
            <div className='mx-4'>
                {/*  */}
                <div className='pb-1 pt-16 flex flex-col gap-32'>
                    {/*  */}
                    <div className='relavite'>
                        <div className='absolute top-5 right-5 bg-green-500 rounded-full p-1'>
                            <IoMdClose />
                        </div>
                    </div>
                    {/*  */}
                    <div className='flex flex-col gap-14 justify-center items-center text-center'>
                        <div className='flex flex-col gap-4'>
                            <h1 className='font-bold text-[30px] font-poppins text-white uppercase'>THANK YOU VERY MUCH!</h1>
                            <p className='text-white font-poppins font-normal'>Your Submitting has been done!</p>
                        </div>
                        <button className='bg-white w-full rounded-[4px] p-3 text-themeColor font-bold font-poppins'><Link to="/home">OK</Link></button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ThankYou