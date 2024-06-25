import React from "react";
import "./ErrorPage.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Fade, Zoom } from "react-awesome-reveal"; // Updated to use react-awesome-reveal

function ErrorPage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div className="errorpage container">
      <Fade direction="up" triggerOnce="true" duration={1000}>
        <h1 className="errorpage-div-heading">404 - Looks like you're lost.</h1>
      </Fade>

      {/* <Fade direction="up" duration={1500}>
          <div className="errorpage-div-paradiv">
            <p className="errorpage-div-para1">
              Maybe this page used to exist or you just spelled something wrong.
            </p>
            <p className="errorpage-div-para2">
              Chances are you spelled something wrong, so can you double check
              the URL?
            </p>
          </div>
        </Fade> */}
      <Fade direction="up" triggerOnce="true" duration={1000}>
        <button className="errorpage-div-button" onClick={handleClick}>
          Return Home
        </button>
      </Fade>
    </div>
  );
}

export default ErrorPage;
