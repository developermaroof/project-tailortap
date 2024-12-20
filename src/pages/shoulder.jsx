import React from 'react'
import { IoMdClose } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa6";
import Nav from "../components/nav"
import Shoulder from "../assets/shoulder.png"
import shoulderrightleft from "../assets/shoulderrightleft.png"
import { Link } from'react-router-dom';
const shoulder = () => {
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
                            <p className='font-bold font-inner uppercase text-white cursor-pointer bg-themeColor rounded-sm text-center w-[120px] p-2 uppercase'>Shoulder</p>
                        </div>
                        <div className='relative  h-[280px]'>
                            <img src={Shoulder} alt="lengthvector" className='w-[250px]'/>
                            <div className='flex right-[30px] text-lg top-[75px] justify-center items-center absolute'>
                                <img src={shoulderrightleft} alt="" />
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <div>
                            <input type="text" placeholder='Enter Shoulder' className='text-sm border-themeColor border-[1px] rounded-md w-full p-3'/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <button className='font-bold font-poppins uppercase text-white cursor-pointer bg-themeColor rounded-md w-full p-2'> <Link to="/measurements/arms">Next</Link></button>
                            <button className='font-bold font-poppins text-themeColor cursor-pointer border-themeColor border-[1px] rounded-md uppercase w-full p-2'>Skip</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Nav />
    </div>
  )
}

export default shoulder