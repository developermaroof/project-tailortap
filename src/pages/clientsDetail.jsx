import React from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import Video from "../assets/video.png"
import Nav from "../components/nav"


const clientDetail = () => {
  return (
    <div className='mx-auto max-w-sm'>
      <div className='m-4'>
        {/*  */}
        <div className='pb-1 pt-16'>
          {/*  */}
          <div className='relavite'>
            <div className='absolute top-5 right-5 bg-black rounded-full p-[2px]'>
              <img src={Video} alt="" className='w-[22px] h-[22px]'/>
            </div>
            <div className='absolute top-5 left-5'>
                <FaAngleLeft className='w-[22px] h-[22px]'/>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
      <Nav />
    </div>

  )
}

export default clientDetail