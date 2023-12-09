import React from "react";
import FeaturedProjects from "../FeaturedProjects";
import projectsData from "../../data/Projects.json";
import styled from "styled-components";
import OtherProjects from "../OtherProjects";
import otherData from "../../data/Others.json";
import { Link } from "react-router-dom";
import Reveal from "../Motion";
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
      margin: 30px 0px;
    }

    .container {
      margin-top: 10%;
    }

    .fa-circle-arrow-down {
      color: var(--content-color);
      font-size: clamp(24px, 3vw, 30px);
    }

    @media (max-width: 784px) {
      .container {
        margin-top: 20%;
      }
    }
  `;

  document.title = "Work | Subham Sharma | Portfolio";
  return (
    <>
      <StyledProjects>
        <div className="container" style={{ marginBottom: "5%" }}>
          <h1>My Work</h1>
          <Reveal>
            <h2
              className="my-5"
              style={{
                fontFamily: "var(--heavy-font)",
                color: "var(--text-color)",
                fontSize: "clamp(50px, 4vw, 8vw)",
                textTransform: "uppercase",
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
          <h3 className="section-head" style={{ marginTop: "15%" }}>
            <span style={{ color: "var(--highlight-color)" }}>▾ </span>Other
            Projects
            <span style={{ color: "var(--highlight-color)" }}> ▾</span>
          </h3>

          <div className="row my-5 row-cols-1 row-cols-md-2 row-cols-lg-2 g-4">
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
          <div className="contact-section">
            <p>
              {" "}
              Did you like my profile? Click below to connect!
            </p>
            <i class="fa-solid fa-circle-arrow-down"></i>
          </div>
        </div>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <MarqueeComp />
        </Link>
      </StyledProjects>
    </>
  );
}
