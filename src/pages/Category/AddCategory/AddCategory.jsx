import { useContext, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { AdminContext } from "../../../context/Admin_context";
import ModalContaner from "../../../ModalContaner/ModalContaner";
import { NavLink } from "react-router-dom";

const AddCategory = () => {
  const { setcategorymodal } = useContext(AdminContext);
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <ModalContaner
        id="add_category_modal"
        fullscreen={true}
        title="افزودن دسته محصولات"
      >
        {/* دسته والد */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            دسته والد
          </label>
          <input
            type="text"
            placeholder="بدون والد"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* عنوان دسته */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            عنوان دسته
          </label>
          <input
            type="text"
            placeholder="عنوان دسته"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* توضیحات */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            توضیحات
          </label>
          <textarea
            placeholder="توضیحات"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl h-28 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>
        </div>

        {/* تصویر */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            تصویر
          </label>
          <input
            type="file"
            className="w-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl px-4 py-2"
          />
        </div>

        {/* وضعیت */}
        <div className="flex items-center gap-2 mb-6">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
            وضعیت فعال
          </label>
          <input
            type="checkbox"
            checked={isActive}
            onChange={() => setIsActive(!isActive)}
            className="w-5 h-5 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500"
          />
        </div>

        {/* دکمه بستن */}
        <NavLink to='/content/category'>
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

export default AddCategory;
