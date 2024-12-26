import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const UserDetails = {
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    password: "",
  };

  const [data, setData] = useState(UserDetails);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData({ ...data, [name]: value });
  };

  const handleCheckbox = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      data.firstname === "" ||
      data.lastname === "" ||
      data.email === "" ||
      data.number === "" ||
      data.password === ""
    ) {
      alert("Please fill all the fields");
      return;
    }

    if (!isChecked) {
      alert("You must agree to the privacy policy");
      return;
    }

    const getData = JSON.parse(localStorage.getItem("user") || "[]");

    let arr = [...getData];
    arr.push(data);

    localStorage.setItem("user", JSON.stringify(arr));

    alert("Signed Up Successfully!");
    navigate("/login");
  };

  return (
    <div className="flex flex-col justify-center items-center m-4 py-2 mx-auto max-w-xs">
      <div className="mt-20">
        <img src={Logo} alt="Logo" />
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center mt-12">
          {/* Title */}
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold font-poppins uppercase text-[30px] leading-tight tracking-wide">
              SignUp
            </h1>
            <div className="border-[1px] border-green-500 w-[110px]"></div>
          </div>

          {/* Name Inputs */}
          <div className="flex w-[250px] gap-3 mt-12">
            <input
              onChange={handleInput}
              type="text"
              name="firstname"
              placeholder="First Name"
              className="border-[1px] p-2 pl-4 text-sm border-green-600 rounded-[50px] w-[118px]"
            />
            <input
              onChange={handleInput}
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="border-[1px] p-2 pl-4 text-sm border-green-600 rounded-[50px] w-[118px]"
            />
          </div>

          {/* Email, Phone, Password Inputs */}
          <div className="p-2 mt-2 flex flex-col justify-center items-center gap-4">
            <input
              onChange={handleInput}
              type="email"
              name="email"
              placeholder="Email"
              className="border-[1px] p-2 pl-4 text-sm border-green-600 rounded-[50px] w-[250px]"
            />
            <input
              onChange={handleInput}
              type="number"
              name="number"
              placeholder="Phone Number"
              className="border-[1px] p-2 pl-4 text-sm border-green-600 rounded-[50px] w-[250px]"
            />
            <input
              onChange={handleInput}
              type="password"
              name="password"
              placeholder="Password"
              className="border-[1px] p-2 pl-4 text-sm border-green-600 rounded-[50px] w-[250px]"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center mt-2 gap-2 px-2 w-[250px]">
            <input type="checkbox" name="checkbox" onChange={handleCheckbox} />
            <p className="text-gray-400 text-[12px] tracking-wide">
              I Agree with <span className="text-red-600">privacy</span> and{" "}
              <span className="text-red-600">policy</span>?
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-4 flex justify-center">
          <button className="font-bold font-poppins text-white cursor-pointer bg-themeColor rounded-[50px] w-[250px] p-2">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
