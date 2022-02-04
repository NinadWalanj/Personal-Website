import React from "react";
import { Link } from "react-router-dom";
import "./Resume.css";
import { motion } from "framer-motion";
import jio from "../../assets/resume/jio-test.svg";
import meetmefit from "../../assets/resume/test.svg";
import resumeFile from "../../assets/resume/My-resume.pdf";

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="resume container">
        {/* <h1 className="resume-heading">
          <span>Resume</span>
        </h1> */}

        {/* work experience */}
        <div className="resume-workexperience ">
          <h4 className="workexperience-heading">Work Experience</h4>
          {/* first subdiv */}
          <div className="workexperience-tablediv row">
            <div className="workexperience-tablediv-1 col-sm-12 col-md-12 col-lg-6">
              <img src={meetmefit} alt="meetmefit" className="meetemfit-img" />
            </div>
            <div className="workexperience-tablediv-2 col">
              <p className="workexperience-tablediv-2-para1">
                October 2020 - January 2022
              </p>
              <h4 className="workexperience-tablediv-2-heading">MeetMeFit</h4>
              <p className="workexperience-tablediv-2-para2">
                Web Development Intern
              </p>
            </div>
          </div>

          {/* second subdiv */}
          <div className="workexperience-tablediv row">
            <div className="workexperience-tablediv-1  col-sm-12 col-md-12 col-lg-6">
              <img src={jio} alt="jio" className="jio-img" />
            </div>
            <div className="workexperience-tablediv-2 col">
              <p className="workexperience-tablediv-2-para1">
                June 2021 - July 2021
              </p>
              <h4 className="workexperience-tablediv-2-heading">
                Jio Platforms Limited
              </h4>
              <p className="workexperience-tablediv-2-para2">
                Web Development Intern
              </p>
            </div>
          </div>
        </div>

        {/* Education */}
        {/* <div className="resume-education ">
          <h4 className="education-heading">Education</h4> */}

        {/* first subdiv */}
        {/* <div className="education-tablediv row">
            <div className="education-tablediv-1  col-4"> */}
        {/* <img src={muImage} alt="mumbai university" className="mu-image" /> */}
        {/* </div>
            <div className="education-tablediv-2 col">
              <h4 className="education-tablediv-2-heading">
                Mumbai University
              </h4>
              <p className="education-tablediv-2-para1">
                B.E. in Information Technology, 2019 - 2023
              </p>
              <p className="education-tablediv-2-para2">Mumbai, Maharashtra</p>
            </div>
          </div>
        </div> */}

        {/* skills */}
        <div className="resume-skills">
          <h4 className="skills-heading">Skills & Expertise</h4>

          <div className="skills-maindiv">
            {/* subdiv1 */}
            <div className="skills-subdiv1">
              <p className="skills-subdiv1-para">HTML5, CSS3, Javascript</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "85%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="HTML,CSS,JAVASCRIPT"
                ></div>
              </div>
            </div>

            {/* subdiv2 */}
            <div className="skills-subdiv2">
              <p className="skills-subdiv2-para">Git</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="GIT"
                ></div>
              </div>
            </div>

            {/* subdiv3 */}
            <div className="skills-subdiv3">
              <p className="skills-subdiv3-para">OOP</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="OOP"
                ></div>
              </div>
            </div>

            {/* subdiv4 */}
            <div className="skills-subdiv4">
              <p className="skills-subdiv4-para">React</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "85%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="REACT"
                ></div>
              </div>
            </div>

            {/* subdiv5 */}
            <div className="skills-subdiv5">
              <p className="skills-subdiv5-para">Python</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="PYTHON"
                ></div>
              </div>
            </div>

            {/* subdiv6 */}
            <div className="skills-subdiv6">
              <p className="skills-subdiv6-para">MERN</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "85%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="MERN"
                ></div>
              </div>
            </div>

            {/* subdiv7 */}
            <div className="skills-subdiv7">
              <p className="skills-subdiv7-para">Databases (MySQL, MongoDB)</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label="DATABASES"
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Github */}
        <div className="resume-github ">
          <a
            href="https://github.com/NinadWalanj"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-github-para-link1 "
          >
            Github
          </a>

          <a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="resume-github-para-link2 "
          >
            Download resume
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Resume;
