import React from "react";
import Slider from "react-slick";
import "./Projects.css";

const OrgCarosuel = () => {
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
      <div className="slideOrg1 slide ">
        <img src="../images/org2.jpg" alt="gap1" />
        <p>
          After selecting the folder that the application is supposed to
          organize, the program sorts the files for us based on their extension
          in a blink of an eye.
        </p>
      </div>
      <div className="slideOrg2 slide">
        <img src="../images/org3.jpg" alt="Project 2" />
        <p>
          This makes that the folder that used to contain different files and in
          which we had to look for the file we are interested in is now made up
          of subfolders so that if we are interested in, for example, a picture
          we know to look in the jpg/png folder.
        </p>
      </div>
    </Slider>
  );
};

export default OrgCarosuel;
