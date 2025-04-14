import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Hamburger from "hamburger-react";
import { Fade } from "react-awesome-reveal";

export default function Navbar() {
  return (
    <div className="Navbar-main-div">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Fade triggerOnce="true" duration={1500} fraction={0.5}>
            <Link className="logolink " to="/">
              NINAD WALANJ
            </Link>
          </Fade>
          <Fade triggerOnce="true" duration={1500} fraction={0.5}>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="toggler-icon">
                <Hamburger
                  className="menu-img"
                  color="white"
                  size={25}
                  label="Show menu"
                />
              </span>
            </button>
          </Fade>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              {/* <li className="navbar-item-1 nav-item me-lg-5 mt-sm-3 mt-md-3 mt-lg-2">
                <NavLink
                  className="link1"
                  to="/resume"
                  exact="true"
                  activeclassname="link1-active"
                >
                  Resume
                </NavLink>
              </li> */}
              <Fade triggerOnce="true" duration={1500} fraction={0.5}>
                <li className="navbar-item-2 nav-item ">
                  <NavLink
                    className="link2"
                    to="/about"
                    exact="true"
                    activeclassname="link2-active"
                  >
                    ABOUT
                  </NavLink>
                </li>
              </Fade>
              <Fade triggerOnce="true" duration={1500} fraction={0.5}>
                <li className="navbar-item-3 nav-item">
                  <NavLink
                    className="link3"
                    to="/contact"
                    exact="true"
                    activeclassname="link3-active"
                  >
                    CONTACT
                  </NavLink>
                </li>
              </Fade>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
