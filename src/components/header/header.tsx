import React, { useEffect, useState } from "react";
import "./header.scss";
import Logo from "Assets/img/logo.jpg";
import { HeaderItem } from "./headerItem/headerItem";
import { HeaderItemType, HeaderMenuItemType } from "./type";
import { HeaderMenu } from "./headerMenu/headerMenu";

export function Header() {
  const [headerData, setHeaderData] = useState<HeaderItemType[]>([]);
  const [headerMenu, setHeaderMenu] = useState<HeaderMenuItemType[]>([]);

  useEffect(() => {
    // call api header
    setHeaderData([
      {
        icon: {
          name: "memo",
        },
        text: "自分の記録",
      },
      {
        icon: {
          name: "challenge",
        },
        text: "チャレンジ",
      },
      {
        icon: {
          name: "info",
          noticationNumber: 1,
        },
        text: "お知らせ",
      },
    ]);

    setHeaderMenu([
      {
        label: "自分の記録",
        path: "menu1",
      },
      {
        label: "体重グラフ",
        path: "menu2",
      },
      {
        label: "目標",
        path: "menu3",
      },
      {
        label: "選択中のコース",
        path: "menu4",
      },
      {
        label: "コラム一覧",
        path: "menu5",
      },
      {
        label: "設定",
        path: "menu6",
      },
    ]);
  }, []);

  return (
    <div className="header">
      <div className="header-logo">
        <img src={Logo} />
      </div>
      <div className="header-items">
        {headerData?.map((item, index) => (
          <HeaderItem key={index} icon={item.icon} text={item.text} />
        ))}
        <HeaderMenu menu={headerMenu}/>
        {/* <Icon name="menu" /> */}
      </div>
    </div>
  );
}
