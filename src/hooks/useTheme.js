import {useState} from "react";

export default function useTheme(startingTheme = "light") {
    const [theme, setTheme] = useState(startingTheme);

    function validateTheme(themeValue) {
        if (themevalue === "dark") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    return {
        theme,
        setTheme: validateTheme,
    }
}
