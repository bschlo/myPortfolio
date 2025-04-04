import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-main">
      <div className="nav-left-container">
        <div className="nav-left">Home</div>
        <div className="nav-left">About</div>
        <div className="nav-left">Contact</div>
      </div>
      <div className="nav-right-container">
        <a
          href="https://github.com/bschlo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="github">
            <img src="./download-2.png" alt="GitHub" />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/benjamin-schloss/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <img src="./LinkedIn_Logo_2013.svg.png" alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
