import React, { useEffect, useState } from "react";
import { getImageSrc } from "../../common/common";
import "./home.scss";
import { LineChart } from "../../components/chart/chart";
import { LineChartType } from "../../components/chart/type";
import Component_hex from "../../components/component_hex/component_hex";
import { HexComponentProps } from "../../components/component_hex/types";
import { InfoCardType, MealType } from "../../components/info_card/types";
import { ButtonShowMore } from "../../components/button_show_more/button_show_more";
import Info_card from "../../components/info_card/info_card";

export function Home(props: any) {
  const [lineChartData, setLineChartData] = useState<LineChartType>({
    datasets: [],
    xAxisLabels: [],
  });

  const [componentHex, setComponentHex] = useState<HexComponentProps[]>([]);
  const [mealHistory, setMealHistory] = useState<InfoCardType[]>([]);
  const [filter, setFilter] = useState<MealType | "">("");

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

    setMealHistory([
      {
        id: "1",
        imageName: "m01",
        time: "05.21.Morning",
        type: "Morning",
      },
      {
        id: "2",
        imageName: "l03",
        time: "05.21.Lunch",
        type: "Lunch",
      },
      {
        id: "3",
        imageName: "d01",
        time: "05.21.Dinner",
        type: "Dinner",
      },
      {
        id: "4",
        imageName: "l01",
        time: "05.21.Snack",
        type: "Snack",
      },
      {
        id: "5",
        imageName: "m01",
        time: "05.20.Morning",
        type: "Morning",
      },
      {
        id: "6",
        imageName: "l02",
        time: "05.20.Lunch",
        type: "Lunch",
      },
      {
        id: "7",
        imageName: "d02",
        time: "05.20.Dinner",
        type: "Dinner",
      },
      {
        id: "8",
        imageName: "s01",
        time: "05.20.Snack",
        type: "Snack",
      },
    ]);
  }, []);

  const handleFilter = (type: MealType) => {
    setFilter(type);
  };

  const handleShowMore = () => {
    setMealHistory((current: InfoCardType[]) => {

      // fake call api
      const clone = [...current];
      let id = parseInt(clone[clone.length - 1].id);

      const fakeNewDate: InfoCardType[] = [
        "Morning",
        "Lunch",
        "Dinner",
        "Snack",
      ].map((item: any) => {
        id++;
        return {
          id: id.toString(),
          imageName: `m01`,
          time: `05.20.${item}`,
          type: item,
        };
      });

      return [...clone, ...fakeNewDate];
    });
  };

  return (
    <div className="home">
      <div className="home-thumbnail">
        <div className="home-thumbnail-date">
          <img src={getImageSrc("d01")} />
        </div>
        <div className="home-thumbnail-body_weight">
          <LineChart
            datasets={lineChartData.datasets}
            xAxisLabels={lineChartData.xAxisLabels}
          />
        </div>
      </div>
      <div className="home-container">
        <div className="home-transit">
          {componentHex?.map((item, index) => (
            <Component_hex
              key={index}
              onClick={() => handleFilter(item.text)}
              icon={item.icon}
              text={item.text}
            />
          ))}
        </div>
        <div className="home-meal_history">
          {mealHistory?.map(
            (item) =>
              (filter === "" || item.type === filter) && (
                <Info_card key={item.id} {...item} />
              )
          )}
        </div>
        <ButtonShowMore onClick={handleShowMore} text="記録をもっと見る" />
      </div>
    </div>
  );
}
