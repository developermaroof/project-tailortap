import React from 'react'
import { IoMdClose } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa6";
import Nav4Green from "../components/nav4Green"
import { Link } from 'react-router-dom';

const congratulations = () => {
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
                        <div className='absolute top-5 left-5 bg-green-500 rounded-full p-1'>
                            <FaAngleLeft />
                        </div>
                    </div>
                    {/*  */}
                    <div className='flex flex-col gap-20 justify-center items-center text-center'>
                        <div className='flex flex-col gap-4'>
                            <p className='text-[70px]'>🎉</p>
                            <h1 className='font-bold font-poppins text-white uppercase'>Congratulations!</h1>
                            <p className='text-white font-poppins font-normal'>You’ve completed your client informations</p>
                        </div>
                        <button className='bg-white w-full rounded-[4px] p-3 text-themeColor font-bold font-poppins'><Link to="/home">OK</Link></button>
                    </div>
                </div>
            </div>
            <Nav4Green />
        </div>
  )
}

export default congratulations