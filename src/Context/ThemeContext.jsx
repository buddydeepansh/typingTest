import { createContext, useContext, useState } from "react";
import { themeOptions } from "../Utils/themOptions";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  let defaultValue = localStorage.getItem("theme");
  defaultValue = JSON.parse(defaultValue) || themeOptions[2].value;
  const [theme, setTheme] = useState(defaultValue);
  const values = { theme, setTheme };
  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
