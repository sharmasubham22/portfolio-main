import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Reveal from "../Motion";
// import BioMarquee from "../BioMarquee";
// import {vector1, vector2} from '../../images/assets'
import profile from '../../images/ss2.png'
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";

export default function Profile() {
  const StyledText = styled.section`
    h1 {
      ${({ theme }) => theme.mixins.chip};
      margin: 0 0 30px 0;
    }

    @media (max-width: 991px) {
      h1 {
        margin-top: 60px;
      }

      .about{
        margin-top:30px;
      }
    }

    .profile-section {
      background: var(--card-color);
      padding: 30px;
      border-radius: 10px;
    }

    h2 {
      font-family: var(--general-font);
      color: var(--text-color);
      font-size: clamp(22px, 2vw, 30px);
      font-weight: 700;
    }

    .fa-solid {
      color: var(--highlight-color);
      font-size: clamp(18px, 1.5vw, 25px);
      margin-right:10px;
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
    position: sticky;
    top: 140px;

    .wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: var(--highlight-color);
      margin: auto;
      border-radius:10px;
      transition: 0.3s all ease-in-out;
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

    // .border-img {
    //   width: 65%;
    //   height: 100%;
    //   top: 5.5%;
    //   right: 13%;
    //   position: absolute;
    //   border: 1px solid var(--text-color);
    //   z-index: -1;
    //   // background:var(--card-color);
    // }

    .vector-asset1 {
      position: absolute;
      top: -8%;
      left: 8%;
      z-index: -1;
      width: 140px;
      height: 148px;
    }

    .vector-asset2 {
      position: absolute;
      z-index: -1;
      right: 0;
      bottom: 20%;
      width: 160px;
      height: 128px;
    }

    @media (max-width: 766px) {
      .wrapper {
        width: 100%;     
      }
      .wrapper img {
        height: 100%;
      }

      .vector-asset1 {
        width: 80px;
        left: 2%;
        height: 80px;
      }

      .vector-asset2 {
        width: 90px;
        height: 80px;
      }

      .border-img {
        display: none;
      }
    }
  `;

  // const skills = ["React.js", "Express.js", "Node.js", "JavaScript", "SQL"];

  return (
    <div className="container" style={{ marginBottom: "5%" }}>
      <Reveal>
        <StyledText>
          <div className="row row-cols-1 row-cols-lg-2 mt-5">
            <div className="col p-pic ">
              <StyledPic>
                <div className="wrapper">
                  <img
                    className="img"
                    src={profile}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="Headshot"
                  />
                </div>
                <div className="border-img"></div>
                {/* <div className="vector-asset1">{vector1}</div>
                <div className="vector-asset2">{vector2}</div> */}
              </StyledPic>
            </div>
            <div className="col profile-text">
              <div className="profile-section about">
                <h2>Get to know me better!</h2>
                <p className="subtext">
                  Hello! I am Subham, and I’m a Software Developer who likes to build
                  frontend and backend applications. A master of science graduate from{" "}
                  <Link
                    className="link-design"
                    to="https://www.dal.ca/"
                    target="_blank"
                    style={{ fontSize: "clamp(15px, 2vw, 20px)" }}
                  >
                    Dalhousie University
                  </Link>
                  , Halifax (CA).
                </p>
                <p className="subtext">
                  I’ve had the privilege of working as an IT Developer at{" "}
                  <Link
                    className="link-design"
                    to="https://www.canada.ca/en/revenue-agency.html"
                    target="_blank"
                    style={{ fontSize: "clamp(15px, 2vw, 20px)" }}
                  >
                    Canada Revenue Agency{" "}
                  </Link>{" "}
                  (CRA). And, I have experience working at{" "}
                  <Link
                    className="link-design"
                    to="https://www.townscript.com/"
                    target="_blank"
                    style={{ fontSize: "clamp(15px, 2vw, 20px)" }}
                  >
                    Townscript
                  </Link>{" "}
                  (India) and a web design internship at{" "}
                  <Link
                    className="link-design"
                    to="https://skillsanta.com/"
                    target="_blank"
                    style={{ fontSize: "clamp(15px, 2vw, 20px)" }}
                  >
                    SkillSanta
                  </Link>{" "}
                  (India). Eager for creating modern websites and have a strong
                  understanding of UI/UX development.
                </p>
                {/* <p className="subtext">
                  Here are some of the technologies I can work with.
                </p>{" "}
                <ul className="skills-list subtext">
                  {skills &&
                    skills.map((skill, i) => (
                      <li key={i}>
                        <span style={{ color: "var(--highlight-color)" }}>
                          ▸{" "}
                        </span>
                        {skill}
                      </li>
                    ))}
                </ul> */}
              </div>
              <div className="profile-section mt-4">
                <h2>
                  <i class="fa-solid fa-graduation-cap"></i> Education
                </h2>
                <Education />
              </div>
              <div className="profile-section mt-4">
                <h2>
                  <i class="fa-solid fa-earth-americas"></i> Work Experience
                </h2>
                <Experience />
              </div>
              <div className="profile-section mt-4 ">
                <h2>
                  <i class="fa-solid fa-layer-group"></i> Skills and Toolkits
                </h2>
                <Skills />
              </div>
            </div>
          </div>
        </StyledText>
      </Reveal>
    </div>
  );
}
