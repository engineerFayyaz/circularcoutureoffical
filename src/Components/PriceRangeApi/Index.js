import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./PriceRange.css";

const PriceRange = () => {
  const [minValue, setMinValue] = useState(15);
  const [maxValue, setMaxValue] = useState(900);

  const handleSliderChange = (values) => {
    setMinValue(values[0]);
    setMaxValue(values[1]);
  };

  return (
    <div className="price-range">
      <Slider
        min={15}
        max={900}
        range
        defaultValue={[minValue, maxValue]}
        onChange={handleSliderChange}
        style={{ width: "283px", height: "30px" }} // Adjust width and height here
      />
      <div className="inputs">
        <input
          type="number"
          value={minValue}
          onChange={(e) => setMinValue(parseFloat(e.target.value))}
          min="15"
          max={maxValue}
        />
        <input
          type="number"
          value={maxValue}
          onChange={(e) => setMaxValue(parseFloat(e.target.value))}
          min={minValue}
          max="900"
        />
      </div>
    </div>
  );
};

export default PriceRange;
