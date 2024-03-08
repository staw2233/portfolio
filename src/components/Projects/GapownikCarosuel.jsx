import React from "react";
import Slider from "react-slick";
import "./Projects.css";

const GapownikCarosuel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <Slider {...settings}>
      <div className="slideGap1">
        <img src="../images/gap1.jpg" alt="gap1" />
        <p>
          Depending on the selected frame (front or rear) and the selected Excel
          files, it dynamically generates a name for a new Excel file containing
          charts for that specific time interval.
        </p>
      </div>
      <div className="slideGap2">
        <img src="../images/gap2.png" alt="Project 2" />
        <p>
          Gapownik knows perfectly well which samples we'll find in the front
          and which in the rear frame, so it dynamically assigns to each sample
          the gap value reached by the sample from a given report
          (chronologically).
        </p>
      </div>
      <div className="slideGap3">
        <img src="../images/gap3.png" alt="Project 2" />
        <p>
          Gapownik knows that a value above 1000 micrometers is non-compliant
          with the customer standard, so it highlights this in red to draw
          attention to the fact that the limit has been exceeded. This
          significantly facilitates the user's search for critical samples.
        </p>
      </div>
    </Slider>
  );
};

export default GapownikCarosuel;
