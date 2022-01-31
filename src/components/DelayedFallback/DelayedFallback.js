import React, { useState, useEffect, useRef } from "react";
import "./DelayedFallback.css";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const DelayedFallback = () => {
  return (
    <div className="delayed-feedback-div">
      <div className="delayed-feedback-div-para">
        <ClimbingBoxLoader color={"grey"} size={"1.2rem"} className="loader" />
      </div>
    </div>
  );
};
export default DelayedFallback;
