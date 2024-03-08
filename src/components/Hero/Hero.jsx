import React from "react";
import "./Hero.css";
import TypeWriter from "react-typewriter";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content ">
        <h2>Unlocking Innovation with React & Python</h2>
        <TypeWriter typing={2}>
          <p>
            I am <b>Bartek</b>, a React/Python developer with a passion for
            creating efficient, scalable, and user-friendly applications.
          </p>
        </TypeWriter>
      </div>

      <div className="hero-img">
        <div>
          <div className="me-icon">
            <img src="../images/img1.png" alt="ja" />
          </div>
          <div className="tech-icons">
            <div className="lang-icon">
              <img src="../images/img2.png" alt="ja" />
            </div>
            <div className="lang-icon">
              <img src="../images/img3.png" alt="ja" />
            </div>
            <div className="lang-icon">
              <img src="../images/img4.png" alt="ja" />
            </div>
            <div className="lang-icon">
              <img src="../images/img5.png" alt="ja" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
