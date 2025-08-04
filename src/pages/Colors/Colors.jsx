import { FaPlus, FaTrash } from "react-icons/fa";
import ColorTable from "./ColorTable/ColorTable";
import { NavLink } from "react-router-dom";

const Colors = () => {
    return ( <>
    <div className="min-h-screen bg-white dark:bg-gray-900 p-6 text-right font-iransans">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex justify-between flex-row-reverse items-center mb-6 ">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">مدیریت رنگ‌ها</h1>

          <NavLink to='/content/colors/addcolors'>
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-md flex items-center gap-2">
            <FaPlus />
            افزودن رنگ
          </button>

          </NavLink>
        </div>

        {/* Search Box */}
        <div className="flex justify-end mb-4">
          <input
            type="text"
            placeholder="قسمتی از عنوان را وارد کنید"
            className="border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-l-md w-72 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none"
          />
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-r-md">
            جستجو
          </button>
        </div>

        <ColorTable/>
      </div>
    </div>
    </> );
}
 
export default Colors;