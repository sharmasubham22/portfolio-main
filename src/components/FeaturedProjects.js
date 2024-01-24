import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function FeaturedProjects(props) {
  let { title, imageLink, techs, git, demo } = props;

  const techItems = techs.join(" • ");

  const StyledDiv = styled.div`
    font-family: var(--general-font);
    overflow: hidden;
    border: 0.3px solid var(--border-color);
    border-radius: 2vh;

    .wrapper {
      position: relative;
      width: 100%;
      overflow: hidden;
      background-color: var(--img-mask);
      transition: 0.7s ease;

      img {
        width: 100%;
        height: auto;
        display: block;
        transition: opacity 0.5s ease;
      }

      .original-img {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transition: 0.7s ease;
      }
      .filter-img {
        position: relative;
        mix-blend-mode: multiply;
        filter: grayscale(100%) contrast(1);
        width: 100%;
        object-fit: contain;
        transition: 0.7 s ease;
      }
    }

    &:hover {
      .wrapper {
        transform: scale(1.05);
      }

      .wrapper .filter-img {
        opacity: 0;
      }

      .wrapper .original-img {
        opacity: 1;
      }

      .tech-skills {
        opacity: 1;
      }
    }

    .detail-section {
      margin-top: 8px;
      padding: 0px 3% 0% 3%;
      color: white;
      position: absolute;
      width: 100%;
      bottom: 0px;
      left: 0px;
    }

    .detail-section .project-link {
      color: white;
    }

    h3 {
      // text-transform: uppercase;
      font-family: var(--heavy-font);
      font-size: clamp(30px, 2vw, 47px);
      font-weight: 700;
    }

    .sub-heading {
      font-size: clamp(18px, 2vw, 24px);
      font-family: var(--heavy-font);
      margin-bottom: 3%;
      font-weight: 500;
    }

    .links {
      display: flex;
      align-content: end;
    }

    .project-item {
      position: relative;
    }

    .tech-skills {
      opacity: 0.5;
      font-size: clamp(16px, 2vw, 20px);
      font-family: var(--heavy-font);
      font-weight: 400;
    }

    .project-link {
      text-decoration: none;
      font-size: clamp(22px, 2vw, 28px);
      padding: 7px 10px;
      transition: 0.2s;
    }

    .project-link:hover {
      color: var(--highlight-color);
    }

    @media (max-width: 991px) {
      padding: 0px;
      background-color: transparent;
      border: none;
      border-radius: 0;

      &:hover {
        .wrapper {
          transform: none;
        }

        .wrapper .filter-img {
          opacity: 1;
        }

        .wrapper .original-img {
          opacity: 1;
        }
      }

      .tech-skills{
        opacity:1;
      }

      .wrapper {
        border-radius: 1vh;
      }
      .wrapper .filter-img {
        filter: none;
        mix-blend-mode: normal;
      }

      .detail-section {
        padding: 0;
        position: relative;
      }
    }
  `;

  const navigate = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <StyledDiv>
        <Link
          to={demo}
          className="project-item"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div className="wrapper">
            <img src={imageLink} className="filter-img" alt="projectImg" />
            <img src={imageLink} className="original-img" alt="projectImg" />
          </div>
          <div className="detail-section d-flex justify-content-between align-items-center">
            <div>
              <h3>{title}</h3>
              {/* <p className="sub-heading">{subHeading}</p> */}
              <p className="tech-skills">
                <i>{techItems}</i>
              </p>
            </div>
            <div className="links">
              <div
                className="project-link mx-4"
                onClick={() => navigate(git)}
                target="_blank"
              >
                <i className="ph ph-github-logo"></i>
              </div>
              <div
                className="project-link"
                onClick={() => navigate(demo)}
                target="_blank"
              >
                <i className="ph ph-arrow-square-out"></i>
              </div>
            </div>
          </div>
        </Link>
      </StyledDiv>
    </>
  );
}
