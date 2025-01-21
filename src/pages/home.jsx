import { useEffect, useState } from "react"; // React hooks for state and lifecycle
import { FaAngleLeft, FaPlus } from "react-icons/fa6"; // Icons for UI
import Video from "../assets/video.png"; // Video icon/image asset
import NoClients from "../assets/noclients.png"; // Placeholder image for no clients
import { Link, useNavigate } from "react-router-dom"; // Navigation and linking
import { IoMdClose } from "react-icons/io"; // Close icon
import ModelImg from "../assets/modelimg.png"; // Image for modal content
import { useAuth } from "../contexts/authContext"; // Custom hook for authentication context
import { useClient } from "../contexts/clientContext";

const Home = () => {
  const [clients, setClients] = useState([]);
  const navigate = useNavigate(); // React Router navigation
  const { userLoggedIn } = useAuth(); // Check if user is logged in using context
  const [isModelOpen, setIsModelOpen] = useState(false); // State to track modal visibility
  const { getAllClients } = useClient();

  useEffect(() => {
    // Runs once when the component mounts.
    const fetchClients = async () => {
      const clientList = await getAllClients(); // Fetching the list of clients.
      setClients(clientList || []); // Setting the clients state or an empty array if no data is found.
    };
    fetchClients(); // Invoking the function to fetch clients.
  }, [getAllClients]); // Dependency array ensures this runs when `getAllClients` changes.

  // Toggle modal visibility
  const toggleModel = () => {
    setIsModelOpen(!isModelOpen);
  };

  return (
    <>
      {userLoggedIn ? ( // Check if user is logged in
        <>
          {/* Header Section */}
          <div className="relative max-w-xs mx-auto w-full">
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
          </div>

          {/* Main Content */}
          <div className="mx-auto h-[92vh] overflow-auto max-w-xs">
            <div className="mx-4">
              <div className="pt-6">
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

                {/* Add New Member & Watch Previous Data */}
                <div className="flex flex-col justify-center items-center mt-14">
                  <div className="bg-themeColor w-full flex flex-col justify-center items-center p-5 rounded-lg text-center">
                    <div className="bg-plusIconBg rounded-full p-1 flex justify-center items-center text-center">
                      {/* Link to Add New Member */}
                      <Link to="/clientdetails">
                        <FaPlus className="w-[25px] h-[25px] text-white" />
                      </Link>
                    </div>
                    <Link to="/clientdetails">
                      <p className="text-white mt-2 text-sm">Add New Member</p>
                    </Link>
                  </div>
                </div>

                {/* My Clients Section */}
                <h1 className="font-bold mt-10">My Clients</h1>
                <div className="flex flex-col mt-10">
                  {clients.length > 0 ? ( // Check if there are any clients.
                    clients.map((client) => (
                      <div
                        key={client.id} // Unique key for each client.
                        className="border-b-[1px] border-gray-300 text-[12px] p-2 flex justify-between items-center"
                      >
                        <div className="text-gray-600">
                          <p>{client.fullname}</p> {/* Client's full name */}
                          <p>{client.number}</p> {/* Client's contact number */}
                        </div>
                        <button className="bg-themeColor text-white rounded-[4px] px-4 py-[5px] font-bold">
                          {/* Link to view the specific client's data */}
                          <Link to={`/search/clientsdata/${client.id}`}>
                            View
                          </Link>
                        </button>
                      </div>
                    ))
                  ) : (
                    // Placeholder if no clients are found.
                    <div className="flex justify-center items-center mt-10">
                      <img
                        src={NoClients}
                        alt="No Clients" // Alternate text for image.
                        className="h-[200px] w-[200px]"
                      />
                      <p>No clients found</p> {/* Text to display no clients */}
                    </div>
                  )}
                </div>
                {/*  */}
                {/* <div className="border-2 p-10">
                  <div className="mt-4 p-10 border-2 border-themeColor">
                    <div className="border-2 mt-2 border-red-600 flex flex-col justify-center items-center text-center">
                      <h1>fullname</h1>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center relative items-center text-center">
                    <img src={NoClients} alt="" className="w-full h-full" />
                    <p className="text-gray-400 absolute bottom-2">
                      No Client has been created yet..
                    </p>
                  </div>
                </div> */}
                {/*  */}
              </div>
            </div>
          </div>
        </>
      ) : (
        navigate("/login") // Redirect to login if not authenticated
      )}
    </>
  );
};

export default Home;
