import { useState, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import Video from "../assets/video.png";
import { useNavigate, useParams } from "react-router-dom";
import { useClient } from "../contexts/clientContext";

const ClientsData = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const { clientId } = useParams();
  const {
    clientData,
    getClient,
    setClientData,
    updateClient,
    handleMeasurementInput,
  } = useClient();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchClientData = async () => {
      if (clientId) {
        const fetchedClientData = await getClient(clientId); // Make sure getClient works correctly.
        if (fetchedClientData) {
          setClientData(fetchedClientData); // Ensure this updates the state with client data.
        } else {
          // Handle case when no data is found
          console.log("No client data found for id:", clientId);
        }
      }
    };
    fetchClientData();
  }, [clientId, getClient, setClientData]);

  if (!clientData.fullname) {
    return (
      <div className="flex justify-center items-center">
        <p>No client data found for this ID.</p>
      </div>
    ); // Show an error or fallback UI if no client data is found
  }

  const handleSaveChanges = () => {
    console.log("clicked");

    if (clientId) {
      updateClient(clientId);
      alert("Client Updated");
      navigate("/search");
    } else {
      alert("No client ID provided");
    }
  };
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
      {/* Client Details */}
      <div className="mx-auto h-[92vh] pb-10 border-2 overflow-auto max-w-xs w-full ">
        <div className="mx-4 pt-14">
          {/*  */}
          <div className="border-t-[1px] border-gray-300 text-[12px] mt-4 p-2 flex justify-between items-center">
            <div className="text-gray-600">
              <p>{clientData.fullname}</p>
              <p>{clientData.number}</p>
            </div>
          </div>
          {/* Measurements */}
          <div className="mt-10">
            <p className="text-themeColor text-sm">Detail</p>
            <div className="border-t-[1px] border-gray-300 text-[14px] mt-4 py-6 flex flex-col gap-4">
              {Object.entries(clientData.measurements || {}).map(
                ([key, value]) => (
                  <div key={key} className="flex justify-between items-center">
                    <p>{key}</p>
                    <input
                      type="text"
                      value={value}
                      onChange={(e) =>
                        handleMeasurementInput(key, e.target.value)
                      }
                      className="bg-gray-200 px-[30px] py-[4px] rounded-md"
                    />
                  </div>
                )
              )}
            </div>
            <button
              onClick={handleSaveChanges}
              className="font-bold text-white bg-themeColor rounded-md w-full p-2 mt-6"
            >
              Save Changes
            </button>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
};

export default ClientsData;
