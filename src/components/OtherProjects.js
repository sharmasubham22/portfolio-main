import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function OtherProjects(props) {
  let { title, techs, git} = props;

  const techItem = techs.join(" • ");

  const StyledCard = styled.section`
    font-family: var(--general-font);

    .techs {
      color: var(--text-color);
      font-size: clamp(18px, 2vw, 24px);
      font-family: var(--heavy-font);
      margin-bottom: 3%;
      font-weight: 400;
      line-height: 1;
    }
    .project-link {
      text-decoration: none;
      font-size: clamp(18px, 2vw, 22px);
      color: var(--text-color);
      transition: 0.3s;
    }

    .project-link:hover {
      transform: scale(1.2);
    }

    h2 .ph{
      color: var(--text-color);
    }
  `;

  // const navigate = (url) => {
  //  window.open(url, "_blank");
  // };

  return (
    <>
      <Link to={git} target="_blank" style={{ textDecoration: "none" }}>
        <StyledCard className="elem">
          <div className="overlay"></div>
          <div className="w-100">
            <div className="d-flex justify-content-between">
              <div style={{ padding: "1.5vw 0" }}>
                <h2 className="title">{title}</h2>
                <p className="techs">
                  <i>{techItem}</i>
                </p>
              </div>
              <div className="d-flex align-items-center">
                {/* <div
                  className="project-link"
                  onClick={() => navigate(git)}
                  target="_blank"
                >
                  <i class="fa-solid fa-code"></i>
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
                      <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </div>
                  </div>
                )} */}
                <h2>
                  <i className="ph ph-arrow-right"></i>
                </h2>
              </div>
            </div>
          </div>
        </StyledCard>
      </Link>
    </>
  );
}
