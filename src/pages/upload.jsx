import { useState, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import Video from "../assets/video.png";
import { useLocation, useNavigate } from "react-router-dom";
import ScreenShotPlaceholder from "../assets/uploadscreenshot.png";
import { IoMdClose } from "react-icons/io";

const Upload = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [screenshots, setScreenshots] = useState([]); // Store multiple screenshots
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const clientId = location.state?.clientId;
    if (!clientId) {
      navigate("/clientdetails"); // Redirect if no clientId is present
    }

    // Fetch existing client data from local storage
    const getClientData = JSON.parse(localStorage.getItem("client") || "[]");
    const client = getClientData.find((client) => client.id === clientId);
    if (client?.images) {
      setScreenshots(client.images); // Load existing images if available
    }
  }, [location, navigate]);

  // Handle file upload for multiple images
  const handleScreenshotUpload = (e) => {
    const files = Array.from(e.target.files); // Handle multiple files
    const newScreenshots = files.map((file) => URL.createObjectURL(file));

    setScreenshots((prevScreenshots) => [
      ...prevScreenshots,
      ...newScreenshots,
    ]);
  };

  // Save screenshots to local storage
  const handleSaveScreenshots = () => {
    const clientId = location.state?.clientId;
    if (!clientId) return;

    const getClientData = JSON.parse(localStorage.getItem("client") || "[]");
    const updatedClients = getClientData.map((client) => {
      if (client.id === clientId) {
        return { ...client, images: screenshots };
      }
      return client;
    });

    localStorage.setItem("client", JSON.stringify(updatedClients));
    navigate("/measurements/additionaldetails", { state: { clientId } });
  };

  const toggleModel = () => {
    setIsModelOpen(!isModelOpen);
  };

  // Remove an uploaded screenshot
  const handleRemoveScreenshot = (index) => {
    setScreenshots((prevScreenshots) =>
      prevScreenshots.filter((_, i) => i !== index)
    );
  };

  return (
    <>
      {/* Header with Navigation Buttons */}
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

      {/* Main Content */}
      <div className="mx-auto h-[92vh] border-2 overflow-auto max-w-xs w-full">
        <div className="mx-4 pt-14">
          {/* Client Info */}
          <div className="border-y-[1px] border-gray-300 text-[12px] mt-4 p-2 flex justify-between items-center">
            <div className="text-gray-600">
              <p>Person’s Name</p>
              <p>0334 567 7890</p>
            </div>
            <button className="bg-themeColor text-white rounded-[4px] px-4 py-[5px] font-bold">
              Edit
            </button>
          </div>

          {/* Upload Section */}
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
                onChange={handleScreenshotUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Display Uploaded Screenshots */}
          <div className="mt-10 flex flex-wrap gap-4">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="relative">
                <img
                  src={screenshot}
                  alt={`Screenshot ${index + 1}`}
                  className="p-2 bg-gray-300 w-[50px] h-[50px] object-cover rounded-md"
                />
                <div
                  onClick={() => handleRemoveScreenshot(index)}
                  className="absolute top-[-4px] right-[-4px] bg-black rounded-full p-[1px] text-[10px] text-white cursor-pointer"
                >
                  <IoMdClose />
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <div className="mt-10">
            <button
              onClick={handleSaveScreenshots}
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
