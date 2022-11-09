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
import "./chart.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function LineChart({
  datasets,
  xAxisLabels,
  title,
  time,
  filter=[],
}: LineChartType) {
  const data = {
    labels: xAxisLabels,
    datasets: datasets,
  };
  return (
    <div
      className={`myChart ${(title || time || filter.length>0) && "myChart_padding-30"}`}
    >
      {(title || time) && (
        <div className="myChart-info">
          {title && (
            <div className="myChart-info-title">
              {title.split(" ")?.map((item,index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          )}
          {time && <p className="myChart-info-time">{time}</p>}
        </div>
      )}
      <Line options={options} data={data} />

      {
        filter?.length >0  && 
        <div className="myChart-filter">
            {filter.map((item)=>(
              <div key={item.type} onClick={item.onClick} className={`myChart-filter-item ${item.isActive?"myChart-filter-item-active":''}`}>
                {item.label}
              </div>
            ))}
        </div>
      }
    </div>
  );
}
