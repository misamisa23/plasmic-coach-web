import React, { useState } from "react";

import DownCaret from "assets/icons/down-caret.svg";

import './Header.css';
import { useNavigate } from "react-router-dom";

export default function ResponsiveMenuItem({ menuItem, setShowMenu }) {
    const navigate = useNavigate();

    const [showItems, setShowItems] = useState(false);

    return (
        <div onClick={() => { setShowItems(prevData => !prevData) }} style={{ cursor: 'pointer' }}>
            <div className="header--responsive-menu-item ">
                <div>{menuItem.itemTitle}
                </div>
                {menuItem?.subMenuItems?.length > 0 && <img className={showItems ? "header--menu-caret-show" : "header--menu-caret"} src={DownCaret} height={15} width={15} />}
            </div>
            {showItems && menuItem?.subMenuItems?.map((el) => {
                return (
                    <div>
                        <div className="header--responsive-menu-item-title">{el.itemTitle}</div>
                        {el.items.map((el) => {
                            return (
                                <div
                                    onClick={() => {
                                        setShowMenu(false);
                                        document.body.style.overflow = "scroll";
                                        navigate(el.link);
                                    }}
                                    className="header--responsive-menu-subitem"
                                >
                                    {el.title}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    )
}