import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from 'react';

export const useDarkMode = () => {
    const [value, setValue] = useLocalStorage('darkMode');

    useEffect(() => {
        if (value === true) {
            let element = document.querySelector("body");
            element.classList.add("dark-mode");
        }
        if (value === false) {
            let element = document.querySelector("body");
            element.classList.remove("dark-mode");
        };
    }, [value]);
    return [value, setValue];
}