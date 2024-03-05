import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function FeaturedProjects(props) {
  let { title, imageLink, techs, demo, color } = props;

  const techItems = techs.join(" • ");

  const StyledDiv = styled.div`
    font-family: var(--general-font);
    overflow: hidden;

    .project-item {
      position: relative;
    }

    .project-img {
      border: 0.3px solid var(--border-color);
      border-radius: var(--border-radius);
      // overflow: hidden;
      height: clamp(270px, 60vw, 750px);
      background: radial-gradient(circle, var(--project-bg), var(--project-bg));
      transition: 0.5s ease;

      .screen-img {
        position: absolute;
        bottom: -25%;
        right: 0;
        width: 100%;
        transition: 0.3s ease;
      }

      .ph {
        transition: 0.3s ease;
      }

      &:hover {
        .screen-img {
          transform: translateY(-10px);
        }

        .ph {
          transform: translate(5px, -10px);
        }
      }
    }

    @media (max-width) .name-section {
      position: absolute;
      top: 15%;
      left: 2%;
      width: 100%;
    }

    .wrapper {
      position: relative;
      width: 100%;
      background-color: var(--img-mask);
      transition: 0.3s ease;
      border-radius: var(--border-radius);

      img {
        width: 100%;
        height: auto;
        display: block;
        transition: opacity 0.3s ease;
      }

      .original-img {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        // transition: 0.4s ease;
      }
      .filter-img {
        position: relative;
        mix-blend-mode: multiply;
        filter: grayscale(100%) contrast(1);
        width: 100%;
        object-fit: contain;
        // transition: 0.4s ease;
      }
    }

    .detail-section {
      margin-bottom: 7px;
      padding: 20px;
      color: var(--text-color);
      width: 100%;
      bottom: 0px;
      left: 0px;
      border: 0.3px solid var(--border-color);
      border-radius: var(--border-radius);
      transition: 0.3s ease;
      background-color: var(--project-bg);
    }

    .detail-section .project-link {
      color: var(--text-color);
    }

    &:hover {
      .wrapper {
        // transform: scale(1.05);
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

      // .detail-section,
      .project-img {
        background: radial-gradient(circle, ${color}, var(--project-bg));
      }
    }

    h1 {
      // text-transform: uppercase;
      font-family: var(--heavy-font);
      font-size: clamp(26px, 4vw, 34px);
      font-weight: 700;
      color: var(--text-color);
    }

    .sub-heading {
      font-size: clamp(18px, 2vw, 22px);
      font-family: var(--heavy-font);
      font-weight: 400;
      // line-height: 0
      margin-bottom: 3%;
      // font-weight: 500;
    }

    .links {
      display: flex;
    }

    .tech-skills {
      font-size: clamp(14px, 2vw, 24px);
      font-family: var(--heavy-font);
      font-weight: 400;
      color: var(--text-color);
      line-height: 1;
    }

    .ph-arrow-up-right {
      font-size: clamp(30px, 4vw, 47px);
      color: var(--text-color);
    }

    .project-link {
      text-decoration: none;
      font-size: clamp(18px, 2vw, 22px);
      padding: 0px 10px;
      transition: 0.3s;
    }

    .project-link:hover {
      transform: scale(1.2);
    }

    @media (max-width: 991px) {
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

      .project-img {
        background: radial-gradient(circle, ${color}, var(--project-bg));
      }

      .wrapper .filter-img {
        filter: none;
        mix-blend-mode: normal;
      }

      .detail-section {
        padding: 20px;
        position: relative;
        margin-bottom: 5px;
        color: var(--text-color);
        background-color: ${color};
      }

      .project-img {
        background-color: ${color};
      }

      .detail-section .project-link {
        color: var(--text-color);
      }
    }
  `;

  // const navigate = (url) => {
  //   window.open(url, "_blank");
  // };

  return (
    <>
      <StyledDiv>
        <Link
          to={demo}
          className="project-item"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <div>
            {/* <div className="detail-section d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <h2 className="sub-heading">{subHeading}</h2>
              </div>
              <div className="links">
                <div
                  className="project-link mx-4"
                  onClick={() => navigate(git)}
                  target="_blank"
                >
                  <i class="fa-solid fa-code"></i>
                </div>
                <div
                  className="project-link"
                  onClick={() => navigate(demo)}
                  target="_blank"
                >
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </div>
            </div> */}
            <div className="project-img">
              <div className="d-flex justify-content-between">
                <div style={{ padding: "25px" }}>
                  <h1>{title}</h1>
                  <p className="tech-skills">
                    <i>{techItems}</i>
                  </p>
                </div>
                <i
                  className="ph ph-arrow-up-right"
                  style={{ padding: "25px" }}
                ></i>
              </div>
              <img src={imageLink} className="screen-img" alt="projectImg" />
              {/* <div className="wrapper">
              <img src={imageLink} className="filter-img" alt="projectImg" />
              <img src={imageLink} className="original-img" alt="projectImg" />
            </div> */}
            </div>
          </div>
        </Link>
      </StyledDiv>
    </>
  );
}
