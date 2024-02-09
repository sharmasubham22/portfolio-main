import React from 'react'
import { featured, others } from "../../data/ProjectsData";
import OtherProjects from "../OtherProjects";
import FeaturedProjects from "../FeaturedProjects";
import styled from "styled-components";
import { headSvg } from "../../images/assets";

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

      .left-item {
        padding: 2vw;
      }

      .other-projects {
        font-family: var(--heavy-font);
        font-weight: 700;
        color: var(--text-color);
        font-size: clamp(6vw, 8vw, 10vw);
        text-transform: uppercase;
      }

      .left-item p {
        font-family: var(--general-font);
        font-size: clamp(15px, 2vw, 20px);
        color: var(--content-color);
        font-weight: 400;
      }
    `;
  return (
    <StyledProjects className="container-fluid ">
      <p className="text-center section-head">
        My{headSvg}
        <i style={{ fontWeight: "700" }}>Work</i>
      </p>
      <header className="mb-4">
        <div>
          <p>Projects</p>
          <span className="spacer"></span>
          <p>Web Applications</p>
          <span className="spacer"></span>
          <p>Experimentals</p>
        </div>
      </header>

      <div className="row row-cols-1 row-cols-lg-2 p-md-5">
        {featured.map((element, index) => {
          return (
            <div
              className="col d-flex justify-content-center align-items-center p-3"
              key={index}
            >
              <FeaturedProjects
                title={element.title}
                subHeading={element.subHeading}
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
      <div>
        {/* <p
          className="text-center mb-5 section-head"
          style={{ marginTop: "100px" }}
        >
          Other{headSvg}
          <i style={{ fontWeight: "700" }}>Projects</i>
        </p> */}
        <div className="row row-cols-1 row-cols-xl-2 mt-5 g-4">
          <div className="col left-item">
            <h1 className="other-projects">Other Projects</h1>
            <p>
              This area serves as an acknowledgment to my curiosity and desire
              for exploration, ranging from personal projects that showcase my
              own viewpoint to some experimental projects that explore new areas of tech stacks.
            </p>
          </div>
          <div className="col">
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
        </div>
      </div>
    </StyledProjects>
  );
}
