import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../context/Admin_context";

const PaginatedTable = ({ data, dataInfo, additionalField, searchParams, numOfPage }) => {
  const { lightmode } = useContext(AdminContext);
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState([]);
  const [initData, setInitData] = useState([data]);
  const [searchbar, setSearchbar] = useState('');
  const [searchButton, setSearchButton] = useState('');

  useEffect(() => {
    const pcount = Math.ceil(initData.length / numOfPage);
    let pArr = [];
    for (let i = 1; i <= pcount; i++) pArr.push(i);
    setPages(pArr);
  }, [initData]);

  useEffect(() => {
    const start = (currentPage - 1) * numOfPage;
    const end = start + numOfPage;
    setTableData(initData.slice(start, end));
  }, [currentPage, initData]);

  useEffect(() => {
    setInitData(data.filter(d => d[searchParams.searchField].includes(searchButton)));
    setCurrentPage(1);
  }, [searchButton]);

  return (
    <div className={`p-4 ${lightmode ? "bg-[#f0fdfa]" : "bg-[#1e293b]"} rounded-xl`}>
      {/* Search bar */}
      <div className="mb-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <input
          type="text"
          placeholder={searchParams.placeholder}
          className={`w-full sm:w-64 px-4 py-2 rounded-xl border 
            ${lightmode
              ? "bg-white border-cyan-300 text-slate-900 placeholder-slate-400"
              : "bg-slate-800 border-cyan-700 text-white placeholder-slate-400"}
            focus:outline-none focus:ring-2 focus:ring-cyan-500 shadow-sm`}
          onChange={(e) => setSearchbar(e.target.value)}
        />
        <button
          onClick={() => setSearchButton(searchbar)}
          className="px-5 py-2 rounded-xl font-semibold text-white transition-all duration-200
            bg-cyan-600 hover:bg-cyan-700 shadow-md"
        >
          {searchParams.title}
        </button>
      </div>

      {/* Table */}
      <div className={`overflow-x-auto rounded-xl border ${lightmode ? "border-cyan-200" : "border-cyan-800"}`}>
        <table className="min-w-full text-sm sm:text-base text-center">
          <thead className={`${lightmode ? "bg-cyan-100 text-slate-800" : "bg-slate-800 text-slate-100"}`}>
            <tr>
              {dataInfo.map((i) => (
                <th key={i.field} className="px-4 py-3 border-b border-cyan-300 font-semibold">
                  {i.title}
                </th>
              ))}
              {additionalField && (
                <th className="px-4 py-3 border-b border-cyan-300 font-semibold">
                  {additionalField.title}
                </th>
              )}
            </tr>
          </thead>
          <tbody className={`${lightmode ? "bg-cyan-100 text-slate-800" : "bg-slate-800 text-slate-100"}`}>
            {tableData.map((d, idx) => (
              <tr
                key={d.id}
                className={`transition duration-200 ${
                  idx % 2 === 0
                    ? lightmode
                      ? "bg-white"
                      : "bg-slate-900"
                    : lightmode
                    ? "bg-cyan-50"
                    : "bg-slate-800"
                }`}
              >
                {dataInfo.map((i) => (
                  <td key={`${i.field}_${d.id}`} className="px-4 py-3 border-t border-cyan-200">
                    {d[i.field]}
                  </td>
                ))}
                {additionalField && (
                  <td className="px-4 py-3 border-t border-cyan-200">
                    {additionalField.elements(d.id)}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pages.length > 1 && (
        <div className="mt-6 flex justify-center items-center gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className={`px-3 py-2 rounded-lg font-medium transition-all ${
              lightmode
                ? "bg-cyan-100 hover:bg-cyan-200 text-slate-900"
                : "bg-slate-700 hover:bg-slate-600 text-white"
            } disabled:opacity-50`}
          >
            «
          </button>

          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                currentPage === page
                  ? "bg-cyan-600 text-white"
                  : lightmode
                  ? "bg-cyan-50 hover:bg-cyan-100 text-slate-800"
                  : "bg-slate-700 hover:bg-slate-600 text-white"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            disabled={currentPage === pages.length}
            onClick={() => setCurrentPage(currentPage + 1)}
            className={`px-3 py-2 rounded-lg font-medium transition-all ${
              lightmode
                ? "bg-cyan-100 hover:bg-cyan-200 text-slate-900"
                : "bg-slate-700 hover:bg-slate-600 text-white"
            } disabled:opacity-50`}
          >
            »
          </button>
        </div>
      )}
    </div>
  );
};

export default PaginatedTable;
