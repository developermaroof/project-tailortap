import { useState } from "react";
import { FaAngleLeft, FaPlus } from "react-icons/fa6";
import Video from "../assets/video.png"
import Nav from "../components/nav"
import NoClients from "../assets/noclients.png"
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import ModelImg from "../assets/modelimg.png"

const Home = () => {

  const [isModelOpen, setIsModelOpen] = useState(false)

  const toggleModel = () => {
    setIsModelOpen(!isModelOpen)
  }

  return (
    <div className='mx-auto max-w-sm'>
      <div className='m-4'>
        {/*  */}
        <div className='pb-1 pt-16'>
          <div className='relavite'>
            <div onClick={toggleModel} className='absolute top-5 right-5 bg-black rounded-full p-[2px] cursor-pointer'>
              <img src={Video} alt="" className='w-[22px] h-[22px]'/>
            </div>
            <div className='absolute top-5 left-5'>
                <FaAngleLeft className='w-[22px] h-[22px]'/>
            </div>
          </div>
          {/* Model */}
          {isModelOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white mx-auto mx-6 p-8 rounded-lg max-w-sm w-full shadow-lg relative">
                  <div className='absolute top-5 right-5 text-white bg-themeColor rounded-full p-1 cursor-pointer' onClick={toggleModel}>
                    <IoMdClose />
                  </div>
                  <div className="flex flex-col justify-center items-center text-center">
                    <img src={ModelImg} alt="" className="w-[50px]"/>
                    <h1 className="font-bold font-poppins text-black text-[17px] leading-loose uppercase">Upgrade your plan!</h1>
                    <p className="font-poppins text-xs">You’re in your 7 days free trail</p>
                    <button className="bg-themeColor text-white cursor-pointer text-xs rounded-[4px] p-2 px-6 mt-4 font-bold font-poppins">Upgrade Now</button>
                  </div>
                </div>
            </div>
          )}
          {/*  */}
          <div className='flex flex-col justify-center items-center mt-14'>
            <div className='bg-themeColor w-full flex flex-col justify-center items-center p-5 rounded-lg text-center'>
                <div className='bg-plusIconBg rounded-full p-1 flex justify-center items-center text-center'>
                <Link to="/clientdetails"><FaPlus  className='w-[25px] h-[25px] text-white' /></Link>
                </div>
                <Link to="/clientdetails"><p className='text-white mt-2 text-sm'>Add New Member</p></Link>
            </div>
            <div className='border-themeColor border-2 w-full flex flex-col justify-center items-center p-4 mt-6 rounded-lg text-center'>
                <p className='text-black text-sm font-semibold'>Watch previous data</p>
            </div>
          </div>
          {/*  */}
          <h1 className='font-bold mt-10'>My Clients</h1>
          <div className='flex flex-col justify-center relative items-center text-center'>
            <img src={NoClients} alt="" className='w-full h-full'/>
            <p className='text-gray-400 absolute bottom-2'>No Client has been created yet..</p>
          </div>
        </div>
      </div>
      <Nav />
    </div>

  )
}

export default Home;