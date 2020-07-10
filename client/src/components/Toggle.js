import React, { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const Toggle = (props) => {
    const [darkMode, setDarkMode] = useDarkMode('darkMode');

    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };

    return (
        <div className="dark-mode__toggle">
            <div
                onClick={toggleMode}
                className={darkMode ? 'toggle toggled' : 'toggle'}
            />
        </div>
    )
}

export default Toggle;