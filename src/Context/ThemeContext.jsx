import { createContext, useContext, useState } from "react";
import { themeOptions } from "../Utils/themOptions";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ child }) => {
  const [theme, settheme] = useState(themeOptions[0].value);
  const values = { theme, settheme };
  return <ThemeContext.Provider value={values}>{child}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
