import React from 'react'
import { featured, others } from "../../data/ProjectsData";
import OtherProjects from "../OtherProjects";
import FeaturedProjects from "../FeaturedProjects";
import styled from "styled-components";

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
        font-size: var(--content-font);
        color: var(--content-color);
        font-family: var(--general-font);
      }

      .featured {
        border: 0.3px solid var(--border-color);
        border-radius: 3.3vh;
        padding: clamp(5px, 2vw, 10px);
        background: var(--card-color);
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
          rgba(0, 0, 0, 0.22) 0px 15px 12px;
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
        font-size: var(--content-font);
        color: var(--content-color);
        font-weight: 400;
      }
      .project-container {
        display: flex;
        align-items: center;
        padding: 0 2vw;
      }

      .project-item2 {
        flex-grow: 1;
        border: 0.3px solid var(--border-color);
        border-radius: 2.5vh;
        padding: 7px;
        background: var(--card-color);
        transition: all 300ms ease-in-out;

        &:nth-child(2) {
          margin: 0 20px;
        }
      }
      .project-item2:hover {
        flex-grow: 1.6;
        // background: green;
      }

      .detail-section2 {
        // margin-bottom: 7px;
        padding: 20px;
        color: white;
        width: 100%;
        bottom: 0px;
        left: 0px;
        border: 0.3px solid var(--border-color);
        border-radius: 2vh;
        transition: 0.3s ease;
        background-color: var(--project-bg);

        &:hover {
          background-color: red;
        }
      }

      .detail-section2 .project-link {
        color: white;
      }
    `;
  return (
    <StyledProjects className="container-fluid ">
      {/* <div className="project-container">
        <div className="project-item2">
          <div>
            <div className="detail-section2 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <h2 className="sub-heading">My Notebook App</h2>
              </div>
              <div className="links">
                <i class="fa-solid fa-code"></i>

                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="project-item2">
          <div>
            <div className="detail-section2 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <h2 className="sub-heading">My Notebook App</h2>
              </div>
              <div className="links">
                <i class="fa-solid fa-code"></i>

                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="project-item2">
          <div>
            <div className="detail-section2 d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <h2 className="sub-heading">My Notebook App</h2>
              </div>
              <div className="links">
                <i class="fa-solid fa-code"></i>

                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div
        className="container"
        // style={{ padding: "0 2vw" }}
      >
        {featured.map((element, index) => {
          return (
            <div className="mb-5 featured" key={index}>
              <FeaturedProjects
                title={element.title}
                subHeading={element.subHeading}
                description={element.description}
                techs={element.technologies}
                imageLink={element.imgLink}
                git={element.git}
                demo={element.demo}
                color={element.color}
              />
            </div>
          );
        })}
      </div>
      <div>
        <div className="row row-cols-1 row-cols-xl-2 mt-5 g-4">
          <div className="col left-item">
            <h1 className="other-projects">Other Projects</h1>
            <p>
              This area serves as an acknowledgment to my curiosity and desire
              for exploration, ranging from personal projects that showcase my
              own viewpoint to some experimental projects that explore new areas
              of tech stacks.
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
