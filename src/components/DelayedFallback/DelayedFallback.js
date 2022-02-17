import React, { useState, useEffect, useRef } from "react";
import "./DelayedFallback.css";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const DelayedFallback = () => {
  return (
    <div className="delayed-feedback-div">
      <ClimbingBoxLoader color={"grey"} size={"1rem"} className="loader" />
    </div>
  );
};
export default DelayedFallback;
