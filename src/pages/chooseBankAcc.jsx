import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Jazzcash from "../assets/jazzcash.png";
import Easypaisa from "../assets/easypaisa.png";

const ChooseBankAcc = () => {
  const [activeBank, setActiveBank] = useState("Jazzcash");

  const handleBankSelection = (bank) => {
    setActiveBank(bank);
  };

  return (
    <div className='mx-auto max-w-xs h-[90vh] overflow-y-scroll'>
      <div>
        <div className='relative'>
          <div className='absolute top-5 right-5 bg-green-500 rounded-full p-1'>
            <IoMdClose />
          </div>
        </div>
      </div>
      <div className='m-4'>
        {/* Header */}
        <div className='pb-1 pt-16 uppercase'>
          <div className='mt-10 flex flex-col text-center text-xl justify-center items-center font-bold font-poppins'>
            <h1>Choose your Bank <br /> Account</h1>
            <div className='border-[1px] border-themeColor w-[200px] leading-tight'></div>
          </div>
          {/* Bank Options */}
          <div className='mt-20 flex flex-col gap-4'>
            {/* Jazzcash Option */}
            <div 
              className={`cursor-pointer relative p-6 shadow-md shadow-gray-400 rounded-md flex font-poppins font-semibold text-sm items-center ${
                activeBank === 'Jazzcash' ? 'bg-hoverColor' : 'hover:bg-hoverColor'
              }`} 
              onClick={() => handleBankSelection('Jazzcash')}
            >
              <img src={Jazzcash} alt="Jazzcash" className='w-[100px] h-[100px] absolute left-[80px]'/>
              {activeBank === 'Jazzcash' && (
                <div className='bg-themeColor right-[-8px] top-[-8px] absolute rounded-full border-2 border-themeColor flex justify-center items-center p-1'>
                  <FaCheck className='w-[12px] h-[12px]' />
                </div>
              )}
            </div>

            {/* Easypaisa Option */}
            <div 
              className={`cursor-pointer relative p-6 shadow-md shadow-gray-400 rounded-md flex font-poppins font-semibold text-sm items-center ${
                activeBank === 'Easypaisa' ? 'bg-hoverColor' : 'hover:bg-hoverColor'
              }`} 
              onClick={() => handleBankSelection('Easypaisa')}
            >
              <img src={Easypaisa} alt="Easypaisa" className='w-[100px] h-[100px] absolute left-[80px]'/>
              {activeBank === 'Easypaisa' && (
                <div className='bg-themeColor right-[-8px] top-[-8px] absolute rounded-full border-2 border-themeColor flex justify-center items-center p-1'>
                  <FaCheck className='w-[12px] h-[12px]' />
                </div>
              )}
            </div>

            {/* Add Another Option */}
            <div className='cursor-pointer hover:bg-hoverColor p-4 shadow-md shadow-gray-400 rounded-md flex font-poppins font-semibold text-sm justify-center text-gray-400 items-center'>
              <p>+ Add another option</p>
            </div>

            {/* Next Button */}
            <button className='flex justify-center font-bold font-poppins text-white cursor-pointer py-3 mt-10 bg-themeColor'>
              <Link to="/bankinfo"><h1>Next</h1></Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseBankAcc;
