import { useContext } from "react";
import { FaEdit, FaPlus, FaSitemap, FaTrash, FaWindowClose } from "react-icons/fa";
import { AdminContext } from "../../context/Admin_context";
import CategoryTable from "./CategoryTable/CategoryTable";
// import ModalContaner from "../../ModalContaner/ModalContaner";
import AddCategory from "./AddCategory/AddCategory";

const Category = () => {
  const { lightmode } = useContext(AdminContext);

  return (
    <div className={`p-4 min-h-screen transition-all duration-500 ${lightmode ? "bg-gray-50" : "bg-[#0c111d]"}`}>
      <div className={`max-w-7xl mx-auto rounded-2xl shadow-xl border ${lightmode ? "bg-white border-gray-200" : "bg-[#1f2937] border-gray-700"}`}>
        
        {/* Header */}
        <div className={`p-6 border-b ${lightmode ? "border-gray-200" : "border-gray-600"} flex flex-col sm:flex-row justify-between items-center gap-4`}>
          <h2 className={`text-2xl font-semibold ${lightmode ? "text-gray-800" : "text-white"}`}>
            مدیریت دسته‌بندی محصولات
          </h2>
          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl shadow-sm transition">
            <FaPlus />
            <span className="hidden sm:inline">افزودن دسته</span>
          </button>
        </div>

        {/* Table or Content */}
        <div className="p-6">
          <CategoryTable />
        </div>

      </div>
    </div>
  );
};

export default Category;
