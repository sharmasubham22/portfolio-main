import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Reveal from "../Motion";
import Marquee from "react-fast-marquee";

export default function Profile() {
  const StyledText = styled.section`
    p {
      font-family: var(--general-font);
      font-size: clamp(19px, 2vw, 30px);
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
      width: 80%;
      height: 90%;
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

    @media (max-width: 766px) {
      margin: 50px auto 0;

      .wrapper{
        width:95%;
      }
    }

    // .wrapper:hover {
    //   border-radius: 20px;
    // }

    // .wrapper:hover img {
    //   transform: scale(1.05);
    // }
  `;

  const skills = ["React.js", "Express.js", "Node.js", "JavaScript", "SQL"];

  return (
    <div className="container" style={{ marginTop: "5%", marginBottom: "5%" }}>
      <Reveal>
        <div className="row row-cols-1 row-cols-lg-2">
          <div className="col">
            <StyledText>
              <p>
                I’m a passionate Web Designer & Developer. Graduate in Masters
                of Applied Computer Science from{" "}
                <Link
                  className="link-design"
                  to="https://www.dal.ca/"
                  target="_blank"
                  style={{ fontSize: "clamp(19px, 2vw, 30px)" }}
                >
                  Dalhousie University
                </Link>
                , Halifax (CA). Eager for creating modern websites and have a
                strong interest in UI/UX development.
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
                      <svg
                        width="10"
                        height="15"
                        viewBox="0 0 10 15"
                        fill="none"
                        style={{marginRight:"15px"}}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.99187 1.58275L7.05195 3.86828L7.97525 4.5898L8.23697 4.78992C8.33691 4.86905 8.50351 5.00408 8.62725 5.11579C8.89376 5.35319 9.14596 5.60916 9.36012 5.88845C9.59807 6.18636 9.9027 6.52154 9.88367 6.9172V6.91254C9.99789 7.30355 10.0455 7.72713 9.94554 8.1321C9.75517 8.89549 9.21736 9.56113 8.54156 10.1057L8.25602 10.3478L8.00854 10.5526C7.84197 10.6829 7.67067 10.8086 7.49934 10.9203C7.47078 10.939 7.47078 11.0041 7.4327 11.032C7.25662 11.1763 6.59983 11.6511 6.21434 11.9909C5.31487 12.7776 4.39637 13.541 3.25894 14.0437C3.08285 14.1228 0.865111 15.5612 0.175038 14.7559C-0.54359 13.918 1.16495 12.0514 1.44098 11.8745C2.11202 11.4463 2.88772 11.1344 3.36363 10.4921C4.05846 9.54714 5.03886 8.9327 5.88123 8.16L6.38566 7.71316C6.43801 7.66661 6.49039 7.62469 6.53322 7.56883C6.62841 7.46643 6.62363 7.29424 6.51893 7.20114C6.47134 7.15459 6.40948 7.12197 6.34761 7.10801C6.30954 7.09405 6.30003 7.10804 6.24292 7.08011L5.96215 6.9172C5.54335 6.66584 5.12929 6.40983 4.75808 6.10261C4.1156 5.57662 3.63965 4.84576 3.05427 4.24995C2.91626 4.1103 2.60697 4.11496 2.44991 3.96601C2.32142 3.84498 2.09296 3.65417 2.01682 3.47263C1.9835 3.3935 1.95492 3.30505 1.86926 3.29108C1.48853 3.21661 -0.496006 1.27553 0.346359 0.302673C1.16493 -0.660874 3.10191 0.926418 3.99187 1.58275Z"
                          fill="var(--highlight-color)"
                        />
                      </svg>

                      {skill}
                    </li>
                  ))}
              </ul>
            </StyledText>
          </div>

          <div className="col p-pic d-flex flex-column justify-content-between align-items-center">
            <StyledPic>
              <div className="wrapper">
                <img
                  className="img"
                  src="https://drive.google.com/uc?export=view&id=1Mi1PRgJnCvyIjQOfba5lJPRKX6CRKmQ7"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="Headshot"
                />
                <Marquee>Hi, I am subham</Marquee>
              </div>
            </StyledPic>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
