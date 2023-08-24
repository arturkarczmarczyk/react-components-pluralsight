import {createContext, useContext, useState} from "react";
import {ThemeContext, ThemeProvider} from "../contexts/ThemeContext";

export default function Layout({startingTheme, children}) {
    return (
        <ThemeProvider startingTheme={startingTheme}>
            <LayoutNoThemeProvider startingTheme={startingTheme}>
                {children}
            </LayoutNoThemeProvider>
        </ThemeProvider>
    );
}

function LayoutNoThemeProvider({startingTheme, children}) {

    const {theme} = useContext(ThemeContext);

    return (
        <div className={`container-fluid ${theme}`}>
            {children}
        </div>
    );
}
