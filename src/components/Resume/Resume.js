import React from "react";
import "./Resume.css";
import { motion } from "framer-motion";
import resumeFile from "../../assets/resume/My-resume.pdf";
import Fade from "react-reveal/Fade";
import js from "../../assets/resume/js.png";
import html from "../../assets/resume/html.png";
import git from "../../assets/resume/git.png";
import python from "../../assets/resume/python.png";
import databases from "../../assets/resume/database.png";
import oop from "../../assets/resume/oop.png";
import mern from "../../assets/resume/mern.png";
import { LazyImage } from "react-lazy-images";

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="resume container">
        {/* work experience */}
        <div className="resume-workexperience">
          <Fade left duration={1500}>
            <h4 className="workexperience-heading">Experience</h4>
          </Fade>
          {/* first subdiv */}
          <div className="workexperience-tablediv row">
            <Fade bottom duration={1500}>
              <div className="workexperience-tablediv-1 col-sm-12 col-md-12 col-lg-6">
                <p className="workexperience-tablediv-1-para1">
                  WEB DEVELOPMENT INTERN
                </p>
                <h4 className="workexperience-tablediv-1-heading">MeetMeFit</h4>
              </div>
            </Fade>

            <Fade bottom duration={1500}>
              <div className="workexperience-tablediv-2 col">
                <p className="workexperience-tablediv-2-para1">
                  It was a 1 year 4 months internship. Learned a lot about how
                  real world applications are developed and got acquainted about
                  the tasks assigned to a web developer. During my tenure, I
                  created 2 websites for the company.
                </p>
                <p className="workexperience-tablediv-2-para2">
                  My first website was the MeetMeFit
                  <span className="workexperience-tablediv-2-para2-span">
                    Admin Panel
                  </span>
                  where I had the responsibility to create an application that
                  fetches data from the database and various actions can be
                  performed on that data. It was a backend oriented website.
                </p>
                <p className="workexperience-tablediv-2-para3">
                  My second website was the
                  <span className="workexperience-tablediv-2-para3-span">
                    official MeetMeFit website
                  </span>
                  . Here, I had to create a frontend as well as a backend. The
                  objective of creating this website was for marketing and other
                  purposes. It was a frontend oriented website.
                </p>
              </div>
            </Fade>
          </div>

          {/* second subdiv */}
          <div className="workexperience-tablediv row">
            <Fade bottom duration={1500}>
              <div className="workexperience-tablediv-1 col-sm-12 col-md-12 col-lg-6">
                <p className="workexperience-tablediv-1-para1">
                  WEB DEVELOPMENT INTERN
                </p>
                <h4 className="workexperience-tablediv-1-heading">
                  JIO Platforms Limited
                </h4>
              </div>
            </Fade>

            <Fade bottom duration={1500}>
              <div className="workexperience-tablediv-2 col">
                <p className="workexperience-tablediv-2-para1">
                  It was a 1 month internship. This internship helped me in
                  understanding the working of a large corporate giant like JIO.
                </p>
                <p className="workexperience-tablediv-2-para2">
                  I was given a few frontend tasks. Apart from that, I was told
                  to identify new features for future releases and to improve
                  the existing UI experience.
                </p>
                <p className="workexperience-tablediv-2-para3">
                  I worked on technologies like AngularJS, TypeScript and
                  Leaflet library.
                </p>
              </div>
            </Fade>
          </div>
        </div>

        {/* Projects */}
        <div className="resume-projects">
          <Fade left duration={1500}>
            <h4 className="projects-heading">Projects</h4>
          </Fade>
          <Fade bottom duration={1500}>
            <div className="d-flex flex-row flex-nowrap overflow-auto projects-parent-card">
              {/* CARD1 */}
              <a
                href="https://github.com/NinadWalanj/React-Weather-Application"
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card projects-main-card">
                  <div className="card-header projects-main-card-heading">
                    React Weather App
                  </div>
                  <div className="card-body">
                    <p className="card-text projects-main-card-para">
                      Weather application written in React.
                    </p>
                    <p className="card-text projects-main-card-para">
                      15 Feb 2020
                    </p>
                  </div>
                </div>
              </a>
              {/* CARD2 */}
              {/* <div className="card card-block">Card</div> */}
              {/* CARD3 */}
              {/* <div className="card card-block">Card</div> */}
            </div>
          </Fade>
        </div>

        {/* skills */}
        <div className="resume-skills">
          <Fade left duration={1500}>
            <h4 className="skills-heading">Skills & Expertise</h4>
          </Fade>

          <Fade bottom duration={1500}>
            <div className="skills-maindiv">
              {/* subdiv1 */}
              <div className="skills-subdiv1">
                {/* <img
                  src={html}
                  alt="html-icon"
                  className="skills-subdiv1-icon"
                /> */}
                <LazyImage
                  className="skills-subdiv1-icon"
                  src={html}
                  alt="html-icon"
                  placeholder={({ imageProps, ref }) => (
                    <img
                      ref={ref}
                      src="/img/porto_buildings_lowres.jpg"
                      alt={imageProps.alt}
                    />
                  )}
                  actual={({ imageProps }) => <img {...imageProps} />}
                />
                <p className="skills-subdiv1-para">HTML + CSS</p>
              </div>

              {/* subdiv2 */}
              <div className="skills-subdiv2">
                <LazyImage
                  className="skills-subdiv2-icon"
                  src={js}
                  alt="js-icon"
                  placeholder={({ imageProps, ref }) => (
                    <img
                      ref={ref}
                      src="/img/porto_buildings_lowres.jpg"
                      alt={imageProps.alt}
                    />
                  )}
                  actual={({ imageProps }) => <img {...imageProps} />}
                />
                <p className="skills-subdiv2-para">Javascript</p>
              </div>

              {/* subdiv3 */}
              <div className="skills-subdiv3">
                <LazyImage
                  className="skills-subdiv3-icon"
                  src={mern}
                  alt="mern-icon"
                  placeholder={({ imageProps, ref }) => (
                    <img
                      ref={ref}
                      src="/img/porto_buildings_lowres.jpg"
                      alt={imageProps.alt}
                    />
                  )}
                  actual={({ imageProps }) => <img {...imageProps} />}
                />
                <p className="skills-subdiv3-para">MERN</p>
              </div>

              {/* subdiv4 */}
              <div className="skills-subdiv4">
                <LazyImage
                  className="skills-subdiv4-icon"
                  src={git}
                  alt="git-icon"
                  placeholder={({ imageProps, ref }) => (
                    <img
                      ref={ref}
                      src="/img/porto_buildings_lowres.jpg"
                      alt={imageProps.alt}
                    />
                  )}
                  actual={({ imageProps }) => <img {...imageProps} />}
                />
                <p className="skills-subdiv4-para">Git + Github</p>
              </div>

              {/* subdiv5 */}
              <div className="skills-subdiv5">
                <LazyImage
                  className="skills-subdiv5-icon"
                  src={python}
                  alt="python-icon"
                  placeholder={({ imageProps, ref }) => (
                    <img
                      ref={ref}
                      src="/img/porto_buildings_lowres.jpg"
                      alt={imageProps.alt}
                    />
                  )}
                  actual={({ imageProps }) => <img {...imageProps} />}
                />
                <p className="skills-subdiv5-para">Python</p>
              </div>

              {/* subdiv6 */}
              <div className="skills-subdiv6">
                <LazyImage
                  className="skills-subdiv6-icon"
                  src={databases}
                  alt="databases-icon"
                  placeholder={({ imageProps, ref }) => (
                    <img
                      ref={ref}
                      src="/img/porto_buildings_lowres.jpg"
                      alt={imageProps.alt}
                    />
                  )}
                  actual={({ imageProps }) => <img {...imageProps} />}
                />
                <p className="skills-subdiv6-para">Databases</p>
              </div>

              {/* subdiv7 */}
              <div className="skills-subdiv7">
                <LazyImage
                  className="skills-subdiv7-icon"
                  src={oop}
                  alt="oop-icon"
                  placeholder={({ imageProps, ref }) => (
                    <img
                      ref={ref}
                      src="/img/porto_buildings_lowres.jpg"
                      alt={imageProps.alt}
                    />
                  )}
                  actual={({ imageProps }) => <img {...imageProps} />}
                />
                <p className="skills-subdiv7-para">OOP</p>
              </div>
            </div>
          </Fade>
        </div>

        {/* Github */}
        <Fade bottom duration={1500}>
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
        </Fade>
      </div>
    </motion.div>
  );
}

export default Resume;
