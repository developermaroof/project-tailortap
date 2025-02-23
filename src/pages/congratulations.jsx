import React from "react";
import { Link } from "react-router-dom";

const Congratulations = () => {
  return (
    <div className="mx-auto max-w-xs h-[100vh] bg-themeColor flex justify-center items-center">
      <div className="mx-4 flex flex-col gap-20 justify-center items-center text-center">
        <div className="flex flex-col gap-4">
          <p className="text-[70px]">🎉</p>
          <h1 className="font-bold font-poppins text-white uppercase">
            Congratulations!
          </h1>
          <p className="text-white font-poppins font-normal">
            You’ve completed your client informations
          </p>
        </div>
        <button className="bg-white w-full rounded-[4px] p-3 text-themeColor font-bold font-poppins">
          <Link to="/homepage">OK</Link>
        </button>
      </div>
    </div>
  );
};

export default Congratulations;
