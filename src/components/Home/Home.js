import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="home-div container">
        <h1 className="home-div-heading">
          <Fade bottom duration={1500}>
            Be
          </Fade>
          <Fade bottom duration={1700}>
            <span className="home-div-heading-span">Unique —</span>
          </Fade>
        </h1>
        <p className="home-div-para">
          <Fade left duration={1700}>
            Hi, I'm Ninad Walanj · Developer based in 19.0473° N, 73.0699° E
          </Fade>
        </p>
      </div>
    </motion.div>
  );
}

// N19°2'51.845''E73°3'59.132''
