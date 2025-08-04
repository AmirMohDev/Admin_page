import { FaWindowClose } from "react-icons/fa";
import ModalContaner from "../../../ModalContaner/ModalContaner";
import { NavLink } from "react-router-dom";

const AddProduct = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      <ModalContaner
        fullscreen={true}
        id="add_product_modal"
        title="افزودن محصول جدید"
      >
        {/* عنوان محصول */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            عنوان محصول
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 
              rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* وزن */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            وزن (کیلوگرم)
          </label>
          <input
            type="number"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 
              rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* برند */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            نام برند
          </label>
          <input
            type="text"
            placeholder="قسمتی از نام برند را وارد کنید"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 
              rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* رنگ */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            نام رنگ
          </label>
          <input
            type="text"
            placeholder="قسمتی از نام رنگ را وارد کنید"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 
              rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* گارانتی */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            نام گارانتی
          </label>
          <input
            type="text"
            placeholder="قسمتی از نام گارانتی را وارد کنید"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 
              rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>

        {/* توضیحات */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
            توضیحات
          </label>
          <textarea
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 
              bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 
              rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>
        </div>
        <NavLink to='/content/product'>
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

export default AddProduct;
