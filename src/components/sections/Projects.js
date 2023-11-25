import React from "react";
import FeaturedProjects from "../FeaturedProjects";
import projectsData from '../../data/Projects.json'
import styled from "styled-components";
import OtherProjects from "../OtherProjects";
import otherData from '../../data/Others.json'
import { Link } from "react-router-dom";

export default function Projects() {
    const StyledProjects = styled.section`
      h1 {
        ${({ theme }) => theme.mixins.chip};
      }

      .connect {
        ${({ theme }) => theme.mixins.button};
      }

      p {
        color: var(--content-color);
        font-family: sono;
      }

      .contact-section {
        text-align: center;
      }
    `;

  return (
    <div className="container" style={{ marginTop: "5%", marginBottom: "5%" }}>
      <StyledProjects>
        <h1>My Work</h1>
        <h2
          className="my-5"
          style={{
            fontFamily: "shapiro",
            color: "var(--text-color)",
            fontSize: "clamp(40px, 4vw, 8vw)",
            textTransform: "uppercase",
          }}
        >
          Projects
        </h2>
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
        <h3 className="section-head" style={{ marginTop: "10%" }}>
          Other Projects
        </h3>
        <div className="row my-5 row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {otherData.map((element, index) => {
            return (
              <div className="col" key={index}>
                <OtherProjects
                  title={element.title}
                  description={element.description}
                  techs={element.technologies}
                  git={element.git}
                  demo={element.demo}
                />
              </div>
            );
          })}
        </div>
        <div className="contact-section">
          <p> Did you like my profile?</p>
          <Link type="button" className="connect" to="/contact">
            Get in Touch!
          </Link>
        </div>
      </StyledProjects>
    </div>
  );
}
