import React from "react";
import "./MobileNav.css";
const MobileNav = ({ isOpen, toggleMenu }) => {
  const scrollTo = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img
            onClick={() => scrollTo("hero")}
            className="logo"
            src="../images/logo.png"
            alt="logo"
          />
          <ul>
            <li onClick={() => scrollTo("hero")}>
              <a className="menu-item">Home</a>
            </li>
            <li onClick={() => scrollTo("skills")}>
              <a className="menu-item">Skills</a>
            </li>
            <li onClick={() => scrollTo("projects")}>
              <a className="menu-item">Projects</a>
            </li>
            <li onClick={() => scrollTo("contact")}>
              <a className="menu-item">Contact</a>
            </li>
            <button
              className="contact-btn"
              onClick={() => scrollTo("projects")}
            ></button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
