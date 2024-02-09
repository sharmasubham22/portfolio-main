import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import BioMarquee from "../BioMarquee";
// import {vector1, vector2} from '../../images/assets'
import profile from '../../images/ss2.png'
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { iconData } from "../../data/icons";

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

      .about {
        margin-top: 30px;
      }
    }

    .profile-section {
      background: var(--card-color);
      padding: 30px;
      border-radius: 2vh;
      border: 0.3px solid var(--border-color);
    }

    h3 {
      font-family: var(--general-font);
      color: var(--text-color);
      font-size: clamp(22px, 2vw, 30px);
      font-weight: 400;
    }

    h2 {
      font-family: var(--heavy-font);
      color: var(--text-color);
      font-size: clamp(20px, 2vw, 22px);
      font-weight: 700;
      overflow: hidden;
    }

    .fa-brands {
      color: var(--text-color);
      font-size: 20px;
      margin-right: 20px;
      transition: 0.2s;

      &:hover {
        color: var(--highlight-color);
      }
    }

    .res-btn {
      text-decoration: none;
      color: var(--text-color);
      padding: 5px 15px;
      background: var(--img-mask);
      border-radius: 50px;
      font-family: var(--general-font);
      transition:0.2s;

      &:hover {
        background: var(--border-color);
      }
    }

    .fa-solid {
      color: var(--highlight-color);
      font-size: clamp(18px, 1.5vw, 25px);
      margin-right: 10px;
    }

    p {
      font-family: var(--general-font);
      font-size: clamp(22px, 2vw, 30px);
      color: var(--text-color);
    }

    .subtext {
      font-family: var(--general-font);
      font-size: clamp(17px, 2vw, 20px);
      color: var(--content-color);
      font-weight: 400;
    }

    .profile-link{
      color:var(--text-color);

      &:hover{
        color:var(--highlight-color);
      }
    }

    .wrapper {
      display: block;
      position: relative;
      width: 100%;
      border-radius: 2vh;
      }

      .img {
        position: relative;
        border-radius: 2vh;
        width: 100%;
        aspect-ratio: 1/1;
        object-fit: cover;
        // filter: grayscale(100%) contrast(1);
        border: 0.3px solid var(--border-color);
      }
    }

    // .img {
    //   width: 100%;
    //   aspect-ratio: 1/1;
    //   object-fit: cover;
    //   border-radius: 10px;
    //   border: 0.3px solid var(--border-color);
    // }
  `;

  return (
    <div className="container-fluid" style={{ marginBottom: "5%" }}>
      <StyledText>
        <div className="p-md-5 mt-5">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 810: 2, 1280: 3 }}
          >
            <Masonry gutter="1.5rem">
              <div className="card-section">
                <div className="profile-section">
                  {/* <h3>Get to know me better!</h3> */}
                  <p className="subtext">
                    Hello! I am Subham, and I’m a Software Developer and I
                    specialize in building frontend and backend applications. A
                    master of science graduate from{" "}
                    <Link
                      className="profile-link"
                      to="https://www.dal.ca/"
                      target="_blank"
                      
                    >
                      Dalhousie University
                    </Link>
                    , Halifax (CA).
                  </p>
                  <p className="subtext">
                    I’ve had the privilege of working as an IT Developer at{" "}
                    <Link
                      className="profile-link"
                      to="https://www.canada.ca/en/revenue-agency.html"
                      target="_blank"
                      
                    >
                      Canada Revenue Agency
                    </Link> (CRA). And, I have
                    experience working at{" "}
                    <Link
                      className="profile-link"
                      to="https://www.townscript.com/"
                      target="_blank"
                    >
                      Townscript
                    </Link> (India) and a web
                    design internship at{" "}
                    <Link
                      className="profile-link"
                      to="https://skillsanta.com/"
                      target="_blank"
                      
                    >
                      SkillSanta
                    </Link> (India).
                  </p>
                  <div className="d-flex justify-content-between mt-4">
                    <div className="d-flex align-items-center">
                      <Link
                        to="https://www.instagram.com/subh.sharma22/"
                        target="_blank"
                      >
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                      <Link
                        to="https://www.facebook.com/subham.sharma.5209/"
                        target="_blank"
                      >
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link
                        to="https://twitter.com/subh_sharma22"
                        target="_blank"
                      >
                        <i className="fa-brands fa-x-twitter"></i>
                      </Link>
                      <Link
                        to="https://www.linkedin.com/in/subham-sharma-137985128/"
                        target="_blank"
                      >
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </div>
                    <Link
                      to="https://drive.google.com/uc?export=view&id=1PrCF0G_hTFWh86LmyxAdFL7D2fj58aip"
                      target="_blank"
                      className="res-btn"
                    >
                      <i className="ph-bold ph-download-simple"></i> Resume
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-section p-pic wrapper">
                <img
                  className="img"
                  src={profile}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Headshot"
                />
              </div>
              <div className="card-section">
                <div className="profile-section">
                  <div className="d-flex">
                    <i
                      className="ph ph-gear-fine"
                      style={{
                        fontSize: "clamp(22px, 2vw, 26px)",
                        marginRight: "10px",
                        color: "var(--highlight-color)",
                      }}
                    ></i>
                    <h2>Skills</h2>
                  </div>
                  <Skills />
                </div>
              </div>
              <div className="card-section profile-text">
                <div className="profile-section">
                  <div className="d-flex">
                    <i
                      className="ph ph-graduation-cap"
                      style={{
                        fontSize: "clamp(22px, 2vw, 26px)",
                        marginRight: "10px",
                        color: "var(--highlight-color)",
                      }}
                    ></i>
                    <h2>Education</h2>
                  </div>
                  <Education />
                </div>
              </div>
              <div className="card-section">
                <div className="profile-section">
                  <div className="d-flex">
                    <i
                      className="ph ph-globe"
                      style={{
                        fontSize: "clamp(22px, 2vw, 26px)",
                        marginRight: "10px",
                        color: "var(--highlight-color)",
                      }}
                    ></i>
                    <h2>Work Experience</h2>
                  </div>
                  <Experience />
                </div>
              </div>
              <div className="card-section">
                <div className="profile-section">
                  <div className="d-flex">
                    <i
                      className="ph ph-stack-simple"
                      style={{
                        fontSize: "clamp(22px, 2vw, 26px)",
                        marginRight: "10px",
                        color: "var(--highlight-color)",
                      }}
                    ></i>
                    <h2>Tool Stack</h2>
                  </div>

                  <div className="d-flex flex-wrap  justify-content-center align-items-center">
                    {iconData.map((element, index) => {
                      return (
                        <div
                          key={index}
                          className="m-1"
                          style={{
                            backgroundColor: "var(--background-color)",
                            borderRadius: "10px",
                          }}
                        >
                          {element.icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </StyledText>
    </div>
  );
}
