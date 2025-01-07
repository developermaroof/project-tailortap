import React from "react";
import { FaAngleLeft } from "react-icons/fa6";
import Video from "../assets/video.png";
import { useNavigate } from "react-router-dom";
import { useClient } from "../contexts/clientContext";

const ClientDetail = () => {
  const { clientData, handleInput, addClient } = useClient();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const clientId = await addClient();
    if (clientId) {
      navigate("/measurements/length", { state: { clientId } });
    }
  };

  return (
    <>
      <div className="relative max-w-xs mx-auto w-full">
        <div className="absolute top-5 right-5 bg-black rounded-full p-[2px]">
          <img src={Video} alt="" className="w-[22px] h-[22px]" />
        </div>
        <div className="absolute top-5 left-5">
          <FaAngleLeft className="w-[22px] h-[22px]" />
        </div>
      </div>
      <div className="mx-auto max-w-xs h-[92vh] pb-10 border-2 flex flex-col justify-center w-full overflow-auto">
        <div className="mx-4 pt-6">
          <div className="flex flex-col gap-14">
            <div className="flex flex-col mt-20 justify-center">
              <h1 className="font-bold font-inner uppercase">Client Detail</h1>
              <div className="border-[1px] border-green-500 w-[120px]"></div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="text-sm">
                  <label htmlFor="name">Full Name</label>
                  <input
                    onChange={handleInput}
                    type="text"
                    name="fullname"
                    value={clientData.fullname}
                    className="border-themeColor border-[2px] rounded-md w-full p-2"
                  />
                </div>
                <div className="text-sm">
                  <label htmlFor="cast">Cast</label>
                  <input
                    onChange={handleInput}
                    value={clientData.cast}
                    type="text"
                    name="cast"
                    className="border-themeColor border-[2px] rounded-md w-full p-2"
                  />
                </div>
                <div className="text-sm">
                  <label htmlFor="number">Phone Number*</label>
                  <input
                    onChange={handleInput}
                    value={clientData.number}
                    type="number"
                    name="number"
                    className="border-themeColor border-[2px] rounded-md w-full p-2"
                  />
                </div>
                <div className="text-sm">
                  <label htmlFor="address">
                    Address <span className="text-gray-500">(optional)</span>{" "}
                  </label>
                  <input
                    onChange={handleInput}
                    value={clientData.address}
                    type="text"
                    name="address"
                    className="border-themeColor border-[2px] rounded-md w-full p-2"
                  />
                </div>
                <div>
                  <button className="font-bold font-poppins text-white cursor-pointer bg-themeColor rounded-md w-full p-3">
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientDetail;
