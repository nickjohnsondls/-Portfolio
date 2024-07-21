/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ElementControls = ({
  darkMode,
  className,
  divClassName,
  text = "😃 your email will be receiving goodies",
}) => {
  return (
    <div className={`element-controls dark-mode-12-${darkMode} ${className}`}>
      <p className={`your-email-will-be ${divClassName}`}>{text}</p>
    </div>
  );
};

ElementControls.propTypes = {
  darkMode: PropTypes.bool,
  text: PropTypes.string,
};
