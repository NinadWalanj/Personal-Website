import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import resumeFile from "../../assets/resume/My-resume.pdf";

export default function About() {
  return (
    <div className="about-div container">
      {/* IMAGE-DIV */}
      <Fade direction="up" duration={1000} triggerOnce="true">
        <div className="about-div-imagediv"></div>
      </Fade>
      {/* TEXT-DIV */}
      <div className="about-div-textdiv row">
        <Fade direction="up" duration={1000} triggerOnce="true">
          <div className="about-div-textdiv-first">
            <p className="about-div-textdiv-first-para1">Personal Contact:</p>
            <p className="about-div-textdiv-first-para2">
              walanjninad@gmail.com
            </p>
            <p className="about-div-textdiv-first-para3">+1 (680)356-8867</p>
          </div>

          <div className="about-div-textdiv-second">
            <p className="about-div-textdiv-second-para">
              Hi there! I'm Ninad Walanj
              <span className="about-div-textdiv-second-para-span1">
                As a graduate student pursuing a Master's degree in Computer
                Science from Syracuse University, I am passionate about software
                development and its myriad use cases. My academic journey,
                complemented by hands-on experience through internships and
                project work, has equipped me with a strong foundation in
                several technologies.
              </span>
              <span className="about-div-textdiv-second-para-span2">
                I value teamwork, creativity, and innovation, consistently
                striving to deliver high-quality products that meet user needs
                and expectations. My leadership experience in coordinating
                cross-functional teams and optimizing project delivery
                underscores my ability to drive innovation and efficiency in any
                tech-driven environment.
              </span>
              <span className="about-div-textdiv-second-para-span3">
                I am looking for a Software Developer/Android Developer/Full
                Stack Developer role. I am eager to learn new skills, explore
                new challenges, and contribute to real-world solutions.
              </span>
            </p>
            <div className="about-div-textdiv-second-para-subdiv">
              <Link
                to="/contact"
                className="about-div-textdiv-second-subdiv-link1"
              >
                Let's talk
              </Link>

              <a
                href={resumeFile}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="about-div-textdiv-second-subdiv-link2"
              >
                Download Resume
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
