import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import Video from "../assets/video.png";
import { Link } from "react-router-dom";

const ClientsData = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const toggleModel = () => {
    setIsModelOpen(!isModelOpen);
  };

  return (
    <>
      <div className="relative max-w-xs mx-auto w-full">
        <div
          onClick={toggleModel}
          className="absolute top-5 right-5 bg-black rounded-full p-[2px]"
        >
          <img src={Video} alt="" className="w-[22px] h-[22px]" />
        </div>
        <div className="absolute top-5 left-5">
          <FaAngleLeft className="w-[22px] h-[22px]" />
        </div>
      </div>
      <div className="mx-auto h-[92vh] pb-10 border-2 overflow-auto max-w-xs w-full ">
        <div className="mx-4 pt-14">
          {/*  */}
          <div className="border-t-[1px] border-gray-300 text-[12px] mt-4 p-2 flex justify-between items-center">
            <div className="text-gray-600">
              <p>Person’s Name</p>
              <p>0334 567 7890</p>
            </div>
            <button className="bg-themeColor text-white rounded-[4px] px-4 py-[5px] font-bold">
              Edit
            </button>
          </div>
          {/*  */}
          <div className="mt-10">
            <p className="text-themeColor text-sm">Detail</p>
            <div className="border-t-[1px] border-gray-300 text-[14px] mt-4 py-6 flex flex-col gap-4">
              {/* length */}
              <div className="flex justify-between items-center">
                <p>Length</p>
                <p className="bg-gray-200 px-[30px] py-[4px] rounded-md">80</p>
              </div>
              {/* Shoulder */}
              <div className="flex justify-between items-center">
                <p>Shoulder</p>
                <p className="bg-gray-200 px-[30px] py-[4px] rounded-md">34</p>
              </div>
              {/* Arms */}
              <div className="flex justify-between items-center">
                <p>Arms</p>
                <p className="bg-gray-200 px-[30px] py-[4px] rounded-md">22</p>
              </div>
              {/* Cuffs */}
              <div className="flex justify-between items-center">
                <p>Cuffs</p>
                <p className="bg-gray-200 px-[30px] py-[4px] rounded-md">11</p>
              </div>
              {/* Collar */}
              <div className="flex justify-between items-center">
                <p>Collar</p>
                <p className="bg-gray-200 px-[30px] py-[4px] rounded-md">67</p>
              </div>
              {/* Chest */}
              <div className="flex justify-between items-center">
                <p>Chest</p>
                <p className="bg-gray-200 px-[30px] py-[4px] rounded-md">98</p>
              </div>
              {/* Fitting */}
              <div className="flex justify-between items-center">
                <p>Fitting</p>
                <p className="bg-gray-200 px-[30px] py-[4px] rounded-md">32</p>
              </div>
              {/* Lap */}
              <div className="flex justify-between items-center">
                <p>Lap</p>
                <p className="bg-gray-200 px-[30px] py-[4px] rounded-md">23</p>
              </div>
              {/* PantShalwar */}
              <div className="flex justify-between items-center">
                <p>PantShalwar</p>
                <p className="bg-gray-200 px-[30px] py-[4px] rounded-md">13</p>
              </div>
              {/* Paincha */}
              <div className="flex justify-between items-center">
                <p>Paincha</p>
                <p className="bg-gray-200 px-[30px] py-[4px] rounded-md">07</p>
              </div>
            </div>
            <button className="font-bold font-poppins uppercase text-white cursor-pointer bg-themeColor rounded-md w-full p-2 mt-6">
              <Link to="/search/upload">Next</Link>
            </button>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default ClientsData;
