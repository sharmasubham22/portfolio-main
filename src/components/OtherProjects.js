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
      font-size: clamp(18px, 2vw, 24px);
      font-family: var(--heavy-font);
      margin-bottom: 3%;
      font-weight: 400;
      line-height: 1;
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

  const navigate = (url) => {
   window.open(url, "_blank");
  };

  return (
    <>
      <Link to={git} target="_blank" style={{textDecoration:"none"}}>
        <StyledCard className="elem">
          <div className="overlay"></div>
          <div className="w-100">
            <div className="d-flex justify-content-between">
              <div style={{ padding: "1.5vw 0" }}>
                <h2 className="title">
                  {title} <i className="ph ph-arrow-up-right"></i>
                </h2>
                <p className="techs">
                  <i>{techItem}</i>
                </p>
              </div>
              <div className="d-flex align-items-center fs-2">
                <div
                  className="project-link"
                  onClick={() => navigate(git)}
                  target="_blank"
                >
                  <i className="ph ph-github-logo"></i>
                </div>

                {!demo ? (
                  ""
                ) : (
                  <div className="bd-highlight">
                    <div
                      className="project-link"
                      // to={demo}
                      onClick={() => navigate(demo)}
                      target="_blank"
                      style={{ marginLeft: "35px" }}
                    >
                      <i className="ph ph-arrow-square-out"></i>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </StyledCard>
      </Link>
    </>
  );
}
