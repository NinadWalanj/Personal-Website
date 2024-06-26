import React from "react";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-div container">
      <a
        href="https://www.instagram.com/ninad.walanj/"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-div-link1"
      >
        Instagram
      </a>
      <a
        href="https://www.linkedin.com/in/ninad-walanj-0040031b6/"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-div-link2"
      >
        LinkedIn
      </a>

      <p className="footer-div-link3">
        © {currentYear} Ninad Walanj. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
