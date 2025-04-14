import React from "react";
import "./Home.css";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="home-div container">
        <div className="home-intro">
          <div className="home-div-text1">
            <h1 className="home-div-heading">
              <Fade direction="up" triggerOnce="true" duration={1000}>
                SEEK
              </Fade>
              <Fade direction="up" triggerOnce="true" duration={1000}>
                <span className="home-div-heading-span">DISCOMFORT —</span>
              </Fade>
            </h1>
            <p className="home-div-para">
              <Fade direction="up" triggerOnce="true" duration={1000}>
                Hi, I'm Ninad Walanj · Developer based in 43.0481° N, 76.1474° W
              </Fade>
            </p>
          </div>
          <div className="home-div-text2">
            <Link to="/contact" className="home-div-text2-link">
              <Fade direction="up" triggerOnce="true" duration={1000}>
                Contact Me →
              </Fade>
            </Link>
          </div>
        </div>

        <div className="home-work">
          <div>
            <h2 className="home-work-heading">From Idea to Execution</h2>
            <p className="home-work-heading-para">
              A curated collection of projects and writings that reflect my
              journey, skills, and curiosity, from concept to final
              implementation.
            </p>
            <p className="home-work-heading-para">
              Whether it's building data-driven applications, crafting intuitive
              user interfaces, or exploring emerging technologies, each piece
              showcases my commitment to writing clean code, solving real
              problems, and communicating clearly.
            </p>
            <p className="home-work-heading-para">
              This collection is a snapshot of both my technical foundation and
              my creative process — a space where innovation meets execution.
            </p>
          </div>
          <div className="home-work-carddiv">
            <a
              href="https://github.com/NinadWalanj"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <div className="home-work-div1"></div>
            </a>
            <a
              href="https://medium.com/@ninadwalanj"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <div className="home-work-div2"></div>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
