import React from "react";
import Select from "react-select";
import "./Footer.css";
import { useState } from "react";
import { themeOptions } from "../../Utils/themOptions";
import { useTheme } from "../../Context/ThemeContext";

const Footer = () => {
  const [value, setvalue] = useState({});
  const { setTheme } = useTheme();
  const handleChange = (e) => {
    console.log(e);
    setvalue(e.value);
    setTheme(e.value);
  };
  return (
    <div className="Footer">
      <div className="links">Links</div>
      <div className="themeButton">
        <Select
          value={value}
          onChange={handleChange}
          options={themeOptions}
          menuPlacement="top"
        />
      </div>
    </div>
  );
};

export default Footer;
