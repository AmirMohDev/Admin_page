import { Chart } from "chart.js/auto";

let chartInstance = null;

const dashboardChart = (ctx, labels, datapoints, lightmode) => {
  if (chartInstance) {
    chartInstance.destroy();
  }

  const gridColor = lightmode ? "#e2e8f0" : "#374151"; 
  const textColor = lightmode ? "#0c4a6e" : "#60a5fa"; 
  const backgroundColor = lightmode ? "rgba(6, 182, 212, 0.1)" : "rgba(6, 182, 212, 0.3)";

  const data = {
    labels,
    datasets: [
      {
        label: "فروش ماه",
        data: datapoints,
        borderColor: "#06b6d4", 
        backgroundColor: backgroundColor,
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const config = {
    type: "line",
    data,
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "نمودار فروش یک سال گذشته",
          color: textColor,
          font: { size: 18, weight: "bold" },
        },
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      interaction: {
        intersect: false,
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "ماه‌های سال",
            color: textColor,
          },
          ticks: {
            color: textColor,
          },
          grid: {
            color: gridColor,
          },
        },
        y: {
          title: {
            display: true,
            text: "میزان فروش",
            color: textColor,
          },
          ticks: {
            color: textColor,
          },
          grid: {
            color: gridColor,
          },
          beginAtZero: true,
        },
      },
    },
  };

  chartInstance = new Chart(ctx, config);
};

export default dashboardChart;
