import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

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
          <Fade direction="up" triggerOnce="true" duration={1000}>
            BE
          </Fade>
          <Fade direction="up" triggerOnce="true" duration={1000}>
            <span className="home-div-heading-span">UNIQUE —</span>
          </Fade>
        </h1>
        <p className="home-div-para">
          <Fade direction="up" triggerOnce="true" duration={1000}>
            Hi, I'm Ninad Walanj · Developer based in 43.0481° N, 76.1474° W
          </Fade>
        </p>
      </div>
    </motion.div>
  );
}
