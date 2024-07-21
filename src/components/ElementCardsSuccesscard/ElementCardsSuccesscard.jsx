/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ElementCardsSuccesscard = ({
  successMetrics,
  darkMode,
  className,
  descriptionClassName,
  text = "Adoption",
  hasFrame = true,
  text1 = "Retention",
}) => {
  return (
    <div className={`element-cards-successcard dark-mode-${darkMode} ${successMetrics} ${className}`}>
      <div className={`description ${descriptionClassName}`}>
        {successMetrics === "adoption" && <>{text}</>}

        {successMetrics === "retention" && <>{text1}</>}

        {successMetrics === "ROI" && <>ROI</>}
      </div>
      {hasFrame && (
        <div className="frame">
          {successMetrics === "adoption" && (
            <>
              <img className="img" alt="Frame" src={darkMode ? "/img/frame-4506-1.png" : "/img/frame-4506.png"} />
              <div className="text-wrapper">30%</div>
              <p className="div">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada dignissim</p>
            </>
          )}

          {["ROI", "retention"].includes(successMetrics) && (
            <>
              <div className="description-2">
                {successMetrics === "retention" && <>💁‍♀️💁🏻💁‍♂️</>}

                {successMetrics === "ROI" && <>🤑</>}
              </div>
              <div className="frame-2">
                {successMetrics === "retention" && (
                  <>
                    <div className="description-3">10k</div>
                    <div className="description-4">Active weekly users</div>
                  </>
                )}

                {successMetrics === "ROI" && <>$30k+</>}
              </div>
              <div className="frame-3">
                {successMetrics === "retention" && (
                  <>
                    <div className="description-5">100k</div>
                    <div className="description-6">Active annual users</div>
                  </>
                )}

                {successMetrics === "ROI" && (
                  <p className="text-wrapper-15">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Malesuada dignissim
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

ElementCardsSuccesscard.propTypes = {
  successMetrics: PropTypes.oneOf(["retention", "ROI", "adoption"]),
  darkMode: PropTypes.bool,
  text: PropTypes.string,
  hasFrame: PropTypes.bool,
  text1: PropTypes.string,
};
