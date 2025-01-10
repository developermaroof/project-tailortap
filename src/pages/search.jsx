import { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useClient } from "../contexts/clientContext";
import Video from "../assets/video.png";
import NoClients from "../assets/noclients.png";

const Search = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [clients, setClients] = useState([]);
  const { getAllClients } = useClient();

  useEffect(() => {
    const fetchClients = async () => {
      const clientList = await getAllClients();
      setClients(clientList || []);
    };
    fetchClients();
  }, [getAllClients]);

  const toggleModel = () => setIsModelOpen(!isModelOpen);

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
      <div className="mx-auto h-[92vh] border-2 overflow-auto max-w-xs w-full">
        <div className="mx-4 pt-14">
          <div className="flex bg-gray-300 justify-center items-center p-3 px-4 rounded-[30px] gap-5 text-gray-600">
            <FaSearch />
            <input
              type="text"
              placeholder="Enter a Name"
              className="bg-transparent placeholder:text-gray-600 outline-none text-[14px] w-full"
            />
          </div>
          <div className="flex flex-col mt-10">
            {clients.length > 0 ? (
              clients.map((client) => (
                <div
                  key={client.id}
                  className="border-b-[1px] border-gray-300 text-[12px] p-2 flex justify-between items-center"
                >
                  <div className="text-gray-600">
                    <p>{client.fullname}</p>
                    <p>{client.number}</p>
                  </div>
                  <button className="bg-themeColor text-white rounded-[4px] px-4 py-[5px] font-bold">
                    <Link to={`/search/clientsdata/${client.id}`}>View</Link>
                  </button>
                </div>
              ))
            ) : (
              <div className="flex justify-center items-center mt-10">
                <img
                  src={NoClients}
                  alt="No Clients"
                  className="h-[200px] w-[200px]"
                />
                <p>No clients found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
