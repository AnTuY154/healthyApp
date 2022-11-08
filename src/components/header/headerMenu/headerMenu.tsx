import React, { useCallback, useState } from "react";
import Icon from "../../icon/icon";
import "../header.scss";
import { HeaderMenuListType } from "../type";
import { Outlet, Link, useLoaderData } from "react-router-dom";

export function HeaderMenu({ menu = [] }: HeaderMenuListType) {
  const [toggle, setToggle] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setToggle((current) => !current);
  }, []);

  return (
    <div className="header-menu">
      <Icon onClick={handleToggle} name="menu" />
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
