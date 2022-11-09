import React, { useCallback, useEffect, useState } from "react";
import Icon from "../../icon/icon";
import "../header.scss";
import { HeaderMenuListType } from "../type";
import { Link } from "react-router-dom";

export function HeaderMenu({ menu = [] }: HeaderMenuListType) {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setToggle((current) => !current);
  }, []);

  const handleCloseToggle = useCallback(() => {
    setToggle((current) => {
      if (current) {
        return !current;
      }
      return current;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleCloseToggle);
    return () => {
      window.removeEventListener("click", handleCloseToggle);
    };
  }, []);

  return (
    <div className="header-menu">
      <Icon
        onClick={handleToggle}
        name="menu"
      />
      {toggle ? (
        <div className="header-menu-items">
          {menu?.map((item) => (
            <Link key={item.path} to={item.path}>
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
