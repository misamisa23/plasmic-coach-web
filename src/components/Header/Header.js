import React, { useState } from "react";
import MenuItem from "./MenuItem";

import Logo from "assets/icons/coach-logo.svg";
import LogoDarkMode from "assets/icons/coach-logo-dark-mode.svg";
import BurgerMenu from "assets/icons/menu-burger.svg";

import "./Header.css";
import { useNavigate } from "react-router-dom";
import ResponsiveMenuItem from "./ResponsiveMenuItem";

export function Header({ isDark, data }) {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    document.body.style.overflow = showMenu ? "scroll" : "hidden";
    setShowMenu(prevData => !prevData);
  }

  return (
    <div>
      <div className={isDark ? "header--wrapper dark" : "header--wrapper"}>
        <img className={"header--menu-icon"} src={BurgerMenu} onClick={() => toggleMenu()} height={20} width={20} />

        <img className="header--logo" src={isDark ? LogoDarkMode : Logo} onClick={() => {
          navigate('/');
          document.body.style.overflow = "scroll";
          setShowMenu(false);
        }} />
        <div className="header--menu-list">
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
        </div>
        <div
          className={
            isDark ? "header--action-button dark" : "header--action-button"
          }
        >
          REQUEST ACCESS
        </div>
      </div>
      <div className={showMenu ? "header--full-menu-container-visible" : "header--full-menu-container"}
      >
        {showMenu && data?.map((el) => {
          return (
            <ResponsiveMenuItem
              menuItem={el}
              setShowMenu={setShowMenu}
            />
          );
        })}
      </div>
    </div>
  );
}
