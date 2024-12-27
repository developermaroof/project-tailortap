import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ScreenShotPlaceholder from "../assets/uploadscreenshot.png";
import { useNavigate } from "react-router-dom";

const BankInfo = () => {
  const [transactionId, setTransactionId] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [screenshotPreview, setScreenshotPreview] = useState(
    ScreenShotPlaceholder
  );
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleScreenshotUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setScreenshot(file);
      setScreenshotPreview(URL.createObjectURL(file));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!transactionId.trim()) {
      newErrors.transactionId = "Transaction ID is required";
    }
    if (!screenshot) {
      newErrors.screenshot = "Screenshot upload is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/thankyou");
    }
  };

  return (
    <>
      <div className="relative max-w-xs mx-auto w-full">
        <div className="absolute top-5 right-5 bg-green-500 rounded-full p-1">
          <IoMdClose />
        </div>
      </div>
      <div className="mx-auto   w-full overflow-auto max-w-xs">
        <form onSubmit={handleSubmit} className="m-4">
          {/* Header */}
          <div className="pb-1 pt-16">
            <div className="mt-10 flex flex-col text-center text-xl justify-center items-center font-bold font-poppins">
              <h1>
                BANK ACCOUNT <br /> INFORMATION
              </h1>
              <div className="border-[1px] border-themeColor w-[200px] leading-tight"></div>
            </div>
            {/* Form Fields */}
            <div className="mt-10 flex flex-col gap-4">
              {/* Transaction ID */}
              <div className="flex flex-col">
                <label className="text-sm font-poppins">Transaction ID</label>
                <input
                  type="number"
                  placeholder="#3100098097656"
                  value={transactionId}
                  onChange={(e) => setTransactionId(e.target.value)}
                  className="mt-2 border-[1px] p-2 pl-4 text-sm border-themeColor rounded-[6px] w-[250px]"
                />
                {errors.transactionId && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.transactionId}
                  </p>
                )}
              </div>

              {/* Upload Screenshot */}
              <div>
                <p className="text-sm font-poppins">Upload Screenshot</p>
                <label className="shadow-md gap-3 mt-4 shadow-gray-400 rounded-md cursor-pointer flex flex-col justify-center items-center p-6 text-center">
                  <img
                    src={screenshotPreview}
                    alt="Screenshot Preview"
                    className="w-[100px] h-[100px] object-cover rounded-md"
                  />
                  <p className="text-xs">
                    Upload your{" "}
                    <span className="text-themeColor">Screenshot</span> here to{" "}
                    <br /> confirm purchase
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleScreenshotUpload}
                    className="hidden"
                  />
                </label>
                {errors.screenshot && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.screenshot}
                  </p>
                )}
              </div>

              {/* Confirm Button */}
              <button
                type="submit"
                className="flex justify-center font-bold font-poppins text-white cursor-pointer py-3 mt-10 bg-themeColor"
              >
                CONFIRM PURCHASE
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default BankInfo;
