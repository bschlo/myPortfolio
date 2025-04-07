import React, { useState } from "react";
import "./Portfolio.css";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

const Portfolio = () => {
  const slides = [
    {
      title: "brokeREd",
      image: "./brokeREd.png",
      text: "brokeREd is a full stack web application which helps real estate finance brokers post deals for analysts to view. Analysts can create, view, update, and delete deals. Tech Stack: Javascript, React, Python, Django, PSQL",
      link: "https://brokered.netlify.app/",
    },
    {
      title: "Weather API",
      image: "./weather.png",
      text: "The Weather API is a web application using the free OpenWeatherMap API. Tech Stack: Javascript and React",
      link: "https://weather-api-omega-dusky.vercel.app/",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="portfolio-main">
      <div className="portfolio-header">
        Here are some projects I've worked on...
      </div>
      <div className="portfolio-content">
        <div className="portfolio-title">{slides[currentSlide].title}</div>
        <div className="portfolio-container">
          <MdNavigateBefore
            onClick={previousSlide}
            className="slide-controls"
            size={100}
          />
          <div className="slide-container">
            <a
              href={slides[currentSlide].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="slide">
                <div className="slide-text">{slides[currentSlide].text}</div>
                <img
                  src={slides[currentSlide].image}
                  alt="project"
                  className="slide-image"
                />
              </div>
            </a>
          </div>
          <MdNavigateNext
          onClick={nextSlide}
          className="slide-controls"
          size={100}
        />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
