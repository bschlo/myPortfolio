import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";

const NavBar = () => {
  return (
    <div className="nav-main">
      <div className="nav-left-container">
      <a href="#home" className="nav-left">
          Home
        </a>
        <a href="#portfolio" className="nav-left">
          Portfolio
        </a>
        <a href="#about" className="nav-left">
          About
        </a>
        <a href="#contact" className="nav-left">
          Contact
        </a>
      </div>
      <div className="nav-right-container">
        <a
          href="https://github.com/bschlo"
          target="_blank"
          rel="noopener noreferrer"
          className="github"
        >
          <IoLogoGithub size={50} color="white" />
        </a>
        <a
          href="https://www.linkedin.com/in/benjamin-schloss/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <FaLinkedin size={50} color="white" />
        </a>
        <a href="mailto:benschloss2@gmail.com" className="mail">
          <MdOutlineMailOutline size={50} color="white" />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
