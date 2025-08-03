import { useContext } from "react";
import { FaEdit, FaPlus, FaSitemap, FaTrash } from "react-icons/fa";
import PaginatedTable from "../../../components/PaginatedTable/PaginatedTable";
import { AdminContext } from "../../../context/Admin_context";

const CategoryTable = () => {
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
    <div
      className={`overflow-x-auto p-4 rounded-lg shadow-md ${
        lightmode ? "bg-white" : "bg-gray-900"
      }`}
    >
      <PaginatedTable
        searchParams={searchParams}
        data={data}
        dataInfo={dataInfo}
        additionalField={additionalField}
        numOfPage={2}
      />
    </div>
  );
};

export default CategoryTable;
