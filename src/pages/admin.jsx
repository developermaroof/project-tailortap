import { useState } from "react";
import { Link } from "react-router-dom";
import Video from "../assets/video.png"; // Video icon/image asset
import ModelImg from "../assets/modelimg.png";
import { IoMdClose, IoIosSettings, IoMdMail, IoMdLock } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { CiLogout, CiEdit } from "react-icons/ci";

const Admin = () => {
  const [isModelOpen, setIsModelOpen] = useState(false); // State to track modal visibility
  const toggleModel = () => {
    setIsModelOpen(!isModelOpen);
  };
  return (
    <>
      <div className="relative bg-themeColor h-[30vh] py-14 max-w-xs mx-auto w-full border-[1px] flex justify-center">
        <div
          onClick={toggleModel}
          className="absolute top-5 right-5 bg-black rounded-full p-[2px]"
        >
          {/* Video Icon */}
          <img src={Video} alt="" className="w-[22px] h-[22px]" />
        </div>
        <div className="absolute top-5 left-5">
          <FaAngleLeft className="w-[22px] h-[22px]" />
        </div>
        {/* Modal for Plan Upgrade */}
        {isModelOpen && (
          <div className="fixed max-w-xs mx-auto inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white mx-6 p-8 rounded-lg max-w-sm w-full shadow-lg relative">
              <div
                className="absolute top-5 right-5 text-white bg-themeColor rounded-full p-1 cursor-pointer"
                onClick={toggleModel}
              >
                {/* Close Icon */}
                <IoMdClose />
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <img src={ModelImg} alt="" className="w-[50px]" />
                <h1 className="font-bold font-poppins text-black text-[17px] leading-loose uppercase">
                  Upgrade your plan!
                </h1>
                <p className="font-poppins text-xs">
                  You’re in your 7 days free trial
                </p>
                <button className="bg-themeColor text-white cursor-pointer text-xs rounded-[4px] p-2 px-6 mt-4 font-bold font-poppins">
                  <Link to="/chooseplan">Upgrade Now</Link>
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center gap-2">
            <div className="bg-white rounded-full h-[80px] w-[80px] items-center justify-center flex relative">
              <FaRegUser className="bg-adminColor h-[70px] p-4 w-[70px] rounded-full text-[60px]" />
              <CiEdit className="absolute bg-white rounded-full p-[2px] w-[18px] h-[18px] bottom-1 right-0" />
            </div>
            <div>
              <span>Your Name</span>
            </div>
          </div>
        </div>
        {/* Main */}

        <div className="rounded-xl shadow-lg bg-white absolute bottom-[-220px] w-[250px]">
          <div className="flex flex-col">
            <div className="text-md flex border-b-[1px] border-settingGrayColor p-4 pl-6 items-center ">
              <CiEdit className="text-xl ml-[-2px]" />

              <span className="text-[12px] ml-6 text-settingGrayColor">
                Edit Profile Name
              </span>
            </div>
            <div className="text-md flex border-b-[1px] border-settingGrayColor p-4 pl-6 items-center ">
              <IoMdLock className="text-xl ml-[-2px]" />

              <span className="text-[12px] ml-6 text-settingGrayColor">
                Change Password
              </span>
            </div>
            <div className="text-md flex border-b-[1px] border-settingGrayColor p-4 pl-6 items-center ">
              <IoMdMail className="text-xl ml-[-2px]" />

              <span className="text-[12px] ml-6 text-settingGrayColor">
                Change Email Address
              </span>
            </div>
            <div className="text-md flex border-b-[1px] border-settingGrayColor p-4 pl-6 items-center ">
              <IoIosSettings className="text-[21px] ml-[-2px]" />
              <span className="text-[12px] ml-6 text-settingGrayColor">
                Setting
              </span>
            </div>
            <div className="text-md text-logOutColor flex p-4 pl-6 items-center ">
              <CiLogout className="text-lg ml-[1px]" />
              <span className="text-[12px] ml-6">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
