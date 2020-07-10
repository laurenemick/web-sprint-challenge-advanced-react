import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const Toggle = () => {
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