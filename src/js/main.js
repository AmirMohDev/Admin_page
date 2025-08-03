import { Chart, Interaction, plugins } from "chart.js";

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
  "اسفند"
];

const datapoints = [0, 20, 20, 60, 60, 120, 180, 120, 125, 105, 110, 170];

const data = {
  labels: labels,
  datasets: [
    {
      label: "فروش ماه",
      data: datapoints,
      borderColor: "#0062ff",
      fill: true,
      tension: 0.4
    }
  ]
};

const config = {
  type: "line",
  data: data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "نمودار فروش یک سال گذشته"
      }
    },
    interaction: {
      intersect: false
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "ماه‌های سال"
        }
      },
      y: {
        title: {
          display: true,
          text: "میزان فروش"
        },
        beginAtZero: true
      }
    }
  }
};
const ctx =document.getElementById('myCahrt').getContext('2d')
new Chart(config,ctx)