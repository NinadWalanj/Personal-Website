import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
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
        <div className="about-div-imagediv"></div>
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
              Hi there! I'm Ninad Walanj
              <span className="about-div-textdiv-second-para-span1">
                I am an undergrad student pursuing a Bachelor's Degree in the
                field of Information Technology from the University of Mumbai.
                Passionate about learning new technologies like Data Science,
                AWS, etc. I got experience in the field of Web Development that
                I acquired through internships and by building projects.
              </span>
              <span className="about-div-textdiv-second-para-span2">
                Presently, I am interested in the field of Data Science and
                studying for the same. Looking for a Data Science/ Data Analyst
                Intern role.
              </span>
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
