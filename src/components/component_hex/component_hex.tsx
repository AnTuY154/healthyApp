import React, { useEffect } from "react";
import { HexComponentProps } from "./types";
import "./component_hex.scss";
import Icon from "../icon/icon";

export default React.memo(function ComponentHex({icon,text,onClick}: HexComponentProps) {

  return (
    <div onClick={onClick} className="hexagon">
        <Icon {...icon}/>
        <p>{text}</p>
    </div>
  );
} ) 
