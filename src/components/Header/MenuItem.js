import React, { useEffect, useRef, useState } from "react";
import DownCaret from "assets/icons/down-caret.svg";
import DownCaretGray from "assets/icons/down-caret-gray.svg";
import { useNavigate } from "react-router-dom";

export default function MenuItem({ text, items, link, isDark }) {
  const [showItems, setShowItems] = useState(false);

  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target) && showItems) {
        setShowItems(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showItems]);

  return (
    <div ref={ref} className="header--menu-item">
      <div
        className={
          isDark ? "header--menu-item-text dark" : "header--menu-item-text"
        }
        onClick={() => {
          if (items) {
            setShowItems((prevState) => !prevState);
          } else if (link) {
            setShowItems(false);
            navigate(link);
          }
        }}
      >
        {text}
        {items && <img src={isDark ? DownCaretGray : DownCaret} />}
      </div>
      {showItems && items && (
        <div
          className={isDark ? "header--menu-items dark" : "header--menu-items"}
        >
          {items.map((el) => {
            return (
              <div>
                <div className="header--menu-subitem-title">{el.itemTitle}</div>
                {el.items.map((el) => {
                  return (
                    <div
                      onClick={() => navigate(el.link)}
                      className="header--menu-subitem"
                    >
                      {el.title}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
