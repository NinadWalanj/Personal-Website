import React, { useState, useEffect, useRef } from "react";
import "./DelayedFallback.css";
import BeatLoader from "react-spinners/BeatLoader";
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
        <BeatLoader color={"white"} size={"0.8rem"} className="loader" />
        {/* size={15} */}
      </div>
    </motion.div>
  );
};
export default DelayedFallback;
