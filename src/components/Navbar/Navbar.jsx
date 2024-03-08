import React from "react";
import "./Navbar.css";
import { useState } from "react";
import MobileNav from "./MobileNav/MobileNav";
const Navbar = () => {
  const scrollTo = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src="/images/logo.png" alt="logo" />

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
            <li>
              <a className="menu-item">Contact</a>
            </li>
          </ul>
          <button
            className="contact-btn"
            onClick={() => console.log("Hire me button clicked")}
          >
            Contact now
          </button>

          <button
            className={`menu-btn ${openMenu ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
