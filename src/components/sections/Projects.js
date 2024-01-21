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
    `;
  return (
    <StyledProjects className="container-fluid">
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
        <p
          className="text-center mb-5 section-head"
          style={{ marginTop: "100px" }}
        >
          Other{headSvg}
          <i style={{ fontWeight: "700" }}>Projects</i>
        </p>
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
  );
}
