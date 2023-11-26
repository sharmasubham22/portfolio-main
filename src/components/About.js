import React from "react";
import Profile from "./sections/Profile";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import GetInTouch from "./sections/GetInTouch";
import Hero from "./sections/Hero";
import MarqueeComp from "./MarqueeComp";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <main>
        <nav class="navigation">
          <ul>
            <li>
              <a href="#section1">
                <span class="nav__item" for="section1"></span>
              </a>
              <a href="#section2">
                <span class="nav__item" for="section2"></span>
              </a>
              <a href="#section3">
                <span class="nav__item" for="section3"></span>
              </a>
              <a href="#section4">
                <span class="nav__item" for="section4"></span>
              </a>
              <a href="#section5">
                <span class="nav__item" for="section5"></span>
              </a>
            </li>
          </ul>
        </nav>
        <section
          id="section1"
          className="section"
        >
          <Hero />
        </section>
        <section
          id="section2"
          className="section"
        >
          <Profile />
        </section>
        <section
          id="section3"
          className="section"
        >
          <Experience />
        </section>
        <section
          id="section4"
          className="section"
        >
          <Skills />
        </section>
        <section
          id="section5"
          className="section"
        >
          <GetInTouch />
        </section>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <MarqueeComp />
        </Link>
      </main>
    </div>
  );
}
