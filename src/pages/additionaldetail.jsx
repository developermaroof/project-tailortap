import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa6";

const AdditionalDetails = () => {
  const [additionalDetails, setAdditionalDetails] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const clientId = location.state?.clientId;
    if (!clientId) {
      navigate("/clientdetails");
    }
  }, [location, navigate]);

  const handleSaveAdditionalDetails = () => {
    const clientId = location.state.clientId;
    const getClientData = JSON.parse(localStorage.getItem("client") || "[]");
    const updatedClients = getClientData.map((client) => {
      if (client.id === clientId) {
        return { ...client, additionalDetails };
      }
      return client;
    });
    localStorage.setItem("client", JSON.stringify(updatedClients));
    navigate("/congratulations", { state: { clientId } });
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
          <div className="flex flex-col gap-10">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-bold font-inner uppercase">Measurements</h1>
              <div className="border-[1px] border-green-500 w-[140px]"></div>
            </div>
            <div className="flex flex-col justify-center items-center gap-10">
              <p className="font-bold text-[14px] font-inner uppercase text-white cursor-pointer bg-themeColor rounded-sm text-center w-[180px] p-2">
                Additional Details
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <textarea
                  value={additionalDetails}
                  onChange={(e) => setAdditionalDetails(e.target.value)}
                  name=""
                  id=""
                  rows={6}
                  placeholder="Enter Additional Details"
                  className="text-sm border-themeColor border-[1px] rounded-[5px] w-full p-3"
                ></textarea>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleSaveAdditionalDetails}
                  className="font-bold font-poppins uppercase text-white cursor-pointer bg-themeColor rounded-md w-full p-2"
                >
                  Done
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

export default AdditionalDetails;
