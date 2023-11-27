import React from "react";
import { FaSearch } from "react-icons/fa";
import userPicture from "../assets/react.svg";

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-slate-300 ">
      <h1 className="text-4xl font-bold text-neutral-100">
        State<span className="text-green-600">Agency</span>
      </h1>

      <div className="flex justify-between items-center bg-slate-200 p-1 px-3 rounded-md w-64 ">
        <input type="search" placeholder="Search" className="bg-slate-200 p-1 rounded-md w-64 outline-none"/>
        <FaSearch />
      </div>

      <ul className="flex justify-between items-center gap-5  bg-slate-200 p-1 px-3 rounded-md">
        <li className="font-light hover:font-normal cursor-pointer">Home</li>
        <li className="font-light hover:font-normal cursor-pointer">About</li>
        <li className="bg-white rounded-full p-1">
          <img src={userPicture} />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
