import React, { useEffect, useState } from "react";
import { getImageSrc } from "../../common/common";
import "./home.scss";
import { LineChart } from "../../components/chart/chart";
import { LineChartType } from "../../components/chart/type";
import Component_hex from "../../components/component_hex/component_hex";
import { HexComponentProps } from "../../components/component_hex/types";

export function Home(props: any) {
  const [lineChartData, setLineChartData] = useState<LineChartType>({
    datasets: [],
    xAxisLabels: [],
  });

  const [componentHex, setComponentHex] = useState<HexComponentProps[]>([]);

  useEffect(() => {
    setLineChartData({
      xAxisLabels: [
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
      ],
      datasets: [
        {
          data: [100, 90, 80, 70, 60, 50, 100, 90, 80, 70, 60, 50],
          borderColor: "#FFCC21",
          backgroundColor: "#FFCC21",
        },
        {
          data: [100, 80, 70, 90, 20, 30, 40, 60, 80, 20, 10, 90],
          borderColor: "#8FE9D0",
          backgroundColor: "#8FE9D0",
        },
      ],
    });

    setComponentHex([
      {
        icon: { name: "knife" },
        text: "Morning",
      },
      {
        icon: { name: "knife" },
        text: "Lunch",
      },
      {
        icon: { name: "knife" },
        text: "Dinner",
      },
      {
        icon: { name: "cup" },
        text: "Snack",
      },
    ]);
  }, []);

  return (
    <div className="home">
      <div className="home-thumnail">
        <div className="home-thumnail-date">
          <img src={getImageSrc("d01")} />
        </div>
        <div className="home-thumnail-body_weight">
          <LineChart
            datasets={lineChartData.datasets}
            xAxisLabels={lineChartData.xAxisLabels}
          />
        </div>
      </div>
      <div className="home-container">
        <div className="home-transit">
          {
            componentHex?.map((item)=>(
              <Component_hex
              icon={item.icon}
              text={item.text}
            />
            ))
          }
        
        </div>
        <div className="home-meal_history"></div>
      </div>
    </div>
  );
}
