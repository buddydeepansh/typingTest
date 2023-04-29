import React from "react";
import Select from "react-select";
import "./Footer.css";
import { useState } from "react";
import { themeOptions } from "../../Utils/themOptions";
import { useTheme } from "../../Context/ThemeContext";

const Footer = () => {
  const { setTheme, theme } = useTheme();
  const handleChange = (e) => {
    setTheme(e.value);
    localStorage.setItem("theme", JSON.stringify(e.value));
  };
  return (
    <div className="Footer">
      <div className="links">Links</div>
      <div className="themeButton">
        <Select
          value={theme}
          onChange={handleChange}
          options={themeOptions}
          menuPlacement="top"
          styles={{
            control: (styles) => ({
              ...styles,
              backgroundColor: theme.background,
            }),
            menu: (styles) => ({
              ...styles,
              backgroundColor: theme.background,
            }),
            singleValue: (styles) => ({
              ...styles,
              color: theme.typeBoxText,
            }),
            option: (styles, { isFocused }) => {
              return {
                ...styles,
                backgroundColor: !isFocused ? theme.background : theme.text,
                color: isFocused ? theme.background : theme.typeBoxText,
              };
            },
          }}
        />
      </div>
    </div>
  );
};

export default Footer;
