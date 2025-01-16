import React, { useState } from "react"; // Import React and the useState hook for managing state.
import Logo from "../assets/logo.png"; // Import the logo image.
import { Link, useNavigate } from "react-router-dom"; // Import React Router's Link for navigation and useNavigate for programmatic navigation.
import { doSignInWithEmailAndPassword } from "../firebase/auth"; // Import the Firebase authentication function for signing in.

const Login = () => {
  // State variables to manage form input values and error handling.
  const [email, setEmail] = useState(""); // Stores the email input value.
  const [password, setPassword] = useState(""); // Stores the password input value.
  const [errors, setErrors] = useState({}); // Object to store form validation errors.
  const [isSigningIn, setIsSigningIn] = useState(false); // Tracks whether the user is currently signing in.
  const navigate = useNavigate(); // Hook to navigate to other routes programmatically.

  // Handles changes in the input fields and updates corresponding state.
  const handleInput = (event) => {
    const { name, value } = event.target; // Destructure name and value from the input event.
    if (name === "email") setEmail(value); // Update email state if the input name is "email".
    if (name === "password") setPassword(value); // Update password state if the input name is "password".
  };

  // Validates the form inputs and sets errors if validation fails.
  const validateForm = () => {
    const newErrors = {}; // Temporary object to store validation errors.
    if (!email.trim()) newErrors.email = "Email is required"; // Check if email is empty.
    if (!password.trim()) newErrors.password = "Password is required"; // Check if password is empty.
    setErrors(newErrors); // Update the errors state with validation results.
    return Object.keys(newErrors).length === 0; // Return true if there are no errors.
  };

  // Handles form submission.
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior.

    if (!validateForm()) return; // Validate the form and return if there are errors.

    setIsSigningIn(true); // Set the signing-in state to true to indicate a loading state.
    setErrors({}); // Clear any existing errors.

    try {
      // Attempt to sign in using Firebase authentication.
      const userCredential = await doSignInWithEmailAndPassword(
        email,
        password
      );
      console.log("User logged in successfully:", userCredential.user); // Log the authenticated user details.
      navigate("/homepage"); // Redirect to the homepage upon successful login.
    } catch (error) {
      console.error("Login Error:", error.message); // Log the error if login fails.
      setErrors({ form: error.message || "Invalid email or password" }); // Set a general form error message.
    } finally {
      setIsSigningIn(false); // Reset the signing-in state after the process.
    }
  };

  return (
    <div className="flex flex-col w-full h-[100vh] border-2 overflow-auto justify-center items-center mx-4 py-2 mx-auto max-w-xs">
      {/* Logo Section */}
      <div className="mt-20">
        <img src={Logo} alt="Logo" /> {/* Displays the logo */}
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-center mt-20">
          <h1 className="font-bold font-poppins uppercase text-[30px] leading-tight tracking-wide">
            Login
          </h1>
          <div className="border-[1px] border-green-500 w-[110px]"></div>{" "}
          {/* Decorative underline */}
          {/* Email Input Field */}
          <div className="p-2 mt-12 flex flex-col gap-2 w-[250px]">
            <input
              onChange={handleInput}
              type="email"
              name="email"
              placeholder="Email Address"
              className="border-[1px] p-2 pl-4 text-sm border-green-600 rounded-[50px]"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p> // Displays email validation error.
            )}
          </div>
          {/* Password Input Field */}
          <div className="p-2 flex flex-col gap-2 w-[250px]">
            <input
              onChange={handleInput}
              type="password"
              name="password"
              placeholder="Your Password"
              className="border-[1px] p-2 pl-4 text-sm border-green-600 rounded-[50px]"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p> // Displays password validation error.
            )}
          </div>
          {/* General Form Error */}
          {errors.form && (
            <p className="text-red-500 text-xs mt-2">{errors.form}</p> // Displays a general error message for login failures.
          )}
        </div>

        {/* Forgot Password Link */}
        <div className="w-full px-[10px] mt-2 text-right">
          <p className="text-red-600 text-[12px]">Forgot Password?</p>
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <button
            type="submit"
            disabled={isSigningIn} // Disables the button while signing in.
            className="font-bold font-poppins text-white cursor-pointer bg-themeColor rounded-[50px] w-[250px] p-2"
          >
            {isSigningIn ? "Logging In..." : "Log In"}{" "}
            {/* Dynamic button text based on signing-in state */}
          </button>
        </div>
      </form>

      {/* Signup Link */}
      <div className="flex justify-between items-center mt-6 w-[250px]">
        <p className="text-gray-400 text-sm tracking-wide">
          Don't have an Account?
        </p>
        <button className="text-red-600 text-sm">
          <Link to="/signup">Sign up</Link> {/* Link to the signup page */}
        </button>
      </div>
    </div>
  );
};

export default Login;
