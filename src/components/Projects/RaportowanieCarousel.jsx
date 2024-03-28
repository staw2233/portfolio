import React from "react";
import Slider from "react-slick";
import "./Projects.css";

const RaportowanieCarousel = () => {
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
      <div className="slide rp1">
        <img src="../images/rap1.png" alt="" />
        <p>
          After selecting the folder where sample photos (both correct and
          incorrect) will appear, the program begins monitoring this folder.
          When an inconsistent sample appears, it will prompt us to specify the
          type of defect encountered. A window with predefined defects will
          appear due to the repeatability of their occurrence. Previously, the
          operator had to manually write it down on a paper in the right place.
          (About an hour of extra work)
        </p>
      </div>
      <div className="slide rp2">
        <img src="../images/rap2.png" alt="" />
        <p>
          it adds the sample name, photo, and selected type of defect to our NG
          Report, as described above.
        </p>
      </div>
      <div className="slide rp3">
        <img src="../images/rap3.png" alt="" />
        <p>
          At any time with the push of a button (first or second shift,
          respectively), the operator can check how many pictures and
          measurements (Number of pictures with measurements/Total number of
          pictures taken) he has taken on his shift.
        </p>
      </div>
      <div className="slide rp4">
        <img src="../images/rap4.png" alt="" />
        <p>
          Due to not measuring from the sample with the smallest number to the
          one with the largest, the samples in the report are not in sequence.
          Using the "Sort" button, the program automatically puts them in the
          correct order in the table
        </p>
      </div>
      <div className="slide rp5">
        <img src="../images/rap5.png" alt="" />
        <p>
          The frame progress button creates for us an array with listed samples
          . This allows us to monitor how the measurement of the frame is going.
          The number of samples is large, so it can happen that the operator
          makes a mistake (e.g. takes a photo, but does not take a measurement),
          then our application informs us about it, as well as informs us about
          samples which were had defect.
        </p>
      </div>
      <div className="slide rp6">
        <img src="../images/rap6.png" alt="" />
        <p>
          In addition, we can use this application to make a graph of how often
          a given sample was NG. The program then analyzes our selected NG
          Reports and creates graphs for us in how many such reports the sample
          was NG (in percentage)
        </p>
      </div>
    </Slider>
  );
};

export default RaportowanieCarousel;
