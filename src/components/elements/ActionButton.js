import React from "react";

import "./ActionButton.css";

export default function ActionButton({ title, onClick, isDark }) {
    return (
        <div
            className={
                isDark ? "action-button dark" : "action-button"
            }
            onClick={onClick}
        >
            {title}
        </div>
    );
}