import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa6";
import PainchaLogo from "../assets/pantshalwar.png";
import painchaarrow from "../assets/shoulderrightleft.png";
import { useClient } from "../contexts/clientContext";

const Paincha = () => {
  const { clientData, handleMeasurementInput, updateClient, getClient } =
    useClient();
  const location = useLocation();
  const navigate = useNavigate();
  const [isClientDataLoaded, setIsClientDataLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  useEffect(() => {
    if (location.state?.clientId && !isClientDataLoaded) {
      getClient(location.state.clientId);
      setIsClientDataLoaded(true);
    } else if (!location.state?.clientId) {
      navigate("/clientdetails");
    }
  }, [location, navigate, getClient, isClientDataLoaded]);

  const handleSavePaincha = () => {
    const clientId = location.state.clientId;
    // Check if the paincha field is empty
    if (!clientData.measurements.paincha) {
      setErrorMessage(
        "paincha is required. Please fill the field or click Skip."
      ); // Show error message
      return; // Prevent navigation
    }
    // Clear any previous error messages and update the client data
    setErrorMessage("");
    updateClient(clientId);
    navigate("/measurements/upload", { state: { clientId } });
  };

  const handleSkip = () => {
    const clientId = location.state.clientId;

    // Clear the error message and proceed to the next page
    setErrorMessage("");
    navigate("/measurements/upload", {
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
                  paincha
                </p>
              </div>
              <div className="relative h-[280px]">
                <img
                  src={PainchaLogo}
                  alt="painchavector"
                  className="mt-6 w-[180px]"
                />
                <div className="flex right-[0px] text-lg bottom-[55px] justify-center items-center absolute">
                  <img src={painchaarrow} alt="" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <input
                  value={clientData.measurements.paincha || ""}
                  onChange={(e) =>
                    handleMeasurementInput("paincha", e.target.value)
                  }
                  type="text"
                  placeholder="Enter Paincha"
                  className="text-sm border-themeColor border-[1px] rounded-md w-full p-3"
                />
                {/* Display error message */}
                {errorMessage && (
                  <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleSavePaincha}
                  className="font-bold font-poppins uppercase text-white cursor-pointer bg-themeColor rounded-md w-full p-2"
                >
                  Next
                </button>
                <button
                  onClick={handleSkip}
                  className="font-bold font-poppins text-themeColor cursor-pointer border-themeColor border-[1px] rounded-md uppercase w-full p-2"
                >
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

export default Paincha;
