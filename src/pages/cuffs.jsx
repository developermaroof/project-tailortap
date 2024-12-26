import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa6";
import Nav from "../components/nav";
import CuffsLogo from "../assets/cuffs.png";
import cuffsarrow from "../assets/cuffsarrow.png";

const Cuffs = () => {
  const [cuffs, setCuffs] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const clientId = location.state?.clientId;
    if (!clientId) {
      navigate("/clientdetails");
    }
  }, [location, navigate]);

  const handleSaveCuffs = () => {
    const clientId = location.state.clientId;
    const getClientData = JSON.parse(localStorage.getItem("client") || "[]");
    const updatedClients = getClientData.map((client) => {
      if (client.id === clientId) {
        return { ...client, cuffs };
      }
      return client;
    });

    localStorage.setItem("client", JSON.stringify(updatedClients));
    navigate("/measurements/collar", { state: { clientId } });
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
                  <p className="font-bold font-inner text-white cursor-pointer bg-themeColor rounded-sm uppercase text-center w-[120px] p-2">
                    Cuffs
                  </p>
                </div>
                <div className="relative h-[280px]">
                  <img src={CuffsLogo} alt="armsvector" className="w-[80px]" />
                  <div className="flex right-[-30px] text-lg top-[130px] justify-center items-center absolute">
                    <img src={cuffsarrow} alt="" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <input
                    value={cuffs}
                    onChange={(e) => setCuffs(e.target.value)}
                    type="text"
                    placeholder="Enter Cuffs"
                    className="text-sm border-themeColor border-[1px] rounded-md w-full p-3"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={handleSaveCuffs}
                    className="font-bold font-poppins text-white cursor-pointer bg-themeColor rounded-md uppercase w-full p-2"
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

export default Cuffs;
