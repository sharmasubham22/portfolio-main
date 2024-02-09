import React from "react";
import styled from "styled-components";
// import { motion } from "framer-motion";
import { handSvg, heroSvg, rotateText } from "../../images/assets";
import BioMarquee from "../BioMarquee";

export default function Hero() {
  const StyledHero = styled.div`
    margin-top: 20px;

    .item-1 {
      padding: 15% 5%;
      border: 0.3px solid var(--border-color);
      border-radius: 2vh;
      // background: var(--card-color);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }
    .name-text {
      font-size: clamp(4.5rem, 9vw, 10rem);
      font-family: var(--heavy-font);
      font-weight: 700;
      text-transform: uppercase;
      text-align: center;
      // letter-spacing:2.5px;
      color: transparent;
      -webkit-text-stroke: 2px var(--text-color);
      line-height: 1;
      z-index: 2;

      span {
        font-weight: 800;
        color: var(--text-color);
        -webkit-text-stroke: 0px var(--highlight-color);
      }
    }

    .ball {
      position: absolute;
      z-index: 1;
      display: block;
      width: clamp(15rem, 30vw, 25rem);
      height: clamp(15rem, 30vw, 25rem);
      border-radius: 50%;
      background-image: linear-gradient(var(--card-color), transparent);
    }

    // .ball {
    //   position: absolute;
    //   // z-index: 1;
    //   display: block;
    //   width: clamp(200px, 60vw, 500px);
    //   height: clamp(200px, 40vw, 400px);
    //   // border-radius: 50%;
    //   border-top-left-radius: 50%;
    //   border-bottom-left-radius: 50%;

    //   filter: blur(20px);
    //   right: -10%;
    //   bottom: -35%;
    //   // background-image: linear-gradient(var(--highlight-color), transparent);
    //   background: var(--highlight-color);
    // }

    .hero-content {
      border: 0.3px solid var(--border-color);
      border-radius: 2vh;
      padding: 5% 5% 1% 5%;
    }

    .hero-text {
      color: var(--content-color);
      font-family: var(--heavy-font);
      font-size: clamp(1.4rem, 2.3vw, 2.8rem);
      // line-height:1;
    }

    .light-section {
      font-family: var(--heavy-font);
      // text-align: center;
      font-size: clamp(20px, 4vw, 46px);
      color: var(--text-color);
      font-weight: 700;
      text-transform: uppercase;
    }

    .item-2 {
      border-radius: 2vh;
      border: 0.3px solid var(--border-color);
      padding: 10% 5% 5% 10%;
      height: 100%;
      display: flex;
      align-items: center;
      // background:var(--highlight-color);
    }

    .scroll {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-color);
      // position: absolute;
      // background: var(--card-color);
      // bottom: 30px;
      // right: 35px;
      user-select: none;
      font-weight: 700;
      transition: all ease 0.4s;
      border: 0.3px solid var(--border-color);
      border-radius: 2vh;
      background: var(--text-color2);
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
      width: 240px;
      height: 240px;
      opacity: 1;
      transition: all ease 0.4s;
    }

    @media (max-width: 767px) {
      .scroll {
        display: none;
      }
    }

    @media (min-width: 991px) {
      .first-row {
        padding: 0 2vw;
      }
      .hero-content,
      .second-row {
        height: 50%;
      }
    }
  `;

  return (
    <div className="container-fluid">
      <StyledHero>
        <div className="row row-cols-1 row-cols-lg-2 g-4 first-row">
          <div className="col h-100">
            <div className="item-1">
              <p className="name-text mt-5">
                Hey, I am <br />
                <span>Subham</span>
              </p>
              <div class="ball"></div>
            </div>
            <div>
              <BioMarquee />
            </div>
          </div>
          <div className="col">
            <div className="row row-cols-1 row-cols-md-2 g-4 second-row">
              <div className="col">
                <div className="item-2">
                  <p className="light-section">
                    Design
                    <br /> Develop
                    <br /> Deploy
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="scroll">
                  <div className="circle">
                    <div className="fa-solid">{heroSvg}</div>
                    <div className="svg">{rotateText}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-md-4 hero-content d-flex align-items-start flex-column">
              <div className="mb-auto">{handSvg}</div>
              <p className="hero-text ">
                I design and develop immersive
                <br />
                <span style={{ color: "var(--text-color)" }}>
                  Digital Experiences.
                </span>
              </p>
            </div>
          </div>
        </div>
      </StyledHero>
    </div>
  );
}
