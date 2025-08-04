import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import { useContext } from "react";
import { AdminContext } from "../../context/Admin_context";
import WarrantyTable from "./WarrantyTable/WarrantyTable";

const Warranty = () => {
  const { lightmode } = useContext(AdminContext);

  return (
    <div
      className={`p-4 min-h-screen transition-all duration-500 ${
        lightmode ? "bg-gray-100" : "bg-[#0f172a]" // dark gray background
      }`}
    >
      <div
        className={`max-w-7xl mx-auto rounded-2xl shadow-xl border ${
          lightmode ? "bg-white border-gray-200" : "bg-[#1e293b] border-gray-700"
        }`}
      >
        {/* Header */}
        <div
          className={`p-6 border-b ${
            lightmode ? "border-gray-200" : "border-gray-600"
          } flex !flex-row-reverse sm:flex-row justify-between items-center gap-4`}
        >
          <h2
            className={`text-2xl font-semibold ${
              lightmode ? "text-gray-800" : "text-white"
            }`}
          >
            مدیریت محصولات
          </h2>
          <button className="w-fit flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white shadow transition-all duration-200">
            <FaPlus className="text-sm sm:text-base" />
            <span className="text-sm sm:text-base hidden sm:inline">افزودن محصول</span>
          </button>
        </div>

        {/* Search + Table */}
        <div className="p-6">
          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
            <input
              type="text"
              placeholder="قسمتی از عنوان را وارد کنید"
              className={`border rounded px-3 py-2 w-full sm:max-w-xs ${
                lightmode
                  ? "border-gray-300 bg-white text-gray-800"
                  : "border-gray-600 bg-[#334155] text-white placeholder:text-gray-300"
              }`}
            />
            <button className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-xl shadow">
              جستجو
            </button>
          </div>

          {/* Table */}
<WarrantyTable/>
        </div>
      </div>
    </div>
  );
};

export default Warranty;