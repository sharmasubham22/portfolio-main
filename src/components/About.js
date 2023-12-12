import React from "react";
import Profile from "./sections/Profile";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import GetInTouch from "./sections/GetInTouch";
import Hero from "./sections/Hero";
import MarqueeComp from "./MarqueeComp";
import { Link } from "react-router-dom";

export default function About() {
  // let location = useLocation();
  document.title="About | Subham Sharma | Portfolio";
  return (
    <div>
      <main>
        {/* <nav className="navigation">
          <ul>
            <li>
              <a
                href="#section1"
                className={`nav__item ${
                  location.pathname === "/#section1" ? "active" : ""
                }`}
              ></a>
              <a
                href="#section2"
                className={`nav__item ${
                  location.pathname === "/#section2" ? "active" : ""
                }`}
              ></a>
              <a
                href="#section3"
                className={`nav__item ${
                  location.pathname === "/#section3" ? "active" : ""
                }`}
              ></a>
              <a
                href="#section4"
                className={`nav__item ${
                  location.pathname === "/#section4" ? "active" : ""
                }`}
              ></a>
              <a
                href="#section5"
                className={`nav__item ${
                  location.pathname === "/#section5" ? "active" : ""
                }`}
              ></a>
            </li>
          </ul>
        </nav> */}
        <section
          id="section1"
          className="d-flex vh-100 justify-content-center align-items-center"
        >
          <Hero />
        </section>
        <section id="section2" className="section">
          <Profile />
        </section>
        <section id="section3" className="section ">
          <Experience />
        </section>
        <section id="section4" className="section ">
          <Skills />
        </section>
        <section id="section5" className="section ex-section">
          <GetInTouch />
        </section>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <MarqueeComp />
        </Link>
      </main>
    </div>
  );
}
