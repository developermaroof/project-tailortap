import React, { useState } from 'react';
import { GoHomeFill } from "react-icons/go";
import { FaSearch, FaRegUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('home'); // Default active icon

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };

  return (
    <nav className="fixed bottom-0 w-full z-50 mx-auto max-w-sm">
      <div>
        {/* Nav Inner */}
        <div className="w-full px-8 bg-black h-[60px] flex justify-between items-center text-white">
          {/* Home */}
          <div
            onClick={() => handleNavClick('home')}
            className={`cursor-pointer ${
              activeNav === 'home'
                ? 'bg-themeColor rounded-full p-2 text-black mb-10 border-4 border-white'
                : ''
            }`}
          >
            <GoHomeFill className="w-[20px] h-[20px]" />
          </div>

          {/* Search */}
          <div
            onClick={() => handleNavClick('search')}
            className={`cursor-pointer ${
              activeNav === 'search'
                ? 'bg-themeColor rounded-full p-2 text-black mb-10 border-4 border-white'
                : ''
            }`}
          >
            <FaSearch className="w-[20px] h-[20px]" />
          </div>

          {/* Settings */}
          <div
            onClick={() => handleNavClick('settings')}
            className={`cursor-pointer ${
              activeNav === 'settings'
                ? 'bg-themeColor rounded-full p-2 text-black mb-10 border-4 border-white'
                : ''
            }`}
          >
            <IoIosSettings className="w-[25px] h-[25px]" />
          </div>

          {/* User */}
          <div
            onClick={() => handleNavClick('user')}
            className={`cursor-pointer ${
              activeNav === 'user'
                ? 'bg-themeColor rounded-full p-2 text-black mb-10 border-4 border-white'
                : ''
            }`}
          >
            <FaRegUser className="w-[20px] h-[20px]" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
