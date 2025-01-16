// Import necessary modules and components
import React from "react"; // React library for building user interfaces
import { FaAngleLeft } from "react-icons/fa6"; // Icon for navigation
import Video from "../assets/video.png"; // Importing a video icon image
import { useNavigate } from "react-router-dom"; // Hook for navigation between routes
import { useClient } from "../contexts/clientContext"; // Custom context for client-related data and actions

// Component definition
const ClientDetail = () => {
  // Destructure client-related data and functions from the custom context
  const { clientData, handleInput, addClient } = useClient();

  // Hook to enable navigation between pages
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Call the `addClient` function to save the client and get its ID
    const clientId = await addClient();

    // If a valid client ID is returned, navigate to the measurements page
    if (clientId) {
      navigate("/measurements/length", { state: { clientId } }); // Pass the client ID to the next page using state
    }
  };

  // Return the component UI
  return (
    <>
      {/* Top section for video and back navigation */}
      <div className="relative max-w-xs mx-auto w-full">
        {/* Video icon on the top-right */}
        <div className="absolute top-5 right-5 bg-black rounded-full p-[2px]">
          <img src={Video} alt="" className="w-[22px] h-[22px]" />
        </div>
        {/* Back navigation icon on the top-left */}
        <div className="absolute top-5 left-5">
          <FaAngleLeft className="w-[22px] h-[22px]" />
        </div>
      </div>

      {/* Main content area */}
      <div className="mx-auto max-w-xs h-[92vh] pb-10 border-2 flex flex-col justify-center w-full overflow-auto">
        {/* Container with padding */}
        <div className="mx-4 pt-6">
          <div className="flex flex-col gap-14">
            {/* Section title */}
            <div className="flex flex-col mt-20 justify-center">
              <h1 className="font-bold font-inner uppercase">Client Detail</h1>
              {/* Divider under the title */}
              <div className="border-[1px] border-green-500 w-[120px]"></div>
            </div>

            {/* Form section */}
            <div>
              {/* Form element to capture client details */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                {/* Input for Full Name */}
                <div className="text-sm">
                  <label htmlFor="name">Full Name</label>
                  <input
                    onChange={handleInput} // Update the clientData state when input changes
                    type="text"
                    name="fullname" // Field name in the clientData object
                    value={clientData.fullname} // Bind the input value to state
                    className="border-themeColor border-[2px] rounded-md w-full p-2"
                  />
                </div>

                {/* Input for Cast */}
                <div className="text-sm">
                  <label htmlFor="cast">Cast</label>
                  <input
                    onChange={handleInput}
                    value={clientData.cast} // Bind the input value to the cast field in state
                    type="text"
                    name="cast"
                    className="border-themeColor border-[2px] rounded-md w-full p-2"
                  />
                </div>

                {/* Input for Phone Number */}
                <div className="text-sm">
                  <label htmlFor="number">Phone Number*</label>
                  <input
                    onChange={handleInput}
                    value={clientData.number} // Bind the input value to the number field in state
                    type="number"
                    name="number"
                    className="border-themeColor border-[2px] rounded-md w-full p-2"
                  />
                </div>

                {/* Input for Address */}
                <div className="text-sm">
                  <label htmlFor="address">
                    Address <span className="text-gray-500">(optional)</span>{" "}
                  </label>
                  <input
                    onChange={handleInput}
                    value={clientData.address} // Bind the input value to the address field in state
                    type="text"
                    name="address"
                    className="border-themeColor border-[2px] rounded-md w-full p-2"
                  />
                </div>

                {/* Submit button */}
                <div>
                  <button className="font-bold font-poppins text-white cursor-pointer bg-themeColor rounded-md w-full p-3">
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Export the component for use in other parts of the application
export default ClientDetail;
