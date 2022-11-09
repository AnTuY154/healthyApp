import { useEffect, useState } from "react";
import React from "react";

// hook use to ellipsis text
function useEllipsis (
  fontSize: number,
  letterSpacing: number,
  ref: any,
  text = "",
  line: number
) {
  const [convertText, setConvertText] = useState<string>(text);
  useEffect(() => {
    const width = ref?.current?.getBoundingClientRect().width || 0;
    //count letter in oneline
    const letterInOneLine = Math.floor(width / fontSize);
    
    // count number letter remove x letter because of letter-spacing
    const textLength =
      letterInOneLine * line - Math.ceil(fontSize * letterSpacing);

    if (text.length > textLength) {
      const finalText = `${text.substring(0, textLength)}...`;
      setConvertText(finalText);
    }else{
      setConvertText(text);
    }

  }, [line]);

  return convertText;
};


export default useEllipsis