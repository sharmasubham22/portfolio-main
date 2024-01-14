import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function OtherProjects(props) {
  let { title, techs, git, demo } = props;

  const techItem = techs.join(" • ");

  const StyledCard = styled.section`
    font-family: var(--general-font);

    .techs {
      color: var(--content-color);
      font-size: clamp(15px, 2vw, 18px);
      font-weight:200;
    }
    .project-link {
      text-decoration: none;
      color: var(--text-color);
      transition: 0.3s;
    }

    .project-link:hover {
      color: var(--highlight-color);
    }

  `;

  return (
    <>
      <StyledCard className="elem">
        <div className="overlay"></div>
        <div className="w-100">
          <div className="d-flex justify-content-between">
            <div>
              <h2 className="title">{title}</h2>
              <p className="techs">{techItem}</p>
            </div>
            <div className="d-flex align-items-center fs-2">
              <Link className="project-link" to={git} target="_blank">
                <i className="ph ph-github-logo"></i>
              </Link>

              {!demo ? (
                ""
              ) : (
                <div className="bd-highlight">
                  <Link
                    className="project-link"
                    to={demo}
                    target="_blank"
                    style={{ marginLeft: "35px" }}
                  >
                    <i className="ph ph-arrow-square-out"></i>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </StyledCard>
    </>
  );
}
