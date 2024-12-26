import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa6";
import Nav from "../components/nav";
import ShoulderLogo from "../assets/shoulder.png";
import shoulderrightleft from "../assets/shoulderrightleft.png";

const Shoulder = () => {
  const [shoulder, setShoulder] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const clientId = location.state?.clientId;
    if (!clientId) {
      navigate("/clientdetails");
    }
  }, [location, navigate]);

  const handleSaveShoulder = () => {
    const clientId = location.state.clientId;
    const getClientData = JSON.parse(localStorage.getItem("client") || "[]");
    const updatedClients = getClientData.map((client) => {
      if (client.id === clientId) {
        return { ...client, shoulder };
      }
      return client;
    });

    localStorage.setItem("client", JSON.stringify(updatedClients));
    navigate("/measurements/arms", { state: { clientId } });
  };

  return (
    <>
      <div className="relavite">
        <div className="absolute top-5 right-5 bg-themeColor rounded-full p-1">
          <IoMdClose />
        </div>
        <div className="absolute top-5 left-5 bg-themeColor rounded-full p-1">
          <FaAngleLeft />
        </div>
      </div>
      <div className="mx-auto h-[88vh] overflow-auto max-w-xs">
        <div className="m-4">
          {/*  */}
          <div className="pb-1 pt-16">
            {/*  */}

            {/*  */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col justify-center">
                <h1 className="font-bold font-inner uppercase">Measurements</h1>
                <div className="border-[1px] border-green-500 w-[140px]"></div>
              </div>

              <div className="flex flex-col justify-center items-center gap-10">
                <div>
                  <p className="font-bold font-inner uppercase text-white cursor-pointer bg-themeColor rounded-sm text-center w-[120px] p-2 uppercase">
                    Shoulder
                  </p>
                </div>
                <div className="relative  h-[280px]">
                  <img
                    src={ShoulderLogo}
                    alt="lengthvector"
                    className="w-[250px]"
                  />
                  <div className="flex right-[30px] text-lg top-[75px] justify-center items-center absolute">
                    <img src={shoulderrightleft} alt="" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <input
                    value={shoulder}
                    onChange={(e) => setShoulder(e.target.value)}
                    type="text"
                    placeholder="Enter Shoulder"
                    className="text-sm border-themeColor border-[1px] rounded-md w-full p-3"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={handleSaveShoulder}
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
      </div>
      <Nav />
    </>
  );
};

export default Shoulder;
