// Importing necessary modules and components
import { useState, useEffect } from "react"; // React hooks for managing state and lifecycle
import { FaAngleLeft } from "react-icons/fa6"; // Icon from react-icons for a left arrow
import Video from "../assets/video.png"; // Importing a video icon/image
import { useNavigate, useParams } from "react-router-dom"; // React Router hooks for navigation and accessing route parameters
import { useClient } from "../contexts/clientContext"; // Custom context to access client-related functions and data
import { toast } from "react-toastify";

// Main functional component
const ClientsData = () => {
  // Local state to control whether the modal is open or not
  const [isModelOpen, setIsModelOpen] = useState(false);

  // Destructure the clientId from the route parameters
  const { clientid } = useParams();

  // Destructure methods and data from the custom client context
  const {
    clientData, // Object holding the details of a single client
    getClient, // Function to fetch client data by ID
    setClientData, // Function to update the client data in context
    updateClient, // Function to update the client data in the database
    handleMeasurementInput, // Function to handle input changes for client measurements
  } = useClient();

  // Log the clientId for debugging purposes
  // console.log("In App", clientid);

  // Hook to navigate to different routes programmatically
  const navigate = useNavigate();

  // useEffect to fetch client data when the component mounts or clientId changes
  useEffect(() => {
    // Define an asynchronous function to fetch data
    const fetchClientData = async () => {
      if (clientid) {
        // Check if a clientId is provided
        const data = await getClient(clientid); // Fetch client data from the database
        if (data) {
          setClientData(data); // Update the context with fetched client data
        } else {
          console.error("No client data found for this ID:", clientid); // Log an error if no data is found
        }
      }
    };
    fetchClientData(); // Call the function
  }, [clientid, getClient, setClientData]); // Dependencies for the effect

  // If no client data is available, show a fallback message
  if (!clientData.fullname) {
    return (
      <div className="flex justify-center items-center">
        <p>No client data found for this ID.</p>
      </div>
    );
  }

  // Function to handle saving changes made to the client data
  const handleSaveChanges = () => {
    console.log("clicked"); // Log a message for debugging

    if (clientid) {
      // Check if a clientId is available
      updateClient(clientid); // Update client data in the database
      toast.success("Client Updated"); // Show a success message
      navigate("/search"); // Navigate back to the search page
    } else {
      toast.error("No client ID provided"); // Show an error message if no clientId
    }
  };

  // Function to toggle the modal's open/close state
  const toggleModel = () => {
    setIsModelOpen(!isModelOpen);
  };

  // Render the component's UI
  return (
    <>
      {/* Header section with back and video icons */}
      <div className="relative max-w-xs mx-auto w-full">
        <div
          onClick={toggleModel}
          className="absolute top-5 right-5 bg-black rounded-full p-[2px]"
        >
          <img src={Video} alt="" className="w-[22px] h-[22px]" />{" "}
          {/* Video icon */}
        </div>
        <div className="absolute top-5 left-5">
          <FaAngleLeft className="w-[22px] h-[22px]" /> {/* Back arrow icon */}
        </div>
      </div>

      {/* Main content section */}
      <div className="mx-auto h-[92vh] pb-10 border-2 overflow-auto max-w-xs w-full">
        <div className="mx-4 pt-14">
          {/* Client details */}
          <div className="border-t-[1px] border-gray-300 text-[12px] mt-4 p-2 flex justify-between items-center">
            <div className="text-gray-600">
              <p>{clientData.fullname}</p> {/* Client's full name */}
              <p>{clientData.number}</p> {/* Client's contact number */}
            </div>
          </div>

          {/* Measurements section */}
          <div className="mt-10">
            <p className="text-themeColor text-sm">Detail</p>{" "}
            {/* Section title */}
            <div className="border-t-[1px] border-gray-300 mt-4">
              <div className="text-[14px] py-6 flex flex-col gap-4 mt-2 overflow-auto">
                {Object.entries(clientData.measurements || {}).map(
                  (
                    [key, value] // Loop through client measurements
                  ) => (
                    <div
                      key={key}
                      className="flex justify-between px-4 gap-2 items-center"
                    >
                      <p className="font-poppins leading-loose uppercase">
                        {key}
                      </p>{" "}
                      {/* Measurement name */}
                      <input
                        type="text"
                        value={value} // Current measurement value
                        onChange={
                          (e) => handleMeasurementInput(key, e.target.value) // Update value on change
                        }
                        className="bg-gray-200 py-[6px] text-[14px] font-poppins rounded-md w-[60px] text-center"
                      />
                    </div>
                  )
                )}

                {/* Images Section */}
                <div className="mt-6">
                  <h2 className="text-xl font-semibold">Uploaded Images:</h2>
                  {clientData.images.length > 0 ? (
                    <div className="grid mt-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {clientData.images.map((imageUrl, index) => (
                        <div key={index} className="relative">
                          <img
                            src={imageUrl}
                            alt={`Uploaded ${index + 1}`}
                            className="w-full h-40 object-cover rounded shadow"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500">No images uploaded.</p>
                  )}
                </div>
              </div>
            </div>
            <button
              onClick={handleSaveChanges} // Save changes button
              className="font-bold text-white bg-themeColor rounded-md w-full p-2 mt-6"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// Export the component to use it elsewhere
export default ClientsData;
