import {FaTrash } from "react-icons/fa";

const ColorTable = () => {
  return (
    <>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="w-full text-sm text-right border border-gray-200 dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            <tr>
              <th className="py-3 px-4 border-b">ردیف</th>
              <th className="py-3 px-4 border-b">نام رنگ</th>
              <th className="py-3 px-4 border-b">کد رنگ</th>
              <th className="py-3 px-4 border-b">نمایش</th>
              <th className="py-3 px-4 border-b">عملیات</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 dark:text-gray-100">
            <tr className="border-b border-gray-200 dark:border-gray-700 text-center">
              <td className="py-2 px-4">1</td>
              <td className="py-2 px-4">مشکی</td>
              <td className="py-2 px-4">#000000</td>
              <td className="py-2 px-4">
                <span className="inline-block w-6 h-6 rounded-full bg-black border"></span>
              </td>
              <td className="py-2 px-4">
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded flex items-center gap-1 mx-auto">
                  <FaTrash />
                  حذف
                </button>
              </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-gray-700 text-center">
              <td className="py-2 px-4">2</td>
              <td className="py-2 px-4">قرمز</td>
              <td className="py-2 px-4">#f52c1d</td>
              <td className="py-2 px-4">
                <span className="inline-block w-6 h-6 rounded-full bg-[#f52c1d] border"></span>
              </td>
              <td className="py-2 px-4">
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded flex items-center gap-1 mx-auto">
                  <FaTrash />
                  حذف
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ColorTable;
