import React from "react";
import "./Home.css";
import { FaReact } from "react-icons/fa";


const Home = () => {

  return (
    <div className="home-main">
      <div className="home-intro-container">
        <div className="home-intro">
          I'm Ben. I am software engineer from New York.
        </div>
        <img src="./face.jpg" className="me-img" />
      </div>
      <div className="stack">
        <img src="./javascript.png" />
        <img src="./python.png" />
        <FaReact size={70} color="#61dbfb"/>
        <img src="./node.png" />
        <div className="django">
          <img src="./django.svg" />
        </div>
        <img src="./html.png" />
        <img src="./css.png" />
        <div className="databases">
          <img src="./psql.png" />
          <img src="./mongo.png" />
        </div>
      </div>
      <div className="home-line-break"> </div>
    </div>
  );
};

export default Home;
