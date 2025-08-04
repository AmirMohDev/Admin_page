import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import ModalContaner from "../../../ModalContaner/ModalContaner";
import { NavLink } from "react-router-dom";

const AddColor = () => {
  const [colorName, setColorName] = useState("");
  const [colorCode, setColorCode] = useState("#000000");

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <ModalContaner
       
        id="add_color_modal"
        title="افزودن رنگ جدید"
      >
        {/* نام رنگ */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            نام رنگ
          </label>
          <input
            type="text"
            value={colorName}
            onChange={(e) => setColorName(e.target.value)}
            placeholder="نام رنگ"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 
              rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* انتخاب رنگ */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            انتخاب رنگ
          </label>
          <input
            type="color"
            value={colorCode}
            onChange={(e) => setColorCode(e.target.value)}
            className="w-12 h-10 p-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 cursor-pointer"
          />
        </div>

        {/* دکمه‌ها */}
        <div className="flex items-center justify-end gap-4 mt-6">
          <button
            className="px-6 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all"
          >
            ذخیره
          </button>
          <button
            className="px-6 py-2 rounded-xl bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-400 dark:hover:bg-gray-600 transition-all"
          >
            انصراف
          </button>
        </div>

        {/* دکمه بستن */}
        <NavLink to='/content/colors'>
        <button
          className="absolute top-4 left-4 text-red-500 hover:text-red-700 text-2xl"
        >
          <FaWindowClose />
        </button>
        </NavLink>
      </ModalContaner>
    </div>
  );
};

export default AddColor;
