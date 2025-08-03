import { createPortal } from "react-dom";

const ModalContaner = ({ children, title, id, fullscreen }) => {
  return createPortal(
    <>

      {/* Modal */}
      <div className="absolute h-fit inset-0 z-50 flex items-center justify-center p-4 bg-white">
        <form
          className={`${
            fullscreen ? "w-full max-w-4xl" : "w-full max-w-md"
          } bg-white rounded-2xl shadow-xl p-6 space-y-6 animate-fadeIn`}
        >
          {/* Title */}
          {title && (
            <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
              {title}
            </h2>
          )}

          {/* Select Box */}
          <div className="mb-4">
            <label htmlFor={id} className="block mb-1 text-sm font-medium text-gray-700">
              دسته‌بندی والد
            </label>
            <select
              id={id}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-right focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option>انتخاب دسته</option>
              {/* Add options dynamically if needed */}
            </select>
          </div>

          {/* Form Content */}
          {children}

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-2 border-t border-gray-200">
            <button
              type="button"
              className="px-4 py-2 rounded-lg text-gray-700 bg-gray-200 hover:bg-gray-300 transition"
            >
              انصراف
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              ثبت محصول
            </button>
          </div>
        </form>
      </div>
    </>,
    document.getElementById("modal_root")
  );
};

export default ModalContaner;
