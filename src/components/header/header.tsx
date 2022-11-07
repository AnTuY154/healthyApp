import React, { useEffect, useState } from "react";
import "./header.scss";
import Logo from "Assets/img/logo.jpg";
import { Icon } from "../icon/icon";
import { HeaderItem } from "./headerItem/headerItem";
import { HeaderItemType } from "./type";

export function Header() {
  const [headerData, setHeaderData] = useState<HeaderItemType[]>([]);

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
        <Icon name="menu" />
      </div>
    </div>
  );
}
