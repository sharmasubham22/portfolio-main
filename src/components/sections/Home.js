import React from "react";
import Hero from "./Hero";
import GetInTouch from "./GetInTouch";
import { headSvg } from "../../images/assets";
import Profile from "./Profile";
import Projects from "./Projects";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <main>
        <section
          id="home"
          className="d-flex section justify-content-center align-items-center"
        >
          <Hero />
          <div className="hero-gradient"></div>
        </section>
        <section id="work" className="section" style={{ marginTop: "100px"}}>
          <p className="text-center section-head">
            My{headSvg}
            <i style={{ fontWeight: "700" }}>Work</i>
          </p>
          <header style={{marginBottom:"7%"}}>
            <div>
              <p>Projects</p>
              <span className="spacer"></span>
              <p>Web Applications</p>
              <span className="spacer"></span>
              <p>Experimentals</p>
            </div>
          </header>
          <Projects />
        </section>
        <section id="about" className="section" style={{ marginTop: "100px" }}>
          <p className="text-center section-head">
            About{headSvg}
            <i style={{ fontWeight: "700" }}>Me</i>
          </p>
          <header style={{ marginBottom: "7%" }}>
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
        <section
          id="contact"
          className="section"
          style={{ marginTop: "100px" }}
        >
          <p className="text-center section-head">
            Contact{headSvg}
            <i style={{ fontWeight: "700" }}>Me</i>
          </p>
          <header style={{ marginBottom: "7%" }}>
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
        <section>
          <Footer />
        </section>
        {/* <MarqueeComp /> */}
      </main>
    </>
  );
}
