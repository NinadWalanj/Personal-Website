import React from "react";
import "./ErrorPage.css";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

function ErrorPage() {
  const history = useHistory();

  function handleClick() {
    let path = "/";
    history.push(path);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="errorpage container">
        <h1 className="errorpage-div-heading">404 - Looks like you're lost.</h1>
        <div className="errorpage-div-paradiv">
          <p className="errorpage-div-para1">
            Maybe this page used to exist or you just spelled something wrong.
          </p>
          <p className="errorpage-div-para2">
            Chances are you spelled something wrong, so can you double check the
            url?
          </p>
        </div>
        <button className="errorpage-div-button" onClick={handleClick}>
          Return Home
        </button>
      </div>
    </motion.div>
  );
}

export default ErrorPage;
