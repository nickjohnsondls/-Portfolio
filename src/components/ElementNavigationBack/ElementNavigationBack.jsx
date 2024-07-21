/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ElementNavigationBack = ({ darkMode, states, type, className }) => {
  return (
    <img
      className={`element-navigation-back ${className}`}
      alt="Dark mode false"
      src={
        !darkMode && states === "hover-over" && type === "right"
          ? "/img/dark-mode-false-states-hoverover-type-right.png"
          : !darkMode && states === "default" && type === "left"
          ? "/img/dark-mode-false-states-default-type-left.png"
          : !darkMode && states === "hover-over" && type === "left"
          ? "/img/dark-mode-false-states-hoverover-type-left.png"
          : darkMode && states === "default" && type === "left"
          ? "/img/dark-mode-true-states-default-type-left.png"
          : states === "hover-over" && darkMode && type === "left"
          ? "/img/dark-mode-true-states-hoverover-type-left.png"
          : darkMode && states === "default" && type === "right"
          ? "/img/dark-mode-true-states-default-type-right.png"
          : states === "hover-over" && darkMode && type === "right"
          ? "/img/dark-mode-true-states-hoverover-type-right.png"
          : "/img/dark-mode-false-states-default-type-right.png"
      }
    />
  );
};

ElementNavigationBack.propTypes = {
  darkMode: PropTypes.bool,
  states: PropTypes.oneOf(["hover-over", "default"]),
  type: PropTypes.oneOf(["right", "left"]),
};
