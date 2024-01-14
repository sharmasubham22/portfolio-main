import React from "react";
import FeaturedProjects from "../FeaturedProjects";
import styled from "styled-components";
import OtherProjects from "../OtherProjects";
import Reveal from "../Motion";
import Hero from "./Hero";
import BioMarquee from "../BioMarquee";
import GetInTouch from "./GetInTouch";
import MarqueeComp from "../MarqueeComp";
import { featured, others } from "../../data/Projects";
// import Profile from "./Profile";

export default function Projects() {
  const StyledProjects = styled.section`

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
        <section id="home-section2" style={{ marginTop: "100px" }}>
          <Reveal>
            <StyledProjects style={{ marginBottom: "2%" }}>
              <div className="container">
                {featured.map((element, index) => {
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
              </div>
              <h6
                style={{
                  color: "var(--text-color)",
                  fontFamily: "var(--general-font)",
                  textTransform: "uppercase",
                  padding: "2vw",
                  fontSize: "clamp(15px, 2vw, 20px)",
                  fontWeight:"200"
                }}
              >
                <span
                  style={{
                    color: "var(--highlight-color)",
                  }}
                >
                  ●
                </span>{" "}
                Other Noteworthy Projects
              </h6>

              <div>
                {others.map((element2, index2) => {
                  return (
                    <div key={index2}>
                      <OtherProjects
                        title={element2.title}
                        techs={element2.technologies}
                        git={element2.git}
                        demo={element2.demo}
                      />
                    </div>
                  );
                })}
              </div>
            </StyledProjects>
          </Reveal>
        </section>
{/* <section>
  <Profile/>
</section> */}
        <section id="home-section3">
          <GetInTouch />
        </section>
        <MarqueeComp />
      </main>
    </>
  );
}
