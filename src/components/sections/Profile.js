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
                        width="20"
                        height="24"
                        viewBox="0 0 20 24"
                        fill="none"
                        style={{marginRight:"10px"}}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.813 18.8598C18.7975 17.2825 17.595 15.8324 16.2314 14.5405C15.662 13.9744 15.1438 13.346 14.6029 12.746C14.5288 12.746 14.4263 12.746 14.3808 12.6724L12.5643 10.674C12.9981 9.66995 13.5063 8.69925 14.0847 7.76997C15.0356 6.10565 16.0833 4.49793 17.131 2.88456C17.3474 2.55622 17.9851 2.49963 17.393 1.62218C17.2905 1.39008 16.926 1.16926 16.6926 0.948488C15.6221 -0.0761458 15.1666 -0.245966 15.0185 0.320129C14.9844 0.444671 14.842 0.495661 14.7508 0.574914C13.8455 0.348476 14.4776 1.32782 13.8 1.28253C13.8871 1.44653 13.9132 1.63586 13.8736 1.81712C13.8341 1.99838 13.7313 2.15991 13.5836 2.2732C12.664 3.23703 11.8117 4.26212 11.0326 5.3414C10.5163 6.21516 10.0689 7.12746 9.6945 8.07002C8.89162 7.37372 8.18554 6.58119 7.41683 5.80563C6.01607 4.39606 4.63806 2.97511 3.19743 1.58818C2.90134 1.30513 2.94118 0.65417 1.96747 1.07308C1.71693 1.12969 1.43791 1.45237 1.17598 1.63918C-0.0197984 2.51096 -0.264634 2.92985 0.264924 3.17327C0.378807 3.22422 0.40157 3.37142 0.464206 3.47332C0.0713082 4.3168 1.15321 3.86958 0.970995 4.52625C1.14773 4.47407 1.33735 4.48578 1.50621 4.55935C1.67507 4.63293 1.81226 4.7636 1.89345 4.92816C2.70202 5.95279 3.35685 7.12464 4.23944 8.07568C5.27008 9.20788 6.51713 10.0797 7.61041 11.1269C7.75277 11.2628 7.88942 11.4043 8.02608 11.5459C7.64457 12.3157 7.26874 13.0969 6.94417 13.8951C6.27226 15.5934 5.41246 17.1785 5.11067 18.99C4.91706 20.224 4.21667 21.2996 3.74405 22.4658C3.55045 22.947 4.19962 23.4792 5.4865 23.8584C6.77338 24.2377 6.87014 23.7621 7.0125 23.5131C7.8559 21.9241 8.56264 20.2671 9.12508 18.5597C9.40409 17.8408 9.72861 17.1332 10.0646 16.4369C10.0646 16.3633 10.019 16.2784 10.0646 16.2161C10.3322 15.65 10.634 15.0443 10.9073 14.4669L11.0041 14.5688C12.2853 15.8199 13.3843 17.2464 14.8648 18.3107C15.8726 19.0409 16.499 20.1505 17.2563 21.1411C17.5695 21.5431 18.3952 21.2544 19.3518 20.3486C20.3084 19.4428 19.9667 19.1202 19.813 18.8598Z"
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
