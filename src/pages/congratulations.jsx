import React from 'react'
import { Link } from 'react-router-dom';

const Congratulations = () => {
  return (
    <div className='mx-auto max-w-xs bg-themeColor h-[100vh] flex h-[90vh] overflow-y-scroll'>
        <div className='mx-4 flex flex-col gap-20 justify-center items-center text-center'>
            <div className='flex flex-col gap-4'>
                <p className='text-[70px]'>🎉</p>
                <h1 className='font-bold font-poppins text-white uppercase'>Congratulations!</h1>
                <p className='text-white font-poppins font-normal'>You’ve completed your client informations</p>
            </div>
            <button className='bg-white w-full rounded-[4px] p-3 text-themeColor font-bold font-poppins'><Link to="/home">OK</Link></button>
        </div>
    </div>
  )
}

export default Congratulations