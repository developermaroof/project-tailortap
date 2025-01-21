import { IoMdClose } from "react-icons/io";
import Video from "../assets/video.png"; // Video icon/image asset
import { FaAngleLeft } from "react-icons/fa6";
import { useState } from "react";
import ModelImg from "../assets/modelimg.png";
import { Link } from "react-router-dom";

const Settings = () => {
  const [isModelOpen, setIsModelOpen] = useState(false); // State to track modal visibility
  const toggleModel = () => {
    setIsModelOpen(!isModelOpen);
  };
  return (
    <>
      <div className="relative bg-themeColor rounded-b-[40px] py-14 max-w-xs mx-auto w-full border-[1px] flex justify-center">
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
        <div className="bg-white rounded-lg py-[2px] px-[10px] bottom-[-14px] absolute">
          <h1 className="font-semibold font-poppins">Settings</h1>
        </div>
      </div>
      {/* Main */}
      <div className="mx-auto border-2 p-8 w-full h-[80vh] overflow-auto max-w-xs">
        <div className="border-2">
          {/*  */}
          <div className="border-2">
            <div>
              <h1>Accounts</h1>
            </div>
            <div>
              <div>
                <img src="" alt="" />
                <span></span>
                <img src="" alt="" />
              </div>
              <div>
                <img src="" alt="" />
                <span></span>
                <img src="" alt="" />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="border-2">
            <div>
              <h1>Preferences</h1>
            </div>
            <div>
              <div>
                <img src="" alt="" />
                <span></span>
                <img src="" alt="" />
              </div>
              <div>
                <img src="" alt="" />
                <span></span>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
