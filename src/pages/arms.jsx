import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa6";
import ArmsLogo from "../assets/arms.png";
import armsright from "../assets/armsright.png";
import armsleft from "../assets/armsleft.png";

const Arms = () => {
  const [arms, setArms] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const clientId = location.state?.clientId;
    if (!clientId) {
      navigate("/clientdetails");
    }
  }, [location, navigate]);

  const handleSaveArms = () => {
    const clientId = location.state.clientId;
    const getClientData = JSON.parse(localStorage.getItem("client") || "[]");
    const updatedClients = getClientData.map((client) => {
      if (client.id === clientId) {
        return { ...client, arms };
      }
      return client;
    });

    localStorage.setItem("client", JSON.stringify(updatedClients));
    navigate("/measurements/cuffs", { state: { clientId } });
  };

  return (
    <>
      <div className="relative max-w-xs mx-auto w-full">
        <div className="absolute top-5 right-5 bg-themeColor rounded-full p-1">
          <IoMdClose />
        </div>
        <div className="absolute top-5 left-5 bg-themeColor rounded-full p-1">
          <FaAngleLeft />
        </div>
      </div>
      <div className="mx-auto h-[92vh] border-2 flex flex-col justify-center w-full overflow-auto max-w-xs">
        <div className="mx-4 pt-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold font-inner uppercase">Measurements</h1>
              <div className="border-[1px] border-green-500 w-[140px]"></div>
            </div>

            <div className="flex flex-col justify-center items-center gap-10">
              <div>
                <p className="font-bold font-inner uppercase text-white cursor-pointer bg-themeColor rounded-sm text-center w-[120px] p-2">
                  Arms
                </p>
              </div>
              <div className="relative h-[280px]">
                <img src={ArmsLogo} alt="armsvector" className="w-[270px]" />
                <div className="flex right-[55px] text-lg top-[70px] justify-center items-center absolute">
                  <img src={armsright} alt="" />
                </div>
                <div className="flex left-[60px] text-lg top-[35px] justify-center items-center absolute">
                  <img src={armsleft} alt="" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <input
                  value={arms}
                  onChange={(e) => setArms(e.target.value)}
                  type="text"
                  placeholder="Enter Arms"
                  className="text-sm border-themeColor border-[1px] rounded-md w-full p-3"
                />
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleSaveArms}
                  className="font-bold font-poppins uppercase text-white cursor-pointer bg-themeColor rounded-md w-full p-2"
                >
                  Next
                </button>
                <button className="font-bold font-poppins uppercase text-themeColor cursor-pointer border-themeColor border-[1px] rounded-md w-full p-2">
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

export default Arms;
