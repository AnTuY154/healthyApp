import React, { useEffect, useRef, useState } from "react";
import "./button_show_more.scss";
import { ButtonType } from "./type";

export function ButtonShowMore({ onClick, text, className }: ButtonType) {
  return (
    <div className={`button_show_more ${className ? className : ""}`}>
      <button onClick={onClick}>{text}</button>
    </div>
  );
}
