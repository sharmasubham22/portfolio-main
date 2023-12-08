import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Reveal from "../Motion";

export default function Profile() {
  const StyledText = styled.section`
    p {
      font-family: var(--general-font);
      font-size: clamp(19px, 2vw, 24px);
      color: var(--text-color);
    }

    .subtext {
      font-family: var(--general-font);
      font-size: clamp(15px, 2vw, 18px);
      color: var(--content-color);
    }

    ul.skills-list {
      display: grid;
      grid-template-columns: repeat(2, minmax(140px, 200px));
      grid-gap: 0 10px;
      padding: 0;
      margin: 20px 0 0 0;
      overflow: hidden;
      list-style: none;

      li {
        position: relative;
        margin-bottom: 10px;
        padding-left: 20px;
        font-size: clamp(15px, 2vw, 18px);

        &:before {
          content: "▹";
          position: absolute;
          left: 0;
          fontsize: clamp(15px, 2vw, 18px);
          color: var(--highlight-color);
          line-height: 22px;
        }
      }
    }

  `;

  const StyledPic = styled.div`
    @media (max-width: 994px) {
      margin: 50px auto 0;
    }

    .wrapper {
      width: 70%;
      height: 100%;
      overflow: hidden;
      background-color: var(--highlight-color);
      margin: auto;
      transition: 0.3s all ease-in-out;
      border-radius: 15px;

      // &:hover,
      // &:focus {
      //   outline: 0;
      //   transition: 0.3s all ease-in-out;

      //   .img {
      //     filter: none;
      //     mix-blend-mode: normal;
      //   }
      // }
    }

    .wrapper img {
      width: 100%;
      // mix-blend-mode: multiply;
      // filter: grayscale(100%) contrast(1);
      transition: 0.3s ease;
      transition: 0.3s all ease-in-out;
    }

    // .wrapper:hover {
    //   border-radius: 20px;
    // }

    // .wrapper:hover img {
    //   transform: scale(1.05);
    // }
  `;

  const skills = [
    "React",
    "Express",
    "Node.js",
    "JavaScript",
    "SQL"
  ];


  return (
    <div className="container" style={{ marginTop: "5%", marginBottom: "5%" }}>
      <Reveal>
        <h1 className="my-5 section-head">
          <span style={{ color: "var(--highlight-color)" }}>01. </span>About me
        </h1>
      </Reveal>
      <Reveal>
        <div className="row row-cols-1 row-cols-md-2">
          <div className="col">
            <StyledText>
              <p>
                I’m a passionate Web Designer & Developer. Graduated in Masters
                of Applied Computer Science from{" "}
                <Link
                  className="link-design"
                  to="https://www.dal.ca/"
                  target="_blank"
                  style={{ fontSize: "clamp(19px, 2vw, 24px)" }}
                >
                  Dalhousie University
                </Link>
                , Halifax (CA). Eager for creating modern websites and have a
                strong interest in UI UX development.
              </p>
              <p className="subtext">
                I’ve had privilege of working as an IT Developer at{" "}
                <Link
                  className="link-design"
                  to="https://www.canada.ca/en/revenue-agency.html"
                  target="_blank"
                >
                  Canada Revenue Agency{" "}
                </Link>{" "}
                (CRA). Also, I have experience working in Business development
                team at{" "}
                <Link
                  className="link-design"
                  to="https://www.townscript.com/"
                  target="_blank"
                >
                  Townscript
                </Link>
                . My interest in web started back in 2017, and started my career
                with a web design internship at{" "}
                <Link
                  className="link-design"
                  to="https://skillsanta.com/"
                  target="_blank"
                >
                  SkillSanta
                </Link>
                .
              </p>
              <p className="subtext">
                Hare are some of the technologies I can work with.
              </p>{" "}
              <ul className="skills-list subtext">
                {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
              </ul>
            </StyledText>
          </div>

          <div className="col d-flex flex-column justify-content-between align-items-center">
            <StyledPic>
              <div className="wrapper">
                <img
                  className="img"
                  src="https://drive.google.com/uc?export=view&id=1Mi1PRgJnCvyIjQOfba5lJPRKX6CRKmQ7"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Headshot"
                />
              </div>
            </StyledPic>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
