import React from "react";
import { FaRegUser } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import Logo from "../../assets/LOGO.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 lg:px-12 cream font-inter">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>PROPERTIES</a>
            </li>
            <li>
              <a>MY DASHBOARD/ACTIVITY</a>
            </li>
            <li>
              <a>LIST YOUR PROPERTY</a>
            </li>
            <li>
              <a>CONTACT US</a>
            </li>
            <li>
              <a>MORE</a>
            </li>
          </ul>
        </div>
        <a className="text-xl ">
          <img className="w-[80%]" src={Logo} alt="logo"></img>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex  ">
        <ul className="menu text-black menu-horizontal items-end px-1 font-bold  ">
          <li>
            <a>PROPERTIES</a>
          </li>
          <li>
            <a>MY DASHBOARD/ACTIVITY</a>
          </li>
          <li>
            <a>LIST YOUR PROPERTY</a>
          </li>
          <li>
            <a>CONTACT US</a>
          </li>
          <li>
            <a>MORE</a>
          </li>
        </ul>
        <h1 className="font-extrabold text-2xl">|</h1>
      </div>
      <div className="navbar-end lg:w-[10%] ">
        <ul className="flex justify-center items-center gap-7 text-xl text-black">
          <li>
            <IoLanguage />
          </li>
          <li>
            <FaRegUser />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
