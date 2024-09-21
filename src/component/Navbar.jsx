import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import "../index.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between py-2 items-center">
          <div className="flex items-center ">
            <img
              src={logo}
              alt="Logo"
              className="h-20 w-50"
            />
          </div>

          {/* Hamburger menu (for small screens) */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#000000] inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Menu items for larger screens */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8 text-[#6d6666] font-medium">
            {["Catalog", "How it works", "Pricing", "Blog", "Services", "Use-cases", "Need help?"].map((item) => (
              <Link key={item} to={`/${item.toLowerCase().replace(/ /g, "-")}`} className="hover:underline">
                {item}
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link to="#">
              <button className="border border-[#464225] text-[#464225] px-6 py-2 rounded-md transition-colors duration-300 hover:bg-[#f1f1f1]">
                Log in
              </button>
            </Link>
            <Link to="#">
              <button className="bg-[#2eb643] text-white px-6 py-2 rounded-md transition-colors duration-300">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu (visible when hamburger is toggled) */}
      {isOpen && (
        <div className="bg-white px-2 pt-2 pb-3 space-y-1 text-[#464225] font-medium">
          {["Catalog", "How it works", "Pricing", "Blog", "Services", "Use-cases", "Need help?"].map((item) => (
            <Link key={item} to={`/${item.toLowerCase().replace(/ /g, "-")}`} className="block hover:bg-gray-100 px-3 py-2 rounded-md">
              {item}
            </Link>
          ))}
          <div className="mt-3 space-y-1">
            <Link to="/login">
              <button className="block w-full border border-[#464225] text-[#464225] px-6 py-2 rounded-md transition-colors duration-300 hover:bg-[#f1f1f1]">
                Log in
              </button>
            </Link>
            <Link to="/signup">
              <button className="block w-full bg-[#b1ff4f] text-[#464225] px-6 py-2 rounded-md transition-colors duration-300 hover:bg-[#a1ee3d]">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
