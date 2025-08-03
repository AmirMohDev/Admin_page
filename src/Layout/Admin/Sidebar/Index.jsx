import React, { useContext, useState } from "react";
import {
  FaTachometerAlt,
  FaStream,
  FaCube,
  FaCopyright,
  FaPagelines,
  FaPalette,
  FaPercentage,
  FaShoppingBasket,
  FaLuggageCart,
  FaTruckLoading,
  FaUsers,
  FaUserTag,
  FaShieldAlt,
  FaQuestionCircle,
  FaComment,
} from "react-icons/fa";
import { AdminContext } from "../../../context/Admin_context";
import SidebarGroupTitle from "./SidebarGroupTitle/SidebarGroupTitle";
import SidebarGroupItem from "./SidebarGroupItem/SidebarGroupItem";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { lightmode } = useContext(AdminContext);

  const handleMouseEnter = () => setIsExpanded(true);
  const handleMouseLeave = () => setIsExpanded(false);

  return (
    <div
      className={`h-fit transition-all duration-500 ease-in-out
        ${isExpanded ? "w-60" : "w-16"}
        ${lightmode ? "bg-gray-100 text-gray-900 shadow-lg" : "bg-gray-900 text-gray-100 shadow-lg"}
        `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`p-4 text-center text-xl font-extrabold border-b
          ${lightmode ? "border-gray-300 text-cyan-700" : "border-gray-700 text-cyan-400"}
          `}
      >
        {isExpanded ? "پنل مدیریت" : "🧭"}
      </div>

      <div className="space-y-3 px-3 mt-4">
        <SidebarGroupItem
          targetPath="/content/dashboard"
          title="داشبورد"
          isExpanded={isExpanded}
          icon={<FaTachometerAlt />}
          lightmode={lightmode}
        />

        {isExpanded && <SidebarGroupTitle name="فروشگاه" lightmode={lightmode} />}
        <SidebarGroupItem
          targetPath="/content/category"
          title="مدیریت گروه محصول"
          isExpanded={isExpanded}
          icon={<FaStream />}
          lightmode={lightmode}
        />
        <SidebarGroupItem
          targetPath="/content/product"
          title="مدیریت محصول"
          isExpanded={isExpanded}
          icon={<FaCube />}
          lightmode={lightmode}
        />
        <SidebarGroupItem
          targetPath="/"
          title="مدیریت برندها"
          isExpanded={isExpanded}
          icon={<FaCopyright />}
          lightmode={lightmode}
        />
        <SidebarGroupItem
          targetPath="/"
          title="مدیریت کارتنی‌ها"
          isExpanded={isExpanded}
          icon={<FaPagelines />}
          lightmode={lightmode}
        />
        <SidebarGroupItem
          targetPath="/"
          title="مدیریت رنگ‌ها"
          isExpanded={isExpanded}
          icon={<FaPalette />}
          lightmode={lightmode}
        />
        <SidebarGroupItem
          targetPath="/"
          title="مدیریت تخفیف‌ها"
          isExpanded={isExpanded}
          icon={<FaPercentage />}
          lightmode={lightmode}
        />

        {isExpanded && <SidebarGroupTitle name="سفارشات و سبد" lightmode={lightmode} />}
        <SidebarGroupItem
          targetPath="/"
          title="مدیریت سبدها"
          isExpanded={isExpanded}
          icon={<FaShoppingBasket />}
          lightmode={lightmode}
        />
        <SidebarGroupItem
          targetPath="/"
          title="مدیریت سفارشات"
          isExpanded={isExpanded}
          icon={<FaLuggageCart />}
          lightmode={lightmode}
        />
        <SidebarGroupItem
          targetPath="/"
          title="مدیریت نحوه ارسال"
          isExpanded={isExpanded}
          icon={<FaTruckLoading />}
          lightmode={lightmode}
        />

        {isExpanded && <SidebarGroupTitle name="کاربران و همکارارن" lightmode={lightmode} />}
        <SidebarGroupItem
          targetPath="/"
          title="مشاهده کاربران"
          isExpanded={isExpanded}
          icon={<FaUsers />}
          lightmode={lightmode}
        />
        <SidebarGroupItem
          targetPath="/"
          title="نقش‌ها"
          isExpanded={isExpanded}
          icon={<FaUserTag />}
          lightmode={lightmode}
        />
        <SidebarGroupItem
          targetPath="/"
          title="مجوزها"
          isExpanded={isExpanded}
          icon={<FaShieldAlt />}
          lightmode={lightmode}
        />

        {isExpanded && <SidebarGroupTitle name="ارتباطات" lightmode={lightmode} />}
        <SidebarGroupItem
          targetPath="/"
          title="سوال‌ها"
          isExpanded={isExpanded}
          icon={<FaQuestionCircle />}
          lightmode={lightmode}
        />
        <SidebarGroupItem
          targetPath="/"
          title="نظرات"
          isExpanded={isExpanded}
          icon={<FaComment />}
          lightmode={lightmode}
        />
      </div>
    </div>
  );
};

export default Sidebar;
