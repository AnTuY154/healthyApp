import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import useEllipsis from "../../hook/useEllipsis";
import "./diary_card.scss";
import { DiaryCardType } from "./type";

export function DiaryCard({ description, time }: DiaryCardType) {
  const [height, setHeight] = useState<number>(0);
  const [line,setLine] = useState<number>(0)
  const desRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const width = containerRef?.current?.getBoundingClientRect().width || 0;
    if (width !== 0) {
      setHeight(width);
      const descriptionHeight = width - 90; // (padding 16*2 time text have line height 22*2 margintop 10px border 2*2 )
      const countLine = (descriptionHeight / 17 ) - Math.ceil(12 * 0.06) // remove 1 line because letter space  17 is text line height
      setLine(countLine)
    }
  }, []);


  return (
    <div ref={containerRef} style={{ height: height }} className="diary_card">
      <div className="diary_card-time">
        {time?.split(" ").map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      <div ref={desRef} className="diary_card-description">
        {useEllipsis(
          12, // fontSize
          0.06, // letterSpaceing
          desRef, // width - padding 16 and border 2
          description,
          line, 
        )}
      </div>
    </div>
  );
}
