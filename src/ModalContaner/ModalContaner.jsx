import { createPortal } from "react-dom";

const ModalContaner = ({ children, title, id, fullscreen }) => {
  return createPortal(
    <div className="absolute inset-0 z-50 flex items-center justify-center p-4">
      <form
        className={`${
          fullscreen ? "w-full max-w-4xl" : "w-full max-w-md"
        } bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 rounded-2xl shadow-xl p-6 space-y-6 animate-fadeIn`}
      >
        {/* Title */}
        {title && (
          <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-100 mb-4">
            {title}
          </h2>
        )}

        {/* Select Box */}
        <div className="mb-4">
          <label
            htmlFor={id}
            className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            دسته‌بندی والد
          </label>
          <select
            id={id}
            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-right text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <option>انتخاب دسته</option>
          </select>
        </div>

        {/* Form Content */}
        {children}

        {/* Buttons */}
        <div className="flex justify-end gap-3 pt-2 border-t border-gray-200 dark:border-gray-700">
          <button
            type="button"
            className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            انصراف
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-700 transition"
          >
            ثبت محصول
          </button>
        </div>
      </form>
    </div>,
    document.getElementById("modal_root")
  );
};

export default ModalContaner;
