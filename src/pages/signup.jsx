import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore();

const SignUp = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
    password: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleInput = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleCheckbox = (event) => {
    setIsChecked(event.target.checked);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!data.firstname.trim()) {
      newErrors.firstname = "First name is required";
    }
    if (!data.lastname.trim()) {
      newErrors.lastname = "Last name is required";
    }
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!data.number.trim()) {
      newErrors.number = "Phone number is required";
    }
    if (!data.password.trim()) {
      newErrors.password = "Password is required";
    }
    if (!isChecked) {
      newErrors.checkbox = "You must agree to the privacy policy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    setIsRegistering(true);
    setErrors({});

    try {
      const user = await doCreateUserWithEmailAndPassword(
        data.email,
        data.password
      );

      await setDoc(doc(db, "users", user.uid), {
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        number: data.number,
        uid: user.uid,
        createdAt: new Date(),
      });

      navigate("/homepage");
    } catch (error) {
      console.error("SignUp Error:", error.message);
      setErrors({ form: error.message || "Failed to create user" });
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mx-4 border-2 h-[100vh] w-full overflow-auto py-2 mx-auto max-w-xs">
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
            <div className="flex flex-col w-[118px]">
              <input
                onChange={handleInput}
                type="text"
                name="firstname"
                placeholder="First Name"
                className="border-[1px] p-2 pl-4 text-sm border-green-600 rounded-[50px]"
              />
              {errors.firstname && (
                <p className="text-red-500 text-xs mt-1">{errors.firstname}</p>
              )}
            </div>
            <div className="flex flex-col w-[118px]">
              <input
                onChange={handleInput}
                type="text"
                name="lastname"
                placeholder="Last Name"
                className="border-[1px] p-2 pl-4 text-sm border-green-600 rounded-[50px]"
              />
              {errors.lastname && (
                <p className="text-red-500 text-xs mt-1">{errors.lastname}</p>
              )}
            </div>
          </div>

          {/* Email, Phone, Password Inputs */}
          <div className="p-2 mt-2 flex flex-col justify-center items-center gap-4">
            <div className="flex flex-col w-[250px]">
              <input
                onChange={handleInput}
                type="email"
                name="email"
                placeholder="Email"
                className="border-[1px] p-2 pl-4 text-sm border-green-600 rounded-[50px]"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div className="flex flex-col w-[250px]">
              <input
                onChange={handleInput}
                type="number"
                name="number"
                placeholder="Phone Number"
                className="border-[1px] p-2 pl-4 text-sm border-green-600 rounded-[50px]"
              />
              {errors.number && (
                <p className="text-red-500 text-xs mt-1">{errors.number}</p>
              )}
            </div>
            <div className="flex flex-col w-[250px]">
              <input
                onChange={handleInput}
                type="password"
                name="password"
                placeholder="Password"
                className="border-[1px] p-2 pl-4 text-sm border-green-600 rounded-[50px]"
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-center mt-2 gap-2 px-2 w-[250px]">
            <input type="checkbox" name="checkbox" onChange={handleCheckbox} />
            <p className="text-gray-400 text-[12px] tracking-wide">
              I Agree with <span className="text-red-600">privacy</span> and{" "}
              <span className="text-red-600">policy</span>?
            </p>
          </div>
          {errors.checkbox && (
            <p className="text-red-500 text-xs mt-1">{errors.checkbox}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-4 flex justify-center">
          <button
            type="submit"
            disabled={isRegistering}
            className="font-bold font-poppins text-white cursor-pointer bg-themeColor rounded-[50px] w-[250px] p-2"
          >
            {isRegistering ? "Signing Up..." : "Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
