import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../../context/Admin_context";

const RightContent = () => {
  const {setlightmode,lightmode} = useContext(AdminContext);

  return (
    <div className={` py-1 h-fit flex items-center ${lightmode ? 'bg-[#cecbcb]' : 'bg-gray-900'}`}>
      <div className="hidden md:block mx-4">
        <label
          htmlFor="handle_toggle_sidemenu"
          className="inline-flex items-center cursor-pointer"
        >
          <input
          onChange={(e)=>setlightmode(e.target.checked)}
            id="handle_toggle_sidemenu"
            type="checkbox"
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:bg-blue-600 transition-all duration-300 relative">
            <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-full"></span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default RightContent;
