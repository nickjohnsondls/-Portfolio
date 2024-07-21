/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ElementIconsImage = ({ className, elementIconsImage = "/img/03-icons-image-appicon.png" }) => {
  return <img className={`element-icons-image ${className}`} alt="Element icons image" src={elementIconsImage} />;
};

ElementIconsImage.propTypes = {
  elementIconsImage: PropTypes.string,
};
