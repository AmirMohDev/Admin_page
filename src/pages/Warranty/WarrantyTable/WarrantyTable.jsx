import { useContext } from "react";
import { AdminContext } from "../../../context/Admin_context";
import { FaEdit, FaTrash } from "react-icons/fa";

const WarrantyTable = () => {
    const { lightmode } = useContext(AdminContext);
  
    return ( <>
              {/* Table */}
              <div className="overflow-x-auto rounded-lg">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr
                  className={`text-sm ${
                    lightmode ? "bg-gray-100 text-gray-700" : "bg-[#1e293b] text-cyan-400"
                  }`}
                >
                  <th className="p-3 border">#</th>
                  <th className="p-3 border">عنوان محصول</th>
                  <th className="p-3 border">قیمت محصول</th>
                  <th className="p-3 border">عملیات</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2].map((id) => (
                  <tr
                    key={id}
                    className={`text-sm ${
                      lightmode
                        ? "bg-white hover:bg-gray-50"
                        : "bg-[#273549] hover:bg-[#334155]"
                    }`}
                  >
                    <td className="p-3 border">{id}</td>
                    <td className="p-3 border">{id === 1 ? "bbb" : "ddd"}</td>
                    <td className="p-3 border">{id === 1 ? "1111" : "2222"}</td>
                    <td className="p-3 border flex justify-end gap-2">
                      <button className="text-cyan-400 hover:text-cyan-300 transition">
                        <FaEdit />
                      </button>
                      <button className="text-red-500 hover:text-red-400 transition">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-end mt-6 gap-2 rtl:space-x-reverse">
            <button className="px-3 py-1 border rounded hover:bg-cyan-100 dark:hover:bg-cyan-800 text-cyan-700 dark:text-cyan-300 transition">
              قبلی
            </button>
            <button className="px-3 py-1 border rounded hover:bg-cyan-100 dark:hover:bg-cyan-800 text-cyan-700 dark:text-cyan-300 transition">
              بعدی
            </button>
          </div>

    </> );
}
 
export default WarrantyTable;