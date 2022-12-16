import React from "react";
import MenuItem from "./MenuItem";

import Logo from "assets/icons/coach-logo.svg";
import LogoDarkMode from "assets/icons/coach-logo-dark-mode.svg";

import "./Header.css";

export function Header({ isDark, data }) {
  return (
    <div className={isDark ? "header--wrapper dark" : "header--wrapper"}>
      <img className="header--logo" src={isDark ? LogoDarkMode : Logo} />
      {data?.map((el) => {
        return (
          <MenuItem
            text={el.itemTitle}
            items={el.subMenuItems}
            link={el.link}
            isDark={isDark}
          />
        );
      })}
      <div
        className={
          isDark ? "header--action-button dark" : "header--action-button"
        }
      >
        REQUEST ACCESS
      </div>
    </div>
  );
}
