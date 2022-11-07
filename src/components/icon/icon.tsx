import React, { useEffect } from "react";
import { IconProps } from "./types";
import "./icon.scss";

export function Icon(props: IconProps) {
  const { name, noticationNumber } = props;
  const icon = require(`Assets/icon/icon_${name}.svg`);

  return (
    <div className="icon">
      <img src={icon} alt="mySvgImage" />
      {noticationNumber && <span>{noticationNumber}</span>}
    </div>
  );
}
