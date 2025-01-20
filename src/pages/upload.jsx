// Import required modules and components
import { useEffect } from "react"; // useEffect is used for side effects such as navigation
import { FaAngleLeft } from "react-icons/fa6"; // Importing a left arrow icon
import Video from "../assets/video.png"; // Importing a video image
import { useLocation, useNavigate } from "react-router-dom"; // Hooks for navigation and accessing location
import ScreenShotPlaceholder from "../assets/uploadscreenshot.png"; // Placeholder for screenshots
import { IoMdClose } from "react-icons/io"; // Close icon
import { useClient } from "../contexts/clientContext"; // Custom context for client-related functionality

// Component definition
const Upload = () => {
  // Destructure context methods and data
  const { clientData, uploadScreenshots, saveScreenshots, removeScreenshot } =
    useClient();
  const location = useLocation(); // Hook to access current route location
  const navigate = useNavigate(); // Hook to programmatically navigate between routes

  // Retrieve the client ID from the route state
  const clientId = location.state?.clientId;

  // Redirect to "/clientdetails" if no client ID is provided
  useEffect(() => {
    if (!clientId) {
      navigate("/clientdetails");
    }
  }, [clientId, navigate]);

  // Handle file input changes by uploading selected screenshots
  const handleFileChange = (e) => {
    uploadScreenshots(e.target.files);
  };

  // Save the uploaded screenshots and navigate to the next step
  const handleSave = () => {
    saveScreenshots(clientId);
    navigate("/measurements/additionaldetails", { state: { clientId } });
  };

  return (
    <>
      {/* Top Navigation and Icons */}
      <div className="relative max-w-xs mx-auto w-full">
        {/* Video Icon on the top-right */}
        <div className="absolute top-5 right-5 bg-black rounded-full p-[2px]">
          <img src={Video} alt="" className="w-[22px] h-[22px]" />
        </div>
        {/* Back Icon on the top-left */}
        <div className="absolute top-5 left-5">
          <FaAngleLeft className="w-[22px] h-[22px]" />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="mx-auto h-[92vh] border-2 flex flex-col justify-center overflow-auto max-w-xs w-full">
        <div className="mx-4 pt-14">
          {/* File Upload Section */}
          <div className="mt-10">
            <label className="shadow-md gap-3 mt-4 shadow-gray-400 rounded-md cursor-pointer flex flex-col justify-center items-center p-6 text-center">
              {/* Screenshot Placeholder */}
              <img
                src={ScreenShotPlaceholder}
                alt="Screenshot Placeholder"
                className="w-[100px] h-[100px] object-cover rounded-md"
              />
              <p className="text-xs">Add photos from the device</p>
              {/* Hidden File Input */}
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </div>

          {/* Display Uploaded Screenshots */}
          <div className="mt-10 flex flex-wrap gap-4">
            {clientData.images.map((screenshot, index) => (
              <div key={index} className="relative">
                {/* Screenshot Preview */}
                <img
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="p-2 bg-gray-300 w-[50px] h-[50px] object-cover rounded-md"
                />
                {/* Remove Icon for Each Screenshot */}
                <div
                  onClick={() => removeScreenshot(index)}
                  className="absolute top-[-4px] right-[-4px] bg-black rounded-full p-[1px] text-[10px] text-white cursor-pointer"
                >
                  <IoMdClose />
                </div>
              </div>
            ))}
          </div>

          {/* Save Button */}
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
