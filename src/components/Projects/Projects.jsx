import React from "react";
import { useState } from "react";
import GapownikCarosuel from "./GapownikCarosuel";
import RaportowanieCarousel from "./RaportowanieCarousel";
import { CSSTransition } from "react-transition-group";

import "./Projects.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const [selectedSlide, setSelectedSlide] = useState(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const handleSelectSlide = (slide) => {
    setSelectedSlide(slide);
  };
  const handleBackToProjects = () => {
    setSelectedSlide(null);
  };

  return (
    <section className="projects-container">
      <h5>Projects</h5>
      <div
        className="info"
        onClick={handleBackToProjects}
        dangerouslySetInnerHTML={{
          __html:
            selectedSlide === null
              ? "Click the slide to see more informations!"
              : "Click <strong>here</strong> to see other projects!",
        }}
      ></div>

      <div className="projects-content">
        <CSSTransition
          in={selectedSlide !== null}
          timeout={300}
          classNames="carousel"
          appear={true}
        >
          {selectedSlide === null ? (
            <Slider {...settings}>
              <div
                className="slide"
                onClick={() => handleSelectSlide("gapownik")}
              >
                <img src="../images/gapownik.png" alt="Project 1" />
                <h3>"Gapownik"</h3>
                <p>
                  is a desktop application that allows users to create reports
                  (charts) with Gap values, which are extracted from an Excel
                  report generated in the metallographic laboratory. It enables
                  users to check how and whether Gap values change over
                  days/months/years. It can create charts even from 100 or more
                  reports, which would be unattainable for a human in such a
                  short time, if at all.
                </p>
              </div>
              <div
                className="slide"
                onClick={() => handleSelectSlide("raportowanie")}
              >
                <img src="../images/raportowanie.png" alt="Project 2" />
                <h3>"Raportowanie Wad"</h3>
                <p>
                  This application allows the user to automate reporting of
                  encountered defects that do not meet customer requirements. It
                  generates an "NG Report" (name dynamically changed based on
                  the report creation date). This is up to 12h a week of time
                  savings for the leaders and coordinator but also saves time
                  for the operators.
                </p>
              </div>
            </Slider>
          ) : // Renderuj odpowiednią karuzelę na podstawie selectedSlide
          selectedSlide === "gapownik" ? (
            <GapownikCarosuel />
          ) : (
            <RaportowanieCarousel />
          )}
        </CSSTransition>
      </div>
    </section>
  );
};

export default Projects;
