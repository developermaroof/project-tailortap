import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";

const ChooseLang = () => {
  const [activeLanguage, setActiveLanguage] = useState("English");

  const handleLanguageChange = (language) => {
    setActiveLanguage(language);
  };

  return (
    <>
      <div className="mx-auto h-[100vh] border-2 flex flex-col p-4 justify-center w-full overflow-auto max-w-xs">
        <div className="mx-4 pt-10">
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold font-poppins uppercase leading-tight tracking-wide">
              Choose
            </h1>
            <h1 className="font-bold font-poppins uppercase leading-tight tracking-wide">
              Language
            </h1>
            <div className="border-[1px] border-themeColor w-[150px]"></div>
          </div>
        </div>
        {/* Language Buttons */}
        <div className="py-2 mt-10">
          <div className="flex flex-col gap-5">
            {["English", "Urdu", "Sindhi"].map((language) => (
              <button
                key={language}
                onClick={() => handleLanguageChange(language)}
                className={`flex justify-between cursor-pointer p-4 shadow-md shadow-gray-400 rounded-md ${
                  activeLanguage === language
                    ? "bg-hoverColor"
                    : "hover:bg-hoverColor"
                }`}
              >
                <h1 className="font-inner font-normal">{language}</h1>
                {activeLanguage === language && (
                  <div className="bg-themeColor rounded-full border-2 border-themeColor flex justify-center items-center p-1">
                    <FaCheck className="w-[12px] h-[12px]" />
                  </div>
                )}
              </button>
            ))}
            {/* Continue Button */}
            <button className="flex justify-center font-bold font-poppins text-white cursor-pointer py-2 mt-10 bg-themeColor">
              <Link to="/login">
                <h1>Continue</h1>
              </Link>
            </button>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
};

export default ChooseLang;
