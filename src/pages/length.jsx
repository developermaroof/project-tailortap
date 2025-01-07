import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa6";
import Lengthlogo from "../assets/length.png";
import lengthupdown from "../assets/lengthupdown.png";
import { useClient } from "../contexts/clientContext";

const Length = () => {
  const { clientData, handleMeasurementInput, updateClient, getClient } =
    useClient();
  const location = useLocation();
  const navigate = useNavigate();
  const [isClientDataLoaded, setIsClientDataLoaded] = useState(false);

  useEffect(() => {
    if (location.state?.clientId && !isClientDataLoaded) {
      getClient(location.state.clientId);
      setIsClientDataLoaded(true);
    } else if (!location.state?.clientId) {
      navigate("/clientdetails");
    }
  }, [location, navigate, getClient, isClientDataLoaded]);

  const handleSaveLength = () => {
    const clientId = location.state.clientId;

    updateClient(clientId);

    navigate("/measurements/shoulder", {
      state: { clientId },
    });
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
                <p className="font-bold font-inner uppercase text-white cursor-pointer bg-themeColor rounded-sm text-center w-[120px] uppercase p-2">
                  Length
                </p>
              </div>
              <div className="relative h-[280px]">
                <img
                  src={Lengthlogo}
                  alt="lengthvector"
                  className="w-[180px]"
                />
                <div className="flex right-[20px] text-lg top-[20px] justify-center items-center absolute">
                  <img src={lengthupdown} alt="" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <input
                  value={clientData.measurements.length || ""}
                  onChange={(e) =>
                    handleMeasurementInput("length", e.target.value)
                  }
                  type="text"
                  placeholder="Enter Length"
                  className="text-sm border-themeColor border-[1px] rounded-md w-full p-3"
                />
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleSaveLength}
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
