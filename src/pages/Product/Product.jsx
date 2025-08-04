import { useContext } from "react";
import { FaEdit, FaTrash, FaPlus, FaSitemap } from "react-icons/fa";
import { AdminContext } from "../../context/Admin_context";
import AddProduct from "./AddProduct/AddProduct";
import PaginatedTable from "../../components/PaginatedTable/PaginatedTable";
import { NavLink } from "react-router-dom";

const Product = () => {
  const { lightmode } = useContext(AdminContext);
  const data = [
    {
      id: "1",
      category: "aaa",
      title: "bbb",
      price: "1111",
      stock: "5",
      like_count: "2",
      status: "1",
    },
    {
      id: "2",
      category: "ccc",
      title: "ddd",
      price: "2222",
      stock: "7",
      like_count: "2",
      status: "1",
    },
    {
      id: "3",
      category: "ccc",
      title: "ddd",
      price: "2222",
      stock: "7",
      like_count: "2",
      status: "1",
    },
    {
      id: "4",
      category: "ccc",
      title: "ddd",
      price: "2222",
      stock: "7",
      like_count: "2",
      status: "1",
    },
  ];

  const dataInfo = [
    { field: "id", title: "#" },
    { field: "title", title: "عنوان محصول" },
    { field: "price", title: "قیمت محصول" },
  ];
  const searchParams = {
    placeholder: "قسمتی از عنوان را وارد کنید",
    title: "جستجو",
    searchField: "title",
  };
  const additionalElement = () => {
    return (
      <div className="flex justify-center gap-2">
        <button
          className={`p-2 rounded hover:scale-105 transition duration-200
            ${
              lightmode
                ? "text-red-600 hover:text-red-800"
                : "text-red-400 hover:text-red-600"
            }`}
        >
          <FaTrash />
        </button>
        <button
          className={`p-2 rounded hover:scale-105 transition duration-200
            ${
              lightmode
                ? "text-green-600 hover:text-green-800"
                : "text-green-400 hover:text-green-600"
            }`}
        >
          <FaPlus />
        </button>
        <button
          className={`p-2 rounded hover:scale-105 transition duration-200
            ${
              lightmode
                ? "text-yellow-600 hover:text-yellow-800"
                : "text-yellow-400 hover:text-yellow-600"
            }`}
        >
          <FaEdit />
        </button>
        <button
          className={`p-2 rounded hover:scale-105 transition duration-200
            ${
              lightmode
                ? "text-blue-600 hover:text-blue-800"
                : "text-blue-400 hover:text-blue-600"
            }`}
        >
          <FaSitemap />
        </button>
      </div>
    );
  };
  const additionalField = {
    title: "عملیات",
    elements: (itemId) => additionalElement(itemId),
  };

  return (
    <>
      <div
        className={`p-6 min-h-screen transition-colors duration-500 ${
          lightmode ? "bg-gray-50" : "bg-[#0c111d]"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto rounded-2xl shadow-lg overflow-hidden ${
            lightmode ? "bg-white" : "bg-[#1a202c]"
          }`}
        >
          {/* Header */}
          <div
            className="p-6 border-b border-gray-300 dark:border-gray-700 flex !flex-row-reverse sm:flex-row
          items-start sm:items-center justify-between gap-4"
          >
            <h2
               className={`text-2xl  font-semibold ${lightmode ? "text-gray-800" : "text-white"}`}
            >
              مدیریت محصولات
            </h2>
            <NavLink to='/content/product/addproduct'>
            <button
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700
             text-white px-5 py-2 rounded-xl shadow-md transition"
              aria-label="افزودن محصول جدید"
            >
              <FaPlus />
              <span className="hidden sm:inline">افزودن محصول</span>
            </button>

            </NavLink>
          </div>


          {/* Table */}
          <div className="p-6 overflow-x-auto">
            <PaginatedTable
              searchParams={searchParams}
              data={data}
              dataInfo={dataInfo}
              additionalField={additionalField}
              numOfPage={2}
            />
          </div>
        </div>

        {/* Pagination */}
        <div
          className={`p-4 flex justify-center border-t mt-6 transition-colors duration-300 ${
            lightmode
              ? "border-gray-300 bg-white"
              : "border-gray-700 bg-[#0c111d]"
          }`}
        ></div>

        {/* Add Product Modal */}
        {/* <AddProduct /> */}
      </div>
    </>
  );
};

export default Product;
