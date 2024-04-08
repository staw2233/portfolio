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
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    afterChange: (current) => setCurrentSlide(current),
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
            currentSlide === 0 || currentSlide === 1 || currentSlide === 2
              ? ""
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
              <div className="slide">
                <img src="../images/ada1.jpg" alt="Project 1" />
                <h3>
                  Artist Portfolio
                  <br />
                  <a href="https://ada-bak.pl"> Click here to visit</a>
                </h3>
                <p>
                  I developed a portfolio website using React for an
                  artist/actress. The website showcases her work, skills, and
                  contact information. Here are some key features: <br />
                  <b>Database Integration:</b> The portfolio website includes a
                  backend connection to a database where the artist can manage
                  and update appointment slots for clients to reserve. Visitors
                  can explore the artist’s work and easily schedule appointments
                  through the website <br />
                  <b>Email Functionality: </b>
                  Visitors can directly contact the artist through the website.
                  I implemented an email feature that enables users to send
                  messages without leaving the site. <br />
                  <b>Responsive Design:</b> The website is fully responsive,
                  ensuring a seamless experience across different devices and
                  screen sizes. Feel free to explore the portfolio and get in
                  touch with the artist!
                </p>
              </div>
              <div className="slide">
                <img src="../images/exp1.jpg" alt="Project 2" />
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
              <div className="slide">
                <img src="../images/port1.jpg" alt="Project 3" />
                <h3>Portfolio</h3>
                <p>
                  Using React, I created a portfolio, it was created to attract
                  the eye and, at the same time, to show front-end skills and
                  not only back-end desktop applications.
                </p>
              </div>
              <div
                className="slide"
                onClick={() => handleSelectSlide("gapownik")}
              >
                <img src="../images/gapownik.png" alt="Project 4" />
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
                <img src="../images/raportowanie.png" alt="Project 5" />
                <h3>"Raportowanie Wad"</h3>
                <p>
                  This application allows the user to automate reporting of
                  encountered defects that do not meet customer requirements. It
                  generates an "NG Report" (name dynamically changed based on
                  the report creation date).
                </p>
              </div>
              <div
                className="slide"
                onClick={() => handleSelectSlide("organizer")}
              >
                <img src="../images/org1.jpg" alt="Project 6" />
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
