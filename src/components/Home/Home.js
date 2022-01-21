import React from "react";
import "./Home.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="home-div container">
        <h1 className="home-div-heading">
          What makes you unique,
          <span className="home-div-heading-span">makes you successful.</span>
        </h1>
        <p className="home-div-para">
          Hi, I'm Ninad Walanj · Developer based in N19°2'51.845''E73°3'59.132''
        </p>
      </div>
    </motion.div>
  );
}
