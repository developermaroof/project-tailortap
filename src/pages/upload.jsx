import { useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import Video from "../assets/video.png";
import { useLocation, useNavigate } from "react-router-dom";
import ScreenShotPlaceholder from "../assets/uploadscreenshot.png";
import { IoMdClose } from "react-icons/io";
import { useClient } from "../contexts/clientContext";

const Upload = () => {
  const { clientData, uploadScreenshots, saveScreenshots, removeScreenshot } =
    useClient();
  const location = useLocation();
  const navigate = useNavigate();

  const clientId = location.state?.clientId;

  useEffect(() => {
    if (!clientId) {
      navigate("/clientdetails");
    }
  }, [clientId, navigate]);

  const handleFileChange = (e) => {
    uploadScreenshots(e.target.files);
  };

  const handleSave = () => {
    saveScreenshots(clientId);
    navigate("/measurements/additionaldetails", { state: { clientId } });
  };

  return (
    <>
      <div className="relative max-w-xs mx-auto w-full">
        <div className="absolute top-5 right-5 bg-black rounded-full p-[2px]">
          <img src={Video} alt="" className="w-[22px] h-[22px]" />
        </div>
        <div className="absolute top-5 left-5">
          <FaAngleLeft className="w-[22px] h-[22px]" />
        </div>
      </div>

      <div className="mx-auto h-[92vh] border-2 flex flex-col justify-center overflow-auto max-w-xs w-full">
        <div className="mx-4 pt-14">
          <div className="mt-10">
            <label className="shadow-md gap-3 mt-4 shadow-gray-400 rounded-md cursor-pointer flex flex-col justify-center items-center p-6 text-center">
              <img
                src={ScreenShotPlaceholder}
                alt="Screenshot Placeholder"
                className="w-[100px] h-[100px] object-cover rounded-md"
              />
              <p className="text-xs">Add photos from the device</p>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {clientData.images.map((screenshot, index) => (
              <div key={index} className="relative">
                <img
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="p-2 bg-gray-300 w-[50px] h-[50px] object-cover rounded-md"
                />
                <div
                  onClick={() => removeScreenshot(index)}
                  className="absolute top-[-4px] right-[-4px] bg-black rounded-full p-[1px] text-[10px] text-white cursor-pointer"
                >
                  <IoMdClose />
                </div>
              </div>
            ))}
          </div>

          <div>
            <button
              onClick={handleSave}
              className="font-bold uppercase font-poppins text-white cursor-pointer bg-themeColor rounded-md w-full p-2 mt-6"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upload;
