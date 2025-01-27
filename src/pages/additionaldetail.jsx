import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa6";
import { useClient } from "../contexts/clientContext";

const AdditionalDetails = () => {
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

  const handleSaveAdditionalDetails = () => {
    const clientId = location.state.clientId;
    // Check if the additionaldetails field is empty
    if (!clientData.measurements.additionalDetails) {
      setErrorMessage(
        "additionaldetails is required. Please fill the field or click Skip."
      ); // Show error message
      return; // Prevent navigation
    }
    // Clear any previous error messages and update the client data
    setErrorMessage("");
    updateClient(clientId);
    navigate("/congratulations", { state: { clientId } });
  };
  const handleSkip = () => {
    const clientId = location.state.clientId;

    // Clear the error message and proceed to the next page
    setErrorMessage("");
    navigate("/congratulations", {
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
                  value={clientData.measurements.additionalDetails || ""}
                  onChange={(e) =>
                    handleMeasurementInput("additionalDetails", e.target.value)
                  }
                  name=""
                  id=""
                  rows={6}
                  placeholder="Enter Additional Details"
                  className="text-sm border-themeColor border-[1px] rounded-[5px] w-full p-3"
                ></textarea>
                {/* Display error message */}
                {errorMessage && (
                  <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleSaveAdditionalDetails}
                  className="font-bold font-poppins uppercase text-white cursor-pointer bg-themeColor rounded-md w-full p-2"
                >
                  Done
                </button>
                <button
                  onClick={handleSkip}
                  className="font-bold font-poppins uppercase text-themeColor cursor-pointer border-themeColor border-[1px] rounded-md w-full p-2"
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

export default AdditionalDetails;
