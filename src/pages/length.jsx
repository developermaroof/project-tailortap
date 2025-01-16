// Import necessary modules and components
import React, { useEffect, useState } from "react"; // React library and hooks for managing state and side effects
import { useLocation, useNavigate } from "react-router-dom"; // Hooks for routing and accessing location
import { IoMdClose } from "react-icons/io"; // Close icon from react-icons
import { FaAngleLeft } from "react-icons/fa6"; // Left arrow icon from react-icons
import Lengthlogo from "../assets/length.png"; // Length logo image
import lengthupdown from "../assets/lengthupdown.png"; // Image used for an up-down indication (e.g., for measurement)
import { useClient } from "../contexts/clientContext"; // Custom context to handle client-related data and actions

const Length = () => {
  // Destructure necessary functions and state from the custom client context
  const { clientData, handleMeasurementInput, updateClient, getClient } =
    useClient();
  const location = useLocation(); // Access current location (used to get clientId from route state)
  const navigate = useNavigate(); // Function for navigating to other pages
  const [isClientDataLoaded, setIsClientDataLoaded] = useState(false); // State to track if client data is loaded

  // Effect hook that runs when the component is mounted or dependencies change
  useEffect(() => {
    // Check if clientId exists in location state and data isn't already loaded
    if (location.state?.clientId && !isClientDataLoaded) {
      getClient(location.state.clientId); // Fetch client data using the clientId
      setIsClientDataLoaded(true); // Set flag to indicate data has been loaded
    } else if (!location.state?.clientId) {
      navigate("/clientdetails"); // If no clientId in location, navigate to the client details page
    }
  }, [location, navigate, getClient, isClientDataLoaded]); // Dependencies that trigger the effect

  // Handle saving the length measurement and navigating to the next page
  const handleSaveLength = () => {
    const clientId = location.state.clientId; // Get clientId from route state
    updateClient(clientId); // Update the client data with the new measurement

    // Navigate to the next measurement page, passing clientId in the state
    navigate("/measurements/shoulder", {
      state: { clientId },
    });
  };

  return (
    <>
      {/* Top section with icons for close and back navigation */}
      <div className="relative max-w-xs mx-auto w-full">
        {/* Close icon at the top-right */}
        <div className="absolute top-5 right-5 bg-themeColor rounded-full p-1">
          <IoMdClose />
        </div>
        {/* Back navigation icon at the top-left */}
        <div className="absolute top-5 left-5 bg-themeColor rounded-full p-1">
          <FaAngleLeft />
        </div>
      </div>

      {/* Main content area */}
      <div className="mx-auto h-[92vh] border-2 flex flex-col justify-center w-full overflow-auto max-w-xs">
        {/* Container with padding */}
        <div className="mx-4 pt-10">
          <div className="flex flex-col gap-6">
            {/* Section title */}
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold font-inner uppercase">Measurements</h1>
              {/* Divider under the title */}
              <div className="border-[1px] border-green-500 w-[140px]"></div>
            </div>

            {/* Length-related content */}
            <div className="flex flex-col justify-center items-center gap-10">
              <div>
                {/* Length button styled as a label */}
                <p className="font-bold font-inner uppercase text-white cursor-pointer bg-themeColor rounded-sm text-center w-[120px] uppercase p-2">
                  Length
                </p>
              </div>
              <div className="relative h-[280px]">
                {/* Image related to the length measurement */}
                <img
                  src={Lengthlogo}
                  alt="lengthvector"
                  className="w-[180px]"
                />
                {/* Up-down indicator image */}
                <div className="flex right-[20px] text-lg top-[20px] justify-center items-center absolute">
                  <img src={lengthupdown} alt="" />
                </div>
              </div>
            </div>

            {/* Input and buttons for entering and saving the length measurement */}
            <div className="flex flex-col gap-4">
              <div>
                {/* Input field for length */}
                <input
                  value={clientData.measurements.length || ""} // Bind input value to client's length measurement, defaulting to empty string
                  onChange={
                    (e) => handleMeasurementInput("length", e.target.value) // Update the length in the context when input changes
                  }
                  type="text"
                  placeholder="Enter Length"
                  className="text-sm border-themeColor border-[1px] rounded-md w-full p-3"
                />
              </div>

              {/* Buttons for next action or skipping */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleSaveLength} // Handle save action
                  className="font-bold font-poppins uppercase text-white cursor-pointer bg-themeColor rounded-md w-full p-2"
                >
                  Next
                </button>
                <button className="font-bold font-poppins text-themeColor cursor-pointer border-themeColor border-[1px] rounded-md uppercase w-full p-2">
                  Skip
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Length;
