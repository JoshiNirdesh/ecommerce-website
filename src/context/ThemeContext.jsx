import { createContext } from "react";

// 1. Create the context
export const ThemeContext = createContext();

// 2. Create a provider component
export const ThemeProvider = ({ children }) => {
    return (
        <ThemeContext.Provider value={"Nirdesh"}>
            {children}
        </ThemeContext.Provider>
    );
};
