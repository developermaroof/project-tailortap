import React from 'react'
import { IoMdClose } from "react-icons/io";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Nav from "../components/nav"
import Cuffs from "../assets/cuffs.png"
import { Link } from'react-router-dom';
const cuffs = () => {
  return (
    <div className='mx-auto max-w-sm'>
        <div className='m-4'>
            {/*  */}
            <div className='pb-1 pt-16'>
                {/*  */}
                <div className='relavite'>
                    <div className='absolute top-5 right-5 bg-themeColor rounded-full p-1'>
                        <IoMdClose />
                    </div>
                    <div className='absolute top-5 left-5 bg-themeColor rounded-full p-1'>
                        <FaAngleLeft />
                    </div>
                </div>
                {/*  */}
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col justify-center'>
                        <h1 className='font-bold font-inner uppercase'>Measurements</h1>
                        <div className='border-[1px] border-green-500 w-[140px]'></div>
                    </div>

                    <div className='flex flex-col justify-center items-center gap-10'>
                        <div>
                            <p className='font-bold font-inner text-white cursor-pointer bg-themeColor rounded-sm text-center w-[120px] p-2'>Cuffs</p>
                        </div>
                        <div className='relative h-[330px]'>
                            <img src={Cuffs} alt="armsvector" />
                            <div className='flex rotate-[105deg] right-[-55px] text-lg top-[170px] justify-center items-center absolute'>
                                <p className='text-themeColor'>- - - - - - - -</p>
                                <FaAngleRight className='text-themeColor'/>
                            </div>
                            <div className='flex rotate-[65deg] right-[-32px] text-lg top-[108px] justify-center items-center absolute'>
                                <FaAngleLeft className='text-themeColor'/>
                                <p className='text-themeColor'>- -</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <div>
                            <input type="text" placeholder='Enter Cuffs' className='text-sm border-themeColor border-[1px] rounded-md w-full p-3'/>
                        </div>
                        <div>
                            <button className='font-bold font-poppins text-white cursor-pointer bg-themeColor rounded-md w-full p-3'> <Link to="/measurements/collar">Next</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Nav />
    </div>
  )
}

export default cuffs