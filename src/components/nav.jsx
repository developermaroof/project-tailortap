import React, { useState, useEffect } from "react";
import { GoHomeFill } from "react-icons/go";
import { FaSearch, FaRegUser } from "react-icons/fa";

import { IoIosSettings } from "react-icons/io";
import { Link } from "react-router-dom";

const Nav = () => {
  const [activeNav, setActiveNav] = useState(
    localStorage.getItem("activeNav") || "home"
  );

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
    localStorage.setItem("activeNav", navItem);
  };

  useEffect(() => {
    const storedNav = localStorage.getItem("activeNav");
    if (storedNav) {
      setActiveNav(storedNav);
    }
  }, []);

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xs z-50">
      <div className="w-full px-8 bg-black h-[60px] flex justify-between items-center text-white rounded-t-lg">
        {/* Home */}
        <Link to="/homepage" aria-label="Home">
          <div
            onClick={() => handleNavClick("home")}
            className={`cursor-pointer ${
              activeNav === "home"
                ? "bg-themeColor rounded-full p-2 text-black mb-10 border-4 border-white"
                : ""
            }`}
          >
            <GoHomeFill className="w-[20px] h-[20px]" />
          </div>
        </Link>

        {/* Search */}
        <Link to="/search" aria-label="Search">
          <div
            onClick={() => handleNavClick("search")}
            className={`cursor-pointer ${
              activeNav === "search"
                ? "bg-themeColor rounded-full p-2 text-black mb-10 border-4 border-white"
                : ""
            }`}
          >
            <FaSearch className="w-[20px] h-[20px]" />
          </div>
        </Link>

        {/* Settings */}
        <Link to="/settings" aria-label="Settings">
          <div
            onClick={() => handleNavClick("settings")}
            className={`cursor-pointer ${
              activeNav === "settings"
                ? "bg-themeColor rounded-full p-2 text-black mb-10 border-4 border-white"
                : ""
            }`}
          >
            <IoIosSettings className="w-[25px] h-[25px]" />
          </div>
        </Link>

        {/* User */}
        <div
          onClick={() => handleNavClick("user")}
          className={`cursor-pointer ${
            activeNav === "user"
              ? "bg-themeColor rounded-full p-2 text-black mb-10 border-4 border-white"
              : ""
          }`}
          aria-label="User"
        >
          <FaRegUser className="w-[20px] h-[20px]" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
