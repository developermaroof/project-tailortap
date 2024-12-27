import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      let getUserDetails = JSON.parse(localStorage.getItem("user")) || [];

      // Find a matching user
      let matchedUser = getUserDetails.find(
        (user) => user.email === email && user.password === password
      );

      if (matchedUser) {
        navigate("/homepage");
      } else {
        setErrors({ form: "Invalid email or password" });
      }
    }
  };

  return (
    <div className="flex flex-col   w-full overflow-auto justify-center items-center m-4 py-2 mx-auto max-w-xs">
      <div className="mt-20">
        <img src={Logo} alt="Logo" />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center mt-20">
          <h1 className="font-bold font-poppins uppercase text-[30px] leading-tight tracking-wide">
            Login
          </h1>
          <div className="border-[1px] border-green-500 w-[110px]"></div>

          {/* Email Input */}
          <div className="p-2 mt-12 flex flex-col gap-2 w-[250px]">
            <input
              onChange={handleInput}
              type="email"
              name="email"
              placeholder="Email Address"
              className="border-[1px] p-2 pl-4 text-sm border-green-600 rounded-[50px]"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="p-2 flex flex-col gap-2 w-[250px]">
            <input
              onChange={handleInput}
              type="password"
              name="password"
              placeholder="Your Password"
              className="border-[1px] p-2 pl-4 text-sm border-green-600 rounded-[50px]"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* General Form Error */}
          {errors.form && (
            <p className="text-red-500 text-xs mt-2">{errors.form}</p>
          )}
        </div>

        {/* Forgot Password */}
        <div className="w-full px-[10px] mt-2 text-right">
          <p className="text-red-600 text-[12px]">Forgot Password?</p>
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <button
            type="submit"
            className="font-bold font-poppins text-white cursor-pointer bg-themeColor rounded-[50px] w-[250px] p-2"
          >
            Log in
          </button>
        </div>
      </form>

      {/* Signup Link */}
      <div className="flex justify-between items-center mt-6 w-[250px]">
        <p className="text-gray-400 text-sm tracking-wide">
          Don't have an Account?
        </p>
        <button className="text-red-600 text-sm">
          <Link to="/signup">Sign up</Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
