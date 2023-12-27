import React from "react";
import FeaturedProjects from "../FeaturedProjects";
import projectsData from "../../data/Projects.json";
import styled from "styled-components";
import OtherProjects from "../OtherProjects";
import otherData from "../../data/Others";
import Reveal from "../Motion";
import { bullet4 } from "../../images/bullets";
import Hero from "./Hero";
import BioMarquee from "../BioMarquee";
import GetInTouch from "./GetInTouch";
import MarqueeComp from "../MarqueeComp";

export default function Projects() {
  const StyledProjects = styled.section`
    h1 {
      ${({ theme }) => theme.mixins.chip};
    }

    .connect {
      ${({ theme }) => theme.mixins.button};
      margin-bottm: 15px;
    }

    .contact-section {
      text-align: center;
    }

    .contact-section p {
      font-size: clamp(15px, 2vw, 20px);
      color: var(--content-color);
      font-family: var(--general-font);
    }
  `;

  document.title = "Subham Sharma | Portfolio";
  return (
    <>
      <main>
        <section
          id="home-section1"
          className="d-flex hero-section justify-content-center align-items-center"
        >
          <Hero />
        </section>
        <BioMarquee />
        <section id="home-section2">
          <StyledProjects>
            <div className="container" style={{ marginBottom: "2%" }}>
              <h1 className="my-5">My Work</h1>
              <Reveal>
                <h2
                  className="my-5"
                  style={{
                    fontFamily: "var(--heavy-font)",
                    color: "var(--text-color)",
                    fontSize: "clamp(50px, 8vw, 100px)",
                    textTransform: "uppercase",
                    fontWeight: "700",
                  }}
                >
                  Projects
                </h2>
              </Reveal>
              <Reveal>
                {projectsData.map((element, index) => {
                  return (
                    <div key={index}>
                      <FeaturedProjects
                        title={element.title}
                        description={element.description}
                        techs={element.technologies}
                        imageLink={element.imgLink}
                        git={element.git}
                        demo={element.demo}
                      />
                    </div>
                  );
                })}
              </Reveal>
              <h3 className="section-head d-flex" style={{ marginTop: "15%" }}>
                <div className="bullet-hashtag">{bullet4}</div> Other Projects
              </h3>

              <div className="row mt-5 row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {otherData.map((element2, index2) => {
                  return (
                    <div className="col" key={index2}>
                      <OtherProjects
                        title={element2.title}
                        description={element2.description}
                        techs={element2.technologies}
                        git={element2.git}
                        demo={element2.demo}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </StyledProjects>
        </section>
        <section id="home-section3" className="section">
          <GetInTouch />
        </section>
        <MarqueeComp />
      </main>
    </>
  );
}
