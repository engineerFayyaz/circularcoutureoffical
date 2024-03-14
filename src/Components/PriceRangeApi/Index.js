import React, { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./PriceRange.css";

const PriceRange = () => {
  const [minValue, setMinValue] = useState(15);
  const [maxValue, setMaxValue] = useState(900);
  const MAX_ALLOWED_VALUE = 1000; // Example: maximum allowed value

  useEffect(() => {
    const slider = document.querySelector(".rc-slider-handle-1");
    if (slider) slider.style.left = `${((minValue - 15) / (900 - 15)) * 100}%`;
  }, [minValue]);

  useEffect(() => {
    const slider = document.querySelector(".rc-slider-handle-2");
    if (slider) slider.style.left = `${((maxValue - 15) / (900 - 15)) * 100}%`;
  }, [maxValue]);

  const handleSliderChange = (values) => {
    const [min, max] = values;
    setMinValue(min);
    setMaxValue(max);
  };

  const handleMinInputChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      // Ensure min value is not greater than max value
      if (value <= maxValue && value >= 15) {
        setMinValue(value);
      } else if (value < 15) {
        setMinValue(15);
      } else {
        setMinValue(maxValue);
      }
    }
  };

  const handleMaxInputChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      // Ensure max value is not less than min value and not greater than allowed maximum value
      if (value >= minValue && value <= MAX_ALLOWED_VALUE) {
        setMaxValue(value);
      } else if (value > MAX_ALLOWED_VALUE) {
        setMaxValue(MAX_ALLOWED_VALUE);
      } else {
        setMaxValue(minValue);
      }
    }
  };

  return (
    <div className="price-range">
      <Slider
        min={15}
        max={900}
        range
        value={[minValue, maxValue]}
        onChange={handleSliderChange}
        style={{ width: "283px", height: "30px" }}
      />
      <div className="inputs">
        <input
          type="number"
          value={minValue}
          onChange={handleMinInputChange}
          min="15"
          max={maxValue}
        />
        <input
          type="number"
          value={maxValue}
          onChange={handleMaxInputChange}
          min={minValue}
          max={MAX_ALLOWED_VALUE}
        />
      </div>
    </div>
  );
};

export default PriceRange;
