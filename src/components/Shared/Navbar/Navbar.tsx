import React, { useState } from "react";
import assets from "../../../assets";

const Navbar = () => {
  // State to toggle the mobile menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#b93329] h-[108px]">
      <div className="container mx-auto px-4 flex justify-between items-center h-full">
        {/* Left Side - Logo and Navigation Links */}
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center gap-2">
            <img
              src={assets.images.logo}
              alt="Restaurant Logo"
              className="w-[37px] h-[37px]"
            />
            <span className="text-white font-poppins text-[28px] leading-[28px]">
              <span className="font-semibold inline-block">Restau</span>
              <span className="font-normal inline-block">rant</span>
            </span>
          </a>
          <ul className="hidden md:flex gap-8 text-white text-sm font-poppins">
            <li>
              <a
                href="#"
                className="text-[15px] font-medium "
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[15px] font-medium "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[15px] font-medium "
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[15px] font-medium "
              >
                Clients
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[15px] font-medium "
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[15px] font-medium "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side - Book a Table Button */}
        <button className="hidden md:block bg-[#febf00] text-[#0a1425] font-bold text-base py-2 px-6 h-11 w-40 hover:bg-yellow-400 transition-opacity">
          BOOK A TABLE
        </button>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="md:hidden text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center bg-[#bd1f17] text-white space-y-4 py-4 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="space-y-2 text-center font-poppins">
          <li>
            <a
              href="#"
              className="text-[15px] font-medium "
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[15px] font-medium "
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[15px] font-medium "
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[15px] font-medium "
            >
              Clients
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[15px] font-medium "
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-[15px] font-medium "
            >
              Contact
            </a>
          </li>
          <li>
            <button className="w-[157px] h-[44px] bg-[#febf00] text-[#0a1425] font-bold text-base leading-6 hover:bg-yellow-400 transition-opacity">
              BOOK A TABLE
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
