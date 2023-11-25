import React from "react";
import Profile from "./sections/Profile";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import GetInTouch from "./GetInTouch";
import Hero from "./sections/Hero";

export default function About() {
  return (
    <div>
      <main>
        <section
          className={`w-100 d-flex flex-column justify-content-center align-items-center`}
        >
          <Hero />
        </section>
        <section>
          <Profile />
        </section>
        <section
          className={`w-100  d-flex justify-content-center align-items-center`}
        >
          <Experience />
        </section>
        <section
          className={`w-100 my-5 d-flex justify-content-center align-items-center`}
        >
          <Skills />
        </section>
        <section>
          <GetInTouch />
        </section>
      </main>
    </div>
  );
}
