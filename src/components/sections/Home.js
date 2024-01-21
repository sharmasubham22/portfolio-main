import React from "react";
import Hero from "./Hero";
import BioMarquee from "../BioMarquee";
import GetInTouch from "./GetInTouch";
import { headSvg } from "../../images/assets";
import Profile from "./Profile";
import Projects from "./Projects";

export default function Home() {
  return (
    <>
      <main>
        <section
          id="home-section1"
          className="d-flex hero-section justify-content-center align-items-center">
          <Hero />
        </section>
        <BioMarquee />
        <section id="home-section2" style={{ marginTop: "100px" }}>
        <Projects/>
        </section>
        <section id="home-section3" style={{ marginTop: "100px" }}>
          <p className="text-center section-head">
            About{headSvg}
            <i style={{ fontWeight: "700" }}>Me</i>
          </p>
          <header className="mb-4">
            <div>
              <p>Detail-Oriented</p>
              <span className="spacer"></span>
              <p>Curious</p>
              <span className="spacer"></span>
              <p>Enthusiast</p>
            </div>
          </header>
          <Profile />
        </section>
        <section id="home-section4" style={{ marginTop: "100px" }}>
          <p className="text-center section-head">
            Contact{headSvg}
            <i style={{ fontWeight: "700" }}>Me</i>
          </p>
          <header className="mb-5">
            <div>
              <p>Just say Hi</p>
              <span className="spacer"></span>
              <p>Send a Message</p>
              <span className="spacer"></span>
              <p>Get in Touch</p>
            </div>
          </header>
          <GetInTouch />
        </section>
        {/* <MarqueeComp /> */}
      </main>
    </>
  );
}
