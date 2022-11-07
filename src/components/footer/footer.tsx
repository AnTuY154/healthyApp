import React, { useEffect, useLayoutEffect, useState } from "react";
import "./footer.scss";

export function Footer() {
  const [footerData, setFooterData] = useState<string[]>([]);

  useLayoutEffect(() => {
    // call api header
    setFooterData([
      "会員登録",
      "運営会社",
      "利用規約",
      "個人情報の取扱について",
      "特定商取引法に基づく表記",
      "お問い合わせ",
    ]);
  }, []);

  return (
    <div className="footer">
   
       {footerData?.map((item,index) => (
        <p key={index}>{item}</p>
      ))}
   
 
    </div>
  );
}
