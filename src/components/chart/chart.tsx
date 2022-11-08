import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { options } from "./config/config";
import { LineChartType } from "./type";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function LineChart({ datasets, xAxisLabels }: LineChartType) {
  const data = {
    labels: xAxisLabels,
    datasets: datasets,
  };

  return <Line options={options} data={data} />;
}
