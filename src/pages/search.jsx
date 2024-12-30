import { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import Video from "../assets/video.png";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Search = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);

  const [clientData, setClientData] = useState([]);

  useEffect(() => {
    const getClientData = JSON.parse(localStorage.getItem("client") || "[]");
    setClientData(getClientData);
  }, []);

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
          <div className="flex bg-gray-300 justify-center items-center p-3 px-4 rounded-[30px] gap-5 text-gray-600">
            <FaSearch />
            <input
              type="text"
              placeholder="Enter a Name"
              className="bg-transparent placeholder:text-gray-600 outline-none text-[14px] w-full"
            />
          </div>
          <div className="flex flex-col mt-10">
            {/*  */}
            {clientData.length > 0 ? (
              <div className="flex flex-col gap-4">
                {clientData.map((client) => (
                  <div
                    key={client.id}
                    className="border-b-[1px] border-gray-300 text-[12px] p-2 flex justify-between items-center"
                  >
                    <div className="text-gray-600">
                      <p>{client.fullname}</p>
                      <p>{client.number}</p>
                    </div>
                    <button className="bg-themeColor text-white rounded-[4px] px-4 py-[5px] font-bold">
                      <Link to="/search/clientsdata">Edit</Link>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col justify-center relative items-center text-center">
                <p className="text-gray-400 absolute bottom-2">
                  No Client has been created yet..
                </p>
              </div>
            )}
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
