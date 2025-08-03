import React, { useContext } from "react";
import { FaTachometerAlt } from "react-icons/fa";
import {
  FaGripVertical,
  FaBell,
  FaMagnifyingGlass,
  FaPaperPlane,
  FaEnvelope,
  FaPowerOff,
} from "react-icons/fa6";
import { AdminContext } from "../../../context/Admin_context";

const LeftContent = () => {
  const { lightmode } = useContext(AdminContext);
  return (
    <div className="flex flex-row-reverse items-center space-x-reverse space-x-4 relative text-white">
      <div className="relative ">
        
        <FaGripVertical className="text-2xl cursor-pointer peer" />

        <ul className="absolute top-full right-0 mt-2 w-40 bg-white text-gray-700 shadow-lg rounded-md opacity-0 peer-hover:opacity-100 transition-all duration-500 z-10">
          <li className="py-2 border-b text-center text-sm">قاسم بساکی</li>
          <li className="py-2 px-3 flex items-center hover:bg-gray-100 cursor-pointer text-sm">
            <FaTachometerAlt className="ml-2" />
            <a href="#">داشبورد</a>
          </li>
          <li className="py-2 px-3 flex items-center hover:bg-gray-100 cursor-pointer text-sm">
            <FaPaperPlane className="ml-2" />
            <a href="#">تیکت ها</a>
          </li>
          <li className="py-2 px-3 flex items-center hover:bg-gray-100 cursor-pointer text-sm">
            <FaEnvelope className="ml-2" />
            <a href="#">پیام ها</a>
          </li>
          <li className="border-t"></li>
          <li className="py-2 px-3 flex items-center hover:bg-gray-100 cursor-pointer text-sm">
            <FaPowerOff className="ml-2" />
            <a href="#">خروج</a>
          </li>
        </ul>
      </div>

      <div className="relative">
        <FaBell className="text-2xl cursor-pointer" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          4
        </span>
      </div>

      <FaMagnifyingGlass className="text-2xl cursor-pointer" />
    </div>
  );
};

export default LeftContent;
