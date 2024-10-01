import React, { useContext } from "react";

export const ThemeContext = React.createContext({
  themeMode: "dark",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
};
