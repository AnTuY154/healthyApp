import React, { useEffect, useState } from "react";
import "./column.scss";

import { ButtonShowMore } from "../../components/button_show_more/button_show_more";
import { RecommendedCard } from "../../components/recommended_card/recommended_card";
import Info_card from "../../components/info_card/info_card";
import { InfoCardType } from "../../components/info_card/types";
import { getCurrentTime } from "../../common/common";

export function Column(props: any) {
  const [columnItem, setColumnItem] = useState<InfoCardType[]>([]);

  const handleDetail = (id: string) => {

  }

  useEffect(() => {
    const currentTime = getCurrentTime();

    setColumnItem([
      {
        id: "1",
        imageName: "column-1",
        time: currentTime,
        type: "Morning",
        title:
          "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        tags: ["#魚料理", "#和食", "#DHA"],
      },
      {
        id: "2",
        imageName: "column-2",
        time: currentTime,
        type: "Lunch",
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        tags: ["#魚料理", "#和食", "#DHA"],
      },
      {
        id: "3",
        imageName: "column-3",
        time: currentTime,
        type: "Dinner",
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        tags: ["#魚料理", "#和食", "#DHA"],
      },
      {
        id: "4",
        imageName: "column-4",
        time: currentTime,
        type: "Snack",
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        tags: ["#魚料理", "#和食", "#DHA"],
      },
      {
        id: "5",
        imageName: "column-5",
        time: currentTime,
        type: "Morning",
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        tags: ["#魚料理", "#和食", "#DHA"],
      },
      {
        id: "6",
        imageName: "column-6",
        time: currentTime,
        type: "Lunch",
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        tags: ["#魚料理", "#和食", "#DHA"],
      },
      {
        id: "7",
        imageName: "column-7",
        time: currentTime,
        type: "Dinner",
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        tags: ["#魚料理", "#和食", "#DHA"],
      },
      {
        id: "8",
        imageName: "column-8",
        time: currentTime,
        type: "Snack",
        title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ",
        tags: ["#魚料理", "#和食", "#DHA"],
      },
    ]);
  }, []);

  const handleShowMoreColumn = () => {
    // loading more here
  }
  return (
    <div className="column_page">
      <div className="column_page_card">
        <RecommendedCard title="recommended column" description="オススメ" />
        <RecommendedCard title="recommended column" description="オススメ" />
        <RecommendedCard title="recommended column" description="オススメ" />
        <RecommendedCard title="recommended column" description="オススメ" />
      </div>

      <div className="column_page_list">
        {columnItem?.map((item, index) => (
          <Info_card key={index} {...item} onClick={() => handleDetail(item.id)} />
        ))}
      </div>
      <ButtonShowMore onClick={handleShowMoreColumn} text="自分の日記をもっと見る" />
    </div>
  );
}
