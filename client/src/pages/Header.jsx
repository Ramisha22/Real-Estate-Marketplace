import React from "react";
import logo from "../assets/logo.png"; // Assuming 'logo.png' is the image file
import {FaSearch} from 'react-icons/fa';
export default function Header() {
  return (
    <div className="max-w-full flex flex-wrap bg-[#f4e1bf] justify-between">
      <span className="m-3 flex flex-wrap">
        <img className="max-w-20 max-h-10 h-auto" src={logo} alt="Logo" />
      </span>
      <form className="flex rounded-xl  m-3 h-8 items-center"> 
      <input type="text" placeholder="Search..." className="border h-8 pl-2 focus:outline-none bg-[#feebc9] rounded-xl m-3   border-[#543833]" />
      <FaSearch className="text-[#543833]"/>
      </form>
    </div>
  );
}
