import { useContext } from "react";
import {
  FaEdit,
  FaPlus,
  FaSitemap,
  FaTrash,
  FaWindowClose,
} from "react-icons/fa";
import { AdminContext } from "../../context/Admin_context";
import CategoryTable from "./CategoryTable/CategoryTable";
// import ModalContaner from "../../ModalContaner/ModalContaner";
import AddCategory from "./AddCategory/AddCategory";
import { NavLink } from "react-router-dom";

const Category = () => {
  const { lightmode } = useContext(AdminContext);

  return (
    <div
      className={`p-4 min-h-screen transition-all duration-500 ${
        lightmode ? "bg-gray-50" : "bg-[#0c111d]"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto rounded-2xl shadow-xl border ${
          lightmode
            ? "bg-white border-gray-200"
            : "bg-[#1f2937] border-gray-700"
        }`}
      >
        {/* Header */}
        <div
          className={`p-6 border-b ${
            lightmode ? "border-gray-200" : "border-gray-600"
          } flex !flex-row-reverse sm:flex-row justify-between items-center gap-4`}
        >
          <h2
            className={`text-2xl  font-semibold ${
              lightmode ? "text-gray-800" : "text-white"
            }`}
          >
            مدیریت دسته‌بندی محصولات
          </h2>
          <NavLink to="/content/category/addcategory">
            <div className="w-fit flex items-center gap-2 px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white shadow transition-all duration-200">
              <FaPlus className="text-sm sm:text-base" />
              <span className="text-sm sm:text-base hidden sm:inline">
                افزودن دسته
              </span>
            </div>
          </NavLink>
        </div>

        {/* Table or Content */}
        <div className="p-6">
          <CategoryTable />
        </div>
        {/* <AddCategory/> */}
      </div>
    </div>
  );
};

export default Category;
