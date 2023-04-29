import React from "react";
import { useTestMode } from "../../Context/TestModeContext";
import "./UpperMenu.css";

const UpperMenu = ({ countdown }) => {
  const { setTestTime, testTime } = useTestMode();
  const updateTime = (e) => {
    setTestTime(Number(e.target.id));
    setTimeout(() => {
      console.log(testTime);
    }, 1000);
  };
  return (
    <div className="upper-menu">
      <div className="counter">{countdown}</div>
      <div className="modes">
        <div className="time-mode" id={15} onClick={updateTime}>
          15s
        </div>
        <div className="time-mode" id={30} onClick={updateTime}>
          30s
        </div>
        <div className="time-mode" id={60} onClick={updateTime}>
          60s
        </div>
      </div>
    </div>
  );
};

export default UpperMenu;
