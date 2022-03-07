import React, { useState, useEffect, useRef } from "react";
import "./DelayedFallback.css";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { motion } from "framer-motion";

const DelayedFallback = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="delayed-feedback-div">
        <ClimbingBoxLoader color={"white"} size={"0.8rem"} className="loader" />
      </div>
    </motion.div>
  );
};
export default DelayedFallback;
