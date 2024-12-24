import React, { useState } from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import Video from "../assets/video.png"
import Nav from "../components/nav"
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


const ClientDetail = () => {
  const ClientDetails = {
    fullname: '',
    cast: '',
    number: '',
    address: ''
};

const [clientData, setClientData] = useState(ClientDetails);
const navigate = useNavigate();

const handleInput = (event) => {
  const name = event.target.name;
  const value = event.target.value;

  setClientData({ ...clientData, [name]: value });
};

const handleSubmit = (event) => {
  event.preventDefault();

  if (clientData.fullname === "" || clientData.cast === "" || clientData.number === "") {
      alert("Please fill all the required fields");
      return;
  }

  const clientWithId = { ...clientData, id: uuidv4() };

  const getClientData = JSON.parse(localStorage.getItem("client") || "[]");

  let arr = [...getClientData];
  arr.push(clientWithId);

  localStorage.setItem("client", JSON.stringify(arr));

  navigate("/measurements/length", { state: { clientId: clientWithId.id } });
};

  return (
    <div className='mx-auto max-w-sm'>
      {/*  */}
      <div className='relative'>
        <div className='absolute top-0 right-5 bg-black rounded-full p-[2px]'>
          <img src={Video} alt="" className='w-[22px] h-[22px]'/>
        </div>
        <div className='absolute top-0 left-5'>
            <FaAngleLeft className='w-[22px] h-[22px]'/>
        </div>
      </div>
      <div className='m-4'>
        {/*  */}
        <div className='pb-1 pt-16'>

          {/*  */}
          <div className='flex flex-col gap-14'>
            <div className='flex flex-col mt-20 justify-center'>
              <h1 className='font-bold font-inner uppercase'>Client Detail</h1>
              <div className='border-[1px] border-green-500 w-[120px]'></div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                <div className='text-sm'>
                  <label htmlFor="name">Full Name</label>
                  <input onChange={handleInput} type="text" name='fullname' className='border-themeColor border-[2px] rounded-md w-full p-2'/>
                </div>
                <div className='text-sm'>
                  <label htmlFor="cast">Cast</label>
                  <input onChange={handleInput} type="text" name='cast' className='border-themeColor border-[2px] rounded-md w-full p-2'/>
                </div>
                <div className='text-sm'>
                  <label htmlFor="number">Phone Number*</label>
                  <input onChange={handleInput} type="number" name='number' className='border-themeColor border-[2px] rounded-md w-full p-2'/>
                </div>
                <div className='text-sm'>
                  <label htmlFor="address">Address <span className='text-gray-500'>(optional)</span> </label>
                  <input onChange={handleInput} type="text" name='address' className='border-themeColor border-[2px] rounded-md w-full p-2'/>
                </div>
                <div>
                  <button className='font-bold font-poppins text-white cursor-pointer bg-themeColor rounded-md w-full p-3'>Next</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Nav />
    </div>

  )
}

export default ClientDetail