import React, { useEffect, useRef, useState } from "react";
import { getImageSrc } from "../../common/common";
import { InfoCardType } from "./types";
import "./info_card.scss";
import useEllipsis from "../../hook/useEllipsis";

export default React.memo(function InfoCard({
  imageName,
  time,
  tags = [],
  title,
  onClick
}: InfoCardType) {
  const card_ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={card_ref} className="info_card">
      <div className="info_card-thumbnail">
        <img src={getImageSrc(imageName)} />
        <div className="info_card-thumbnail-time">{time}</div>
      </div>

      {title || tags?.length > 0 ? (
        <div onClick={onClick} className="info_card-content">
          {title && (
            <p className="info_card-content-title">
              {useEllipsis(
                15, // fontSize
                0.08, // letterSpaceing
                card_ref, // width - padding 16 and border 2
                title,
                2
              )}
            </p>
          )}
          {tags?.length > 0 && (
            <div className="info_card-content-tag">
              {tags?.map((tag,index) => (
                <p key={index}>{tag}</p>
              ))}
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
});
