import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div id="hero" className="component-spacing">
          <Hero />
        </div>
        <div id="skills" className="component-spacing">
          <Skills />
        </div>
        <div id="projects" className="component-spacing">
          <Projects />
        </div>
      </div>
    </>
  );
};

export default App;
