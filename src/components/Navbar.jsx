import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-30 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://img.pikbest.com/png-images/20241016/creative-book-logo-vector-design_10968791.png!sw800"
              className="h-8"
              alt="Logo"
            />
            <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
              Library
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link to="/addbook">
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add Book
              </button>
            </Link>
            <button
              onClick={toggleMenu}
              className="md:hidden inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Optional: click outside to close - transparent non-blurred backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 transition-opacity duration-300"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Sidebar Panel (only this is blurred) */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-gray-700 dark:text-white hover:text-red-500 text-xl"
          >
            ✕
          </button>
        </div>
        <ul className="flex flex-col px-4 space-y-2 font-medium text-gray-800 dark:text-white">
          <li>
            <Link
              to="/"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md transition-colors duration-200 hover:bg-blue-200 dark:hover:bg-gray-700 hover:text-blue-700 dark:hover:text-blue-400"
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="block px-3 py-2 rounded-md transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-700 dark:hover:text-blue-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-3 py-2 rounded-md transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-700 dark:hover:text-blue-400"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-3 py-2 rounded-md transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-blue-700 dark:hover:text-blue-400"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
