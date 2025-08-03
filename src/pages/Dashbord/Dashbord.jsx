import React, { useEffect, useRef, useContext } from "react";
import dashboardChart from "../../utils/dashboardchart";
import Card from "./Card/Card";
import { AdminContext } from "../../context/Admin_context";

const Dashboard = () => {
  const chartRef = useRef(null);
  const { lightmode } = useContext(AdminContext);

  useEffect(() => {
    const labels = [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ];
    const datapoints = [0, 20, 20, 60, 60, 120, 180, 120, 125, 105, 110, 170];
    if (chartRef.current) {
      dashboardChart(chartRef.current.getContext("2d"), labels, datapoints, lightmode);
    }
  }, [lightmode]);

  return (
    <div className={`${lightmode ? "bg-gray-50 text-gray-900" : "bg-gray-900 text-gray-100"} p-6 min-h-screen`} dir="rtl">
      {/* کارت‌ها */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card
          currentValue={"۱,۵۰۰,۰۰۰"}
          title={"درآمد امروز"}
          des={"۶,۸۰۰,۰۰۰ در هفته گذشته"}
          color1={"from-cyan-500"}
          color2={"to-indigo-600"}
          colortext={"text-cyan-100"}
        />
        <Card
          currentValue={"۴۵"}
          title={"سفارشات امروز"}
          des={"۲۶۳ در هفته گذشته"}
          color1={"from-green-400"}
          color2={"to-green-600"}
          colortext={"text-green-100"}
        />
        <Card
          currentValue={"۵"}
          title={"سفارشات مانده امروز"}
          des={"۹ در هفته گذشته"}
          color1={"from-red-400"}
          color2={"to-red-600"}
          colortext={"text-red-100"}
        />
        <Card
          currentValue={"۷"}
          title={"سبد خرید امروز"}
          des={"۱۳ در هفته گذشته"}
          color1={"from-yellow-400"}
          color2={"to-yellow-600"}
          colortext={"text-yellow-100"}
        />
      </div>

      {/* نمودار فروش */}
      <div
        className={`rounded-xl p-6 mb-8 shadow-lg ${
          lightmode ? "bg-white" : "bg-gray-800"
        }`}
      >
        <canvas ref={chartRef}></canvas>
      </div>

      {/* جدول محصولات */}
      <div
        className={`rounded-xl p-6 shadow-lg overflow-x-auto ${
          lightmode ? "bg-white" : "bg-gray-800"
        }`}
      >
        <p className="font-bold mb-4 text-cyan-600 dark:text-cyan-400 text-lg">محصولات در حال اتمام</p>
        <table className="table-auto w-full border-collapse text-sm">
          <thead>
            <tr className={`${lightmode ? "bg-cyan-100 text-cyan-900" : "bg-cyan-900 text-cyan-100"}`}>
              <th className="p-3 border border-cyan-300">#</th>
              <th className="p-3 border border-cyan-300">دسته</th>
              <th className="p-3 border border-cyan-300">عنوان</th>
              <th className="p-3 border border-cyan-300">وضعیت</th>
              <th className="p-3 border border-cyan-300">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((i) => (
              <tr
                key={i}
                className={`${i % 2 === 0 ? (lightmode ? "bg-cyan-50" : "bg-gray-700") : ""} text-center`}
              >
                <td className="p-2 border border-cyan-300">{i}</td>
                <td className="p-2 border border-cyan-300">دسته شماره فلان</td>
                <td className="p-2 border border-cyan-300">محصول فلان</td>
                <td className="p-2 border border-cyan-300 font-semibold text-red-500">
                  {i === 2 || i === 5 ? `رو به اتمام - ${7 - i}` : "پایان یافته"}
                </td>
                <td className="p-2 border border-cyan-300 text-red-500 font-bold cursor-pointer hover:text-red-700 transition-colors">
                  ✖
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
