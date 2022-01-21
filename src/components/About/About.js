import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import aboutImg from "../../assets/about-img.jpg";
import aboutImg2 from "../../assets/1.jpg";
import aboutImg3 from "../../assets/2.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-div container">
        {/* IMAGE-DIV */}
        <div className="about-div-imagediv">
          {/* <img src={aboutImg2} className="about-pic" alt="my-pic" /> */}
        </div>
        {/* TEXT-DIV */}
        <div className="about-div-textdiv row">
          <div className="about-div-textdiv-first col-sm-12 col-md-6 col-lg-6">
            <p className="about-div-textdiv-first-para1">PERSONAL CONTACT:</p>
            <p className="about-div-textdiv-first-para2">
              ninadwalanj@gmail.com
            </p>
            <p className="about-div-textdiv-first-para3">+91 8828200111</p>
          </div>
          <div className="about-div-textdiv-second col-sm-12 col-md-6 col-lg-6">
            <p className="about-div-textdiv-second-para">
              Hello, my name is Ninad Walanj. I have a passion of developing new
              things. I was born in Mumbai, India. Currently I’m a student
              pursuing my Bachelor’s degree in Information Technology
            </p>
            <div className="about-div-textdiv-second-para-subdiv">
              <Link
                to="/contact"
                className="about-div-textdiv-second-subdiv-link1"
              >
                Let's talk
              </Link>

              <Link
                to="/resume"
                className="about-div-textdiv-second-subdiv-link2"
              >
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
