import { useEffect, useState } from "react";
import { FaAngleLeft, FaPlus } from "react-icons/fa6";
import Video from "../assets/video.png";
import NoClients from "../assets/noclients.png";
import { Link, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import ModelImg from "../assets/modelimg.png";
import { useAuth } from "../contexts/authContext";

const Home = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
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
      {userLoggedIn ? (
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
          <div className="mx-auto h-[92vh] overflow-auto max-w-xs">
            <div className="mx-4">
              <div className="pt-6">
                {/* Model */}
                {isModelOpen && (
                  <div className="fixed max-w-xs mx-auto inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white mx-6 p-8 rounded-lg max-w-sm w-full shadow-lg relative">
                      <div
                        className="absolute top-5 right-5 text-white bg-themeColor rounded-full p-1 cursor-pointer"
                        onClick={toggleModel}
                      >
                        <IoMdClose />
                      </div>
                      <div className="flex flex-col justify-center items-center text-center">
                        <img src={ModelImg} alt="" className="w-[50px]" />
                        <h1 className="font-bold font-poppins text-black text-[17px] leading-loose uppercase">
                          Upgrade your plan!
                        </h1>
                        <p className="font-poppins text-xs">
                          You’re in your 7 days free trail
                        </p>
                        <button className="bg-themeColor text-white cursor-pointer text-xs rounded-[4px] p-2 px-6 mt-4 font-bold font-poppins">
                          <Link to="/chooseplan">Upgrade Now</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {/*  */}
                <div className="flex flex-col justify-center items-center mt-14">
                  <div className="bg-themeColor w-full flex flex-col justify-center items-center p-5 rounded-lg text-center">
                    <div className="bg-plusIconBg rounded-full p-1 flex justify-center items-center text-center">
                      <Link to="/clientdetails">
                        <FaPlus className="w-[25px] h-[25px] text-white" />
                      </Link>
                    </div>
                    <Link to="/clientdetails">
                      <p className="text-white mt-2 text-sm">Add New Member</p>
                    </Link>
                  </div>
                  <div className="border-themeColor border-2 w-full flex flex-col justify-center items-center p-4 mt-6 rounded-lg text-center">
                    <p className="text-black text-sm font-semibold">
                      Watch previous data
                    </p>
                  </div>
                </div>
                {/*  */}
                <h1 className="font-bold mt-10">My Clients</h1>
                <div className="border-2 p-10">
                  {clientData.length > 0 ? (
                    <div className="mt-4 p-10 border-2 border-themeColor">
                      {clientData.map((client) => (
                        <div
                          key={client.id}
                          className="border-2 mt-2 border-red-600 flex flex-col justify-center items-center text-center"
                        >
                          <h1>{client.fullname}</h1>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col justify-center relative items-center text-center">
                      <img src={NoClients} alt="" className="w-full h-full" />
                      <p className="text-gray-400 absolute bottom-2">
                        No Client has been created yet..
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        navigate("/login")
      )}
    </>
  );
};

export default Home;
