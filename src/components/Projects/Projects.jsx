import React from "react";
import { useState } from "react";
import GapownikCarosuel from "./GapownikCarosuel";
import RaportowanieCarousel from "./RaportowanieCarousel";
import { CSSTransition } from "react-transition-group";
import OrgCarosuel from "./OrgCarosuel";

import "./Projects.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const [selectedSlide, setSelectedSlide] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0); // nowy stan

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    afterChange: (current) => setCurrentSlide(current), // nowa funkcja
  };

  const handleSelectSlide = (slide) => {
    setSelectedSlide(slide);
    if (slide !== "Portfolio") {
      setSelectedSlide(slide);
    }
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
            currentSlide === 4
              ? ""
              : currentSlide === 3
              ? "There are no additional slides here if you want you can scroll higher and admire this portfolio yourself! : )"
              : selectedSlide
              ? "Click <b>here</b> to return to other projects! <i class='fas fa-arrow-left'></i>"
              : "Click the slide to see more informations!",
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
              {/* <div
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
              </div> */}
              {/* <div
                className="slide"
                onClick={() => handleSelectSlide("raportowanie")}
              >
                <img src="../images/raportowanie.png" alt="Project 2" />
                <h3>"Raportowanie Wad"</h3>
                <p>
                  This application allows the user to automate reporting of
                  encountered defects that do not meet customer requirements. It
                  generates an "NG Report" (name dynamically changed based on
                  the report creation date).
                </p>
              </div> */}
              <div
                className="slide"
                onClick={() => handleSelectSlide("organizer")}
              >
                <img src="../images/org1.jpg" alt="Project 3" />
                <h3>"FilesOrganizer"</h3>
                <p>
                  The File Organizer application, built using PyQt6, simplifies
                  the task of organizing files within a directory. With a
                  user-friendly interface, users can select a folder containing
                  unsorted files, and the application automatically categorizes
                  them based on file extensions into respective folders. A
                  progress bar keeps users informed about the sorting progress.
                </p>
              </div>
              <div className="slide">
                <img src="../images/port1.jpg" alt="Project 4" />
                <h3>Portfolio</h3>
                <p>
                  Using the latest front-end technologies, I created a portfolio
                  that many senior front-end developers could boast of. Created
                  with the help of React, it was created to attract the eye and,
                  at the same time, to show front-end skills and not only
                  back-end desktop applications.
                </p>
              </div>
              <div className="slide">
                <img src="../images/exp1.jpg" alt="Project 5" />
                <h3>Expense Tracker</h3>
                <p>
                  Expense Tracker is a Python application designed to help users
                  track their expenses efficiently. With its intuitive
                  interface, users can easily input their expenses, categorize
                  them, and monitor their spending habits over time. The
                  application also provides visual representation in the form of
                  pie charts, allowing users to gain insights into their
                  expenditure patterns at a glance.
                </p>
              </div>
            </Slider>
          ) : selectedSlide === "gapownik" ? (
            <GapownikCarosuel />
          ) : selectedSlide === "raportowanie" ? (
            <RaportowanieCarousel />
          ) : selectedSlide === "organizer" ? (
            <OrgCarosuel />
          ) : null}
        </CSSTransition>
      </div>
    </section>
  );
};

export default Projects;
