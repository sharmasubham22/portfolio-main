import React from "react";
import Profile from "./sections/Profile";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Work from "./sections/Work";

export default function About() {
  // let location = useLocation();
  document.title = "About | Subham Sharma";
  return (
    <>
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
                <a
                  href="#section6"
                  className={`nav__item ${
                    location.pathname === "/#section6" ? "active" : ""
                  }`}
                ></a>
              </li>
            </ul>
          </nav> */}
          <section id="section1" className="section">
            <Profile />
          </section>
          <section id="section2" className="section ">
            <Experience />
          </section>
          <section id="section3" className="section ">
            <Skills />
          </section>
          <section id="section4" className="section">
            <Work />
          </section>
        </main>
      </div>
    </>
  );
}
