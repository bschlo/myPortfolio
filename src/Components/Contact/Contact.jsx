import React from "react";
import "./Contact.css";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact-main">
      <div className="contact-header">Contact Me</div>
      <div className="contact-icons">
        <a href="mailto:benschloss2@gmail.com" className="contact-mail">
          <MdOutlineMailOutline size={80} color="red" />
        </a>
        <a
          href="https://www.linkedin.com/in/benjamin-schloss/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-linkedin"
        >
          <FaLinkedin size={80} color="blue" />
        </a>
        <a
          href="https://github.com/bschlo"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-github"
        >
          <IoLogoGithub size={80} color="black" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
