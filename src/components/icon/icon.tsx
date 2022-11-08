import React, { useEffect } from "react";
import { IconProps } from "./types";
import "./icon.scss";

export default React.memo(function Icon(props: IconProps) {
  const { name ='info', noticationNumber,onClick } = props;
  const icon = require(`Assets/icon/icon_${name}.svg`);

  console.log('icon')
  return (
    <div onClick={onClick} className="icon">
      <img src={icon} alt="mySvgImage" />
      {noticationNumber && <span>{noticationNumber}</span>}
    </div>
  );
} ) 
