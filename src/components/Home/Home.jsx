import React from "react";
import "./Home.css";
import { Slide, Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="home-div container">
      <div className="home-intro">
        <div className="home-div-text1">
          <h1 className="home-div-heading">
            <Slide direction="up" triggerOnce="true" duration={1500}>
              SEEK
            </Slide>
            <Slide direction="up" triggerOnce="true" duration={1500}>
              <span className="home-div-heading-span">DISCOMFORT —</span>
            </Slide>
          </h1>
          <p className="home-div-para">
            <Slide direction="up" triggerOnce="true" duration={1500}>
              Hi, I'm Ninad Walanj · Developer based in 43.0481° N, 76.1474° W
            </Slide>
          </p>
        </div>
        <div className="home-div-text2">
          <Link to="/contact" className="home-div-text2-link">
            <Slide direction="left" triggerOnce="true" duration={1500}>
              Contact Me →
            </Slide>
          </Link>
        </div>
      </div>

      <div className="home-work">
        <div>
          <Fade triggerOnce="true" duration={1500}>
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
          </Fade>
        </div>
        <div className="home-work-carddiv">
          <Fade triggerOnce="true" duration={1500}>
            <a
              href="https://github.com/NinadWalanj"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <div className="home-work-div1"></div>
            </a>
          </Fade>
          <Fade triggerOnce="true" duration={1500}>
            <a
              href="https://medium.com/@ninadwalanj"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <div className="home-work-div2"></div>
            </a>
          </Fade>
        </div>
      </div>
    </div>
  );
}
