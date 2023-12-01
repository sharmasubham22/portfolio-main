import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function FeaturedProjects(props) {
  let { title, description, imageLink, techs, git, demo } = props;

  const StyledDiv = styled.div`
    font-family: var(--general-font);

    p {
      color: var(--content-color);
      background-color: var(--card-color);
      padding: 20px;
      text-align: end;
    }

    h3 {
      color: var(--text-color);
      text-align: end;
      text-transform: uppercase;
    }

    .tech-skills {
      color: var(--highlight-color);
      text-transform: uppercase;
      display: flex;
      justify-content: end;
    }

    .tech-items {
      font-size: 14px;
      margin: 0px 0px 20px 20px;
    }

    .links {
      display: flex;
      justify-content: end;
    }

    .fa-brands,
    .fa-solid {
      margin-left: 40px;
    }

    .project-link {
      text-decoration: none;
      color: var(--text-color);
      font-size: 24px;
    }

    .project-link:hover {
      color: var(--highlight-color);
    }

    @media (max-width: 767px) {
      display: none;
    }

    @media (max-width: 991px) and (min-width: 767px) {
      p {
        text-align: center;
      }

      h3 {
        text-align: center;
      }

      .links {
        display: flex;
        justify-content: center;
      }

      .fa-brands,
      .fa-solid {
        margin: 30px 40px 0px 10px;
      }

      .tech-skills {
        justify-content:center;
      }
    }
  `;
  const StyledDiv2 = styled.div`
    font-family: var(--general-font);
    @media (min-width: 767px) {
      display: none;
    }

    .card {
      background-color: var(--card-color);
    }
    .card-img {
      height: clamp(21.5rem, 22rem, 15rem);
      object-fit: cover;
    }

    .card-title {
      color: var(--text-color);
      text-transform: uppercase;
      font-size: 24px;
    }

    .card-subtitle {
      color: var(--highlight-color);
      text-transform: uppercase;
      font-size: clamp(11px, 2vw, 14px);
    }

    .card-text {
      color: var(--content-color);
    }

    .project-link {
      text-decoration: none;
      color: var(--text-color);
      font-size: 24px;
    }

    .project-link:hover {
      color: var(--highlight-color);
    }
    

  `;
  const StyledPic = styled.div`
    position: relative;
    max-width: 650px;

    @media (max-width: 767px) {
      display: none;
    }

    @media (max-width: 991px) and (min-width: 767px) {
      margin: auto;
    }

    .wrapper {
      display: block;
      position: relative;
      width: 100%;
      border-radius: 5px;
      background-color: var(--highlight-color);
      transition: 0.3s ease;
      backdrop-filter: blur(10px);

      &:hover,
      &:focus {
        outline: 0;
        transform: translateY(-10px);

        &:after {
          transform: translate(8px, 8px);
        }

        .banner-img {
          filter: none;
          mix-blend-mode: normal;
        }
      }

      .banner-img {
        position: relative;
        border-radius: 5px;
        mix-blend-mode: multiply;
        filter: grayscale(100%) contrast(1);
        transition: 0.3s ease;
      }

      &:before,
      &:after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;

        border-radius: 5px;
        transition: 0.3s ease;
      }

      &:before {
        top: 0;
        left: 0;
        background-color: var(--background-color);
        mix-blend-mode: screen;
      }
    }
  `;
  const StyledPic2 = styled.div`
    position: relative;

    .wrapper {
      display: block;
      position: relative;
      width: 100%;
      border-radius: 5px;
      background-color: var(--featured-color);
      transition: 0.8s ease;

      &:focus {
        outline: 0;

        &:after {
        }

        .card-img {
          filter: none;
          mix-blend-mode: normal;
        }
      }

      .card-img {
        border-radius: 5px;
        mix-blend-mode: multiply;
        filter: grayscale(100%) contrast(1);
        transition: 0.5s ease;
      }

      &:before,
      &:after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        transition: 0.5s ease;
      }

      &:before {
        top: 0;
        left: 0;
        background-color: var(--background-color);
        mix-blend-mode: screen;
      }
    }
  `;
  return (
    <div>
      <div className=" my-5 row row-cols-1 row-cols-md-1 row-cols-lg-2">
        <StyledPic>
          <div className="col wrapper">
            <img
              className="banner-img"
              style={{
                objectFit: "cover",
                width: "clamp(300px, 100%,630px)",
                height: "300px",
              }}
              src={imageLink}
              alt="banner"
            ></img>
          </div>
        </StyledPic>
        <StyledDiv className="col my-3">
          <h3 className="mb-4">{title}</h3>
          <p>{description}</p>
          <div className="tech-skills">
            {techs.map((techKey, techIndex) => {
              return (
                <h6 className="tech-items" key={techIndex}>
                  {techKey}
                </h6>
              );
            })}
          </div>
          <div className="links">
            <Link className="project-link" to={git} target="_blank">
              <i className="fa-brands fa-github"></i>
            </Link>
            <Link className="project-link" to={demo} target="_blank">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </Link>
          </div>
        </StyledDiv>
      </div>
      <StyledDiv2>
        <div className="card h-100">
          <StyledPic2>
            <div className="wrapper">
              <img src={imageLink} className="card-img" alt="..." />
            </div>
          </StyledPic2>
          <div className="card-img-overlay p-4 ">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            {techs.map((techKey, techIndex) => {
              return (
                <h6
                  className="card-subtitle mb-2"
                  style={{ display: "inline", marginRight: "10px" }}
                  key={techIndex}
                >
                  {techKey}
                </h6>
              );
            })}
            <div className="my-3">
              <Link className="project-link" to={git} target="_blank">
                <i className="fa-brands fa-github"></i>
              </Link>
              <Link className="project-link mx-5" to={demo} target="_blank">
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </Link>
            </div>
          </div>
        </div>
      </StyledDiv2>
    </div>
  );
}
