import React from "react";
import logo from "../assets/logo.png"; // Assuming 'logo.png' is the image file
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="max-w-full flex flex-wrap bg-[#f4e1bf]  justify-between">
      <Link to="/">
        <span className="m-3 flex flex-wrap">
          <img className="max-w-20 max-h-10 h-auto" src={logo} alt="Logo" />
        </span>
      </Link>

      <div className="max-w-full flex  mr-3 flex-wrap">
        <form className="flex rounded-xl w-32 sm:w-64 m-3 h-8 items-center">
          <input
            type="text"
            placeholder="Search..."
            className=" w-full border h-8 pl-2 focus:outline-none bg-[#feebc9] rounded-xl m-3 placeholder-[#543833]  border-[#543833]"
          />
          <FaSearch className="text-[#543833]" />
        </form>
        <ul className="flex m-3 mt-4 gap-11">
          <Link to="/">
            <li className="font-mono hidden  text-[#543833] hover:text-[#a08c79]  md:inline">
              Home
            </li>
          </Link>
          <Link to="/About">
            <li className="font-mono hidden  text-[#543833] hover:text-[#a08c79] md:inline">
              About
            </li>
          </Link>
          <Link to="LogIn">
            <li className="font-mono hidden text-[#543833] hover:text-[#a08c79]  md:inline">
              LogIn
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
