import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function FeaturedProjects(props) {
  let { title, description, imageLink, techs, git, demo } = props;

  const StyledDiv = styled.div`
    font-family: var(--general-font);
    margin-bottom: 10%;

    p {
      color: var(--content-color);
      margin-bottom: 5%;
      font-size: clamp(15px, 2vw, 20px);
    }

    h3 {
      color: var(--text-color);
      text-transform: uppercase;
      font-weight:700;
      font-size: clamp(24px, 4vw, 36px);
    }

    .img-div {
      width: 100%;
      height: 100%;
      overflow: hidden;
      margin: 0 auto;
      transition: 0.4s all ease-in-out;
    }

    .img-div img {
      width: 100%;
      height:auto;
      transition: 0.4s all ease-in-out;
      shape-rendering: crispEdges;
    }

    .img-div:hover img {
      transform: scale(1.03);
    }
    .img-div:hover {
      border-radius: 20px;
    }

    .tech-skills {
      color: var(--highlight-color);
      text-transform: uppercase;
      margin-bottom:20px;
    }

    .tech-items {
      font-size: clamp(10px, 1vw, 14px);
      margin: 10px 0px 20px 20px;
      border: 1px solid var(--highlight-color);
      padding: 5px 10px;
      border-radius: 20px;
    }

    .ph {
      margin-left: 40px;
    }

    .project-link {
      text-decoration: none;
      color: var(--text-color);
      font-size: clamp(22px, 2vw, 24px);
    }

    .project-link:hover {
      color: var(--highlight-color);
    }
  `;

  return (
    <div>
      <StyledDiv>
        <Link to={demo} target="_blank">
          <div className="img-div">
            <img src={imageLink} alt="projectImg" />
          </div>
        </Link>

        <div className="d-flex bd-highlight fs-2 mt-4 mb-2">
          <div className="flex-grow-1 bd-highlight">
            <h3>{title}</h3>
          </div>
          <div className="bd-highlight">
            <Link className="project-link" to={git} target="_blank">
              <i className="ph ph-github-logo"></i>
            </Link>
          </div>
          <div className="bd-highlight">
            <Link className="project-link" to={demo} target="_blank">
              <i className="ph ph-arrow-square-out"></i>
            </Link>
          </div>
        </div>
        <div className="tech-skills">
          {techs.map((techKey, techIndex) => {
            return (
              <h6
                className="tech-items"
                style={{ display: "inline", margin: "10px 10px 10px 0" }}
                key={techIndex}
              >
                {techKey}
              </h6>
            );
          })}
        </div>
        <p>{description}</p>
      </StyledDiv>
    </div>
  );
}
