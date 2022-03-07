import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Hamburger from "hamburger-react";

export default function Navbar() {
  return (
    <div className="Navbar-main-div">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container mt-sm-3 mt-md-3 mt-lg-3 ">
          <Link className="logolink " to="/">
            Ninad Walanj
          </Link>
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
                size={"25"}
                label="Show menu"
              />
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="navbar-item-1 nav-item me-lg-5 mt-sm-3 mt-md-3 mt-lg-2">
                <NavLink
                  className="link1"
                  to="/resume"
                  exact
                  activeClassName="link1-active"
                >
                  Resume
                </NavLink>
              </li>
              <li className="navbar-item-2 nav-item me-lg-5 mt-sm-3 mt-md-3 mt-lg-2">
                <NavLink
                  className="link2"
                  to="/about"
                  exact
                  activeClassName="link2-active"
                >
                  About
                </NavLink>
              </li>
              <li className="navbar-item-3 nav-item me-lg-5 mt-sm-3 mt-md-3 mt-lg-2">
                <NavLink
                  className="link3"
                  to="/contact"
                  exact
                  activeClassName="link3-active"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
