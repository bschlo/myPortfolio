import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <div className="main">
        <NavBar />
        <div id="home"><Home /></div>
        <div id="portfolio"><Portfolio /></div>
        <div id="about"><About /></div>
      </div>
      <Footer />
    </>
  );
}

export default App;
