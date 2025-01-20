import { useEffect, useState } from "react"; // Importing React hooks for managing state and side effects.
import { FaAngleLeft } from "react-icons/fa6"; // Importing the left arrow icon from Font Awesome.
import { FaSearch } from "react-icons/fa"; // Importing the search icon from Font Awesome.
import { Link } from "react-router-dom"; // Importing the `Link` component for navigation.
import { useClient } from "../contexts/clientContext"; // Importing the custom client context to fetch client data.
import Video from "../assets/video.png"; // Importing the video icon image asset.
import NoClients from "../assets/noclients.png"; // Importing the "No Clients" placeholder image asset.

const Search = () => {
  const [isModelOpen, setIsModelOpen] = useState(false); // State to manage whether a modal (model) is open.
  const [clients, setClients] = useState([]); // State to store the list of clients.
  const { getAllClients } = useClient(); // Destructuring the `getAllClients` function from client context.

  useEffect(() => {
    // Runs once when the component mounts.
    const fetchClients = async () => {
      const clientList = await getAllClients(); // Fetching the list of clients.
      setClients(clientList || []); // Setting the clients state or an empty array if no data is found.
    };
    fetchClients(); // Invoking the function to fetch clients.
  }, [getAllClients]); // Dependency array ensures this runs when `getAllClients` changes.

  const toggleModel = () => setIsModelOpen(!isModelOpen); // Toggles the modal open/close state.

  return (
    <>
      <div className="relative max-w-xs mx-auto w-full">
        {/* Top-right video icon with click event to toggle modal */}
        <div
          onClick={toggleModel}
          className="absolute top-5 right-5 bg-black rounded-full p-[2px]"
        >
          <img src={Video} alt="" className="w-[22px] h-[22px]" />
        </div>
        {/* Top-left back arrow icon */}
        <div className="absolute top-5 left-5">
          <FaAngleLeft className="w-[22px] h-[22px]" />
        </div>
      </div>
      {/* Main container for the search and client list */}
      <div className="mx-auto h-[92vh] border-2 overflow-auto max-w-xs w-full">
        <div className="mx-4 pt-14">
          {/* Search bar */}
          <div className="flex bg-gray-300 justify-center items-center p-3 px-4 rounded-[30px] gap-5 text-gray-600">
            <FaSearch /> {/* Search icon */}
            <input
              type="text"
              placeholder="Enter a Name" // Placeholder text for search input.
              className="bg-transparent placeholder:text-gray-600 outline-none text-[14px] w-full"
            />
          </div>
          {/* Client list */}
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
                    <Link to={`/search/clientsdata/${client.id}`}>View</Link>
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
        </div>
      </div>
    </>
  );
};

export default Search; // Exporting the Search component.
