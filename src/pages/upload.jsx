import { useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import Video from "../assets/video.png";
import { Link } from "react-router-dom";
import ScreenShotPlaceholder from "../assets/uploadscreenshot.png";
import { IoMdClose } from "react-icons/io";

const Upload = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [screenshotPreview, setScreenshotPreview] = useState(
    ScreenShotPlaceholder
  );

  const handleScreenshotUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setScreenshotPreview(URL.createObjectURL(file));
    }
  };

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
      <div className="mx-auto h-[92vh] border-2 overflow-auto max-w-xs w-full ">
        <div className="mx-4 pt-14">
          {/*  */}
          <div className="border-y-[1px] border-gray-300 text-[12px] mt-4 p-2 flex justify-between items-center">
            <div className="text-gray-600">
              <p>Person’s Name</p>
              <p>0334 567 7890</p>
            </div>
            <button className="bg-themeColor text-white rounded-[4px] px-4 py-[5px] font-bold">
              Edit
            </button>
          </div>
          {/*  */}
          {/* Upload Screenshot */}
          <div className="mt-20">
            <label className="shadow-md gap-3 mt-4 shadow-gray-400 rounded-md cursor-pointer flex flex-col justify-center items-center p-6 text-center">
              <img
                src={screenshotPreview}
                alt="Screenshot Preview"
                className="w-[100px] h-[100px] object-cover rounded-md"
              />
              <p className="text-xs">Add photos from the device</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleScreenshotUpload}
                className="hidden"
              />
            </label>
          </div>
          {/*  */}
          <div className="mt-10 flex flex-wrap gap-4">
            <div className="relative">
              <img
                src={screenshotPreview}
                alt=""
                className="p-2 bg-gray-300 w-[50px] h-[50px] object-cover rounded-md"
              />
              <div className="absolute top-[-4px] right-[-4px] bg-black rounded-full p-[1px] text-[10px] text-white">
                <IoMdClose />
              </div>
            </div>

            <div className="relative">
              <img
                src={screenshotPreview}
                alt=""
                className="p-2 bg-gray-300 w-[50px] h-[50px] object-cover rounded-md"
              />
              <div className="absolute top-[-4px] right-[-4px] bg-black rounded-full p-[1px] text-[10px] text-white">
                <IoMdClose />
              </div>
            </div>
          </div>
          {/*  */}
          <div className="mt-10">
            <button className="font-bold uppercase font-poppins uppercase text-white cursor-pointer bg-themeColor rounded-md w-full p-2 mt-6">
              <Link to="/search">Save Changes</Link>
            </button>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default Upload;
