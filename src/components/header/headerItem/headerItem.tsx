import React from "react";
import Icon from "../../icon/icon";
import "../header.scss";
import { HeaderItemType } from "../type";

export function HeaderItem({ icon, text }: HeaderItemType) {
  return (
    <div className="header-item">
      <Icon name={icon.name} noticationNumber={icon.noticationNumber} />
      <p>{text}</p>
    </div>
  );
}
