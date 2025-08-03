import React, { useContext } from "react";
import RightContent from "./Rightcontent";
import LeftContent from "./Leftcontent";
import { AdminContext } from "../../../context/Admin_context";
import Category from "../../../pages/Category/Category";

const Index = () => {
    const { lightmode } = useContext(AdminContext);
  
  return (
    <header className={`w-full flex items-center justify-between h-16 px-4    ${lightmode ? 'bg-[#c7cad0] text-white' : 'bg-gray-900 text-white'} transition-all duration-500`}>

      <RightContent />
      <LeftContent />
  
    </header>
  );
};

export default Index;
