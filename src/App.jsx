import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";

function App() {
  return (
    <>
      <div className="main">
        <NavBar />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
