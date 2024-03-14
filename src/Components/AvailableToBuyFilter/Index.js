import React, { useState } from "react";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AvailableToBuyFilter = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const handleToggle = () => {
    setIsToggleOn((prevState) => !prevState);
  };
  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <div style={{ display: "flex", alignItems: "center" }}>
          <span>Available To Buy</span>
        </div>
        <div onClick={handleToggle}>
          <FontAwesomeIcon
            icon={isToggleOn ? faToggleOn : faToggleOff}
            style={{
              fontSize: "28px",
              color: isToggleOn ? "green" : "grey",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </>
  );
};
export default AvailableToBuyFilter;
