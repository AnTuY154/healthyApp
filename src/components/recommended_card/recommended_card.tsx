import React, { useEffect, useLayoutEffect, useState } from "react";
import { getImageSrc } from "../../common/common";
import "./recommended_card.scss";
import { RecommendedCardType } from "./type";

export function RecommendedCard({
  title,
  description,
  onClick,
}: RecommendedCardType) {
  return (
      <div onClick={onClick} className="recommended_card">
        <p className="recommended_card-title">{title}</p>
        <div className="recommended_card-line" />
        <p className="recommended_card-description">{description}</p>
      </div>
  );
}
