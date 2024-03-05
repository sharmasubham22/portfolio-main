import React from "react";
import styled from "styled-components";
// import { motion } from "framer-motion";
import { heroArrow, heroSvg, rotateText } from "../../images/assets";
// import BioMarquee from "../BioMarquee";

export default function Hero() {
  const StyledHero = styled.div`
    margin-top: 20px;

    .name-text {
      font-size: clamp(4rem, 10.5vw, 15rem);
      font-family: var(--heavy-font);
      font-weight: 800;
      text-transform: uppercase;
      color: var(--text-color);
      line-height: 1;
      z-index: 2;
      // border: 1px solid var(--border-color);
      // border-bottom: none;
      // border-radius: var(--border-radius) var(--border-radius) 0 0;


      span {
        color: transparent;
        -webkit-text-stroke: 3px var(--text-color);
      }
    }

    .svgLogo {
      position: absolute;
      z-index: 1;
      right: 0%;
    }

    .ball {
      position: absolute;
      z-index: 1;
      display: block;
      width: clamp(15rem, 30vw, 25rem);
      height: clamp(15rem, 30vw, 25rem);
      border-radius: 50%;
      background-image: linear-gradient(var(--background-color), transparent);
      // filter:blur(20px)
    }

    .hero-text {
      color: var(--content-color);
      font-family: var(--general-font);
      font-size: clamp(1.3rem, 2.7vw, 3.4rem);
    }

    .scroll {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-color);
      user-select: none;
      font-weight: 700;
      transition: all ease 0.4s;
    }

    .circle {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
    }

    .fa-solid {
      position: absolute;
      transition: all ease 0.4s;
    }

    .svg {
      width: clamp(120px, 20vw, 260px);
      height: clamp(120px, 20vw, 260px);
      opacity: 1;
      transition: all ease 0.4s;
    }

    .role-text {
      color: var(--content-color);
      font-family: var(--general-font);
      font-size: var(--content-font);
      font-weight: 400;
    }

    .location-text {
      color: var(--content-color);
      font-family: var(--general-font);
      font-size: var(--content-font);
      font-weight: 400;

      span {
        color: var(--text-color);
        font-weight: 500;
      }
    }

    @media (min-width: 991px) {
      padding: 0 2vw;
    }

    .bottomright-col {
      border: 1px solid var(--border-color);
      border-left: none;
      background: var(--project-bg);
    }

    .bottomleft-col {
      border: 1px solid var(--border-color);
      background: var(--card-color);
    }

    .card-shiny {
      position: absolute;
      width: auto;
      height: 100%;
      // border-radius: 3.5vh;
      z-index: 2;
    }

    @media (max-width: 767px) {
      .bottomright-col {
        display: none;
      }
    }
  `;

  return (
    <div className="container-fluid">
      <StyledHero>
        <div className="row">
          <div className="d-flex justify-content-center" >
            <p className="name-text  p-5">
              Hey, I am <br />
              Subham
            </p>
            {/* <img className="card-shiny" src="https://www.iqbalzia.id/images/bri/shiny_animations_fast_delay.svg" alt="shiny"/> */}
          </div>
        </div>
        <div className="row row-cols-1 row-cols-xl-2">
          <div
            className="col"
            style={{ borderTop: "1px solid var(--border-color)" }}
          >
            <div className="d-flex align-items-center justify-content-xl-center p-4 h-100">
              <div>
                <p className="hero-text">
                  I design and develop immersive{" "}
                  <span
                    style={{ color: "var(--text-color)", fontWeight: "700" }}
                  >
                    Digital Experiences {heroArrow}
                  </span>
                </p>
                <p className="location-text">
                  <span>
                    <i class="ph-fill ph-map-pin"></i> Location <br />
                  </span>{" "}
                  Halifax, Nova Scotia
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              <div className="col bottomleft-col">
                <div className="d-flex align-items-center h-100 p-4">
                  <div>
                    <h3 className="role-text">I am a</h3>
                    <h3
                      style={{
                        color: "var(--text-color)",
                        fontWeight: "700",
                        fontSize: "clamp(1.3rem, 2.7vw, 3.4rem)",
                      }}
                    >
                      Software Developer.
                    </h3>
                    {/* <h3 className="based-text">Based in Halifax, CAN</h3> */}
                  </div>
                </div>
              </div>
              <div className="col bottomright-col">
                <div className="scroll">
                  <div className="circle">
                    <div className="fa-solid">{heroSvg}</div>
                    <div className="svg">{rotateText}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </StyledHero>
    </div>
  );
}
