import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Reveal from "../Motion";
import BioMarquee from "../BioMarquee";
// import {vector1, vector2} from '../../images/assets'
import { bullet1 } from "../../images/bullets";

export default function Profile() {
  const StyledText = styled.section`
    h1 {
      ${({ theme }) => theme.mixins.chip};
      margin: 0 0 30px 0;
    }
    
    p {
      font-family: var(--general-font);
      font-size: clamp(22px, 2vw, 30px);
      color: var(--text-color);
    }

    .subtext {
      font-family: var(--general-font);
      font-size: clamp(15px, 2vw, 20px);
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
        // padding-left: 20px;
        font-size: clamp(15px, 2vw, 18px);

        &:before {
          // content: "◇";
          position: absolute;
          left: 0;
          font-size: clamp(15px, 2vw, 18px);
          color: var(--highlight-color);
          line-height: 22px;
        }
      }
    }
  `;

  const StyledPic = styled.div`
    .wrapper {
      position: relative;
      width: 75%;
      height: 100%;
      overflow: hidden;
      background-color: var(--background-color);
      margin: auto;
      transition: 0.3s all ease-in-out;
      border-radius: 15px;
      display: grid;
      grid-template: 1fr / 1fr;
      place-items: center;
    }

    .wrapper img {
      width: 100%;

      transition: 0.3s ease;
      object-fit: cover;
      transition: 0.3s all ease-in-out;
    }

    .wrapper > * {
      grid-column: 1 / 1;
      grid-row: 1 / 1;
    }



    .smiley {
      position: absolute;
      top: -11%;
      left: 2%;
      z-index: -1;
    }

    .marquee::before {
      background: url(https://drive.google.com/uc?export=view&id=1Mi1PRgJnCvyIjQOfba5lJPRKX6CRKmQ7)
        0 / cover no-repeat;
      background-position: bottom;
      bottom: 0px;
    }

    .marquee {
      position: absolute;
      padding: 44px 0px;
      background: rgba(0, 0, 0, 0.5);
      bottom: 0px;
      width: 100%;
      overflow: hidden;
      z-index: 1;
    }

    .marquee::before {
      content: "";
      margin: 0px;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      filter: blur(10px);
      z-index: -1;
    }

    @media (max-width: 766px) {
      margin: 50px auto 0;

      .wrapper {
        width: 95%;
      }
    }
  `;

  const skills = ["React.js", "Express.js", "Node.js", "JavaScript", "SQL"];

  return (
    <div className="container" style={{ marginTop: "20%", marginBottom: "10%" }}>
      <StyledText>
        <h1>About</h1>
        <Reveal>
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col">
              <p>
                I’m a passionate Web Designer & Developer. Master's graduate
                from{" "}
                <Link
                  className="link-design"
                  to="https://www.dal.ca/"
                  target="_blank"
                  style={{ fontSize: "clamp(22px, 2vw, 30px)" }}
                >
                  Dalhousie University
                </Link>
                , Halifax (CA) in "Applied Computer Science". Eager for creating
                modern websites and have a strong understanding of UI/UX
                development.
              </p>
              <p className="subtext">
                I’ve had privilege of working as an IT Developer at{" "}
                <Link
                  className="link-design"
                  to="https://www.canada.ca/en/revenue-agency.html"
                  target="_blank"
                  style={{ fontSize: "clamp(15px, 2vw, 18px)" }}
                >
                  Canada Revenue Agency{" "}
                </Link>{" "}
                (CRA). Also, I have experience working in Business development
                team at{" "}
                <Link
                  className="link-design"
                  to="https://www.townscript.com/"
                  target="_blank"
                  style={{ fontSize: "clamp(15px, 2vw, 18px)" }}
                >
                  Townscript
                </Link>
                . My interest in web started back in 2017, and started my career
                with a web design internship at{" "}
                <Link
                  className="link-design"
                  to="https://skillsanta.com/"
                  target="_blank"
                  style={{ fontSize: "clamp(15px, 2vw, 18px)" }}
                >
                  SkillSanta
                </Link>
                .
              </p>
              <p className="subtext">
                Here are some of the technologies I can work with.
              </p>{" "}
              <ul className="skills-list subtext">
                {skills &&
                  skills.map((skill, i) => (
                    <li key={i}>
                    {bullet1}
                      {skill}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="col p-pic d-flex flex-column justify-content-between align-items-center">
              <StyledPic style={{ position: "relative" }}>
                <div className="wrapper">
                  <img
                    className="img"
                    src="https://drive.google.com/uc?export=view&id=1Mi1PRgJnCvyIjQOfba5lJPRKX6CRKmQ7"
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="Headshot"
                  />
                  <div className="marquee">
                    <BioMarquee />
                  </div>
                </div>
                <div className="smiley">
                  {/* {vector1} */}
                </div>
              </StyledPic>
              <div>
                {/* {vector2} */}
              </div>
            </div>
          </div>
        </Reveal>
      </StyledText>
    </div>
  );
}
