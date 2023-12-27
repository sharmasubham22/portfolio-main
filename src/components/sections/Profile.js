import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Reveal from "../Motion";
// import BioMarquee from "../BioMarquee";
import {vector1, vector2} from '../../images/assets'
import profile from '../../images/ss2.png'

export default function Profile() {
  const StyledText = styled.section`
    h1 {
      ${({ theme }) => theme.mixins.chip};
      margin: 0 0 30px 0;
    }

    @media (max-width:1024px){
      h1{
        margin-top:60px;
      }
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
      width: 65%;
      height: 100%;
      overflow: hidden;
      background-color: var(--background-color);
      margin: auto;
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

    .border-img {
      width: 65%;
      height: 100%;
      top: 5.5%;
      right: 13%;
      position: absolute;
      border: 1px solid var(--text-color);
      z-index: -1;
      // background:var(--card-color);
    }

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
      margin: 50px auto 0;

      .wrapper {
        width: 75%;
      }
      .vector-asset1 {
        width: 80px;
        left:2%;
        height: 80px;
      }

      .vector-asset2 {
        width: 90px;
        height: 80px;
      }

      .border-img {
        width: 75%;
        right: 8%;
      }
    }
  `;

  const skills = ["React.js", "Express.js", "Node.js", "JavaScript", "SQL"];

  return (
    <div className="container" style={{ marginTop: "5%", marginBottom: "5%" }}>
      <StyledText>
        <h1>About</h1>
        <Reveal>
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col">
              <p>
                I’m a passionate Software Developer who likes to build frontend
                and backend applications. Master's graduate from{" "}
                <Link
                  className="link-design"
                  to="https://www.dal.ca/"
                  target="_blank"
                  style={{ fontSize: "clamp(22px, 2vw, 30px)" }}
                >
                  Dalhousie University
                </Link>
                , Halifax (CA) in "Applied Computer Science".
              </p>
              <p className="subtext">
                I’ve had privilege of working as an IT Developer at{" "}
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
              <p className="subtext">
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
              </ul>
            </div>
            <div className="col p-pic d-flex flex-column justify-content-center align-items-center">
              <StyledPic style={{ position: "relative" }}>
                <div className="wrapper">
                  <img
                    className="img"
                    src={profile}
                    formats={["AUTO", "WEBP", "AVIF"]}
                    alt="Headshot"
                  />
                </div>
                <div className="border-img"></div>
                <div className="vector-asset1">{vector1}</div>
                <div className="vector-asset2">{vector2}</div>
              </StyledPic>
            </div>
          </div>
        </Reveal>
      </StyledText>
    </div>
  );
}
