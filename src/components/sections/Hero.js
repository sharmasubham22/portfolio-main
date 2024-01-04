import React from "react";
import styled from "styled-components";
// import { motion, useAnimation, useInView } from "framer-motion";
import { arrow, rotateText } from "../../images/assets";
import Reveal from "../Motion";

export default function Hero() {
  const StyledHero = styled.div`
    .name-text {
      font-size: clamp(40px, 8vw, 130px);
      font-family: var(--heavy-font);
      text-transform: uppercase;
      font-weight: 700;
      color: var(--text-color);
      line-height: 0.4;
      user-select: none;
    }

    .hero-text {
      background: linear-gradient(
        to bottom,
        var(--highlight-color) 0%,
        transparent 90%,
        transparent 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      opacity: 0.3;
      line-height: 1;
    }

    .hero-text2 {
      background: linear-gradient(
        to top,
        var(--highlight-color) 0%,
        transparent 90%,
        transparent 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      opacity: 0.3;
      line-height: 1;
    }

    p {
      font-family: var(--general-font);
      text-align: center;
      font-size: clamp(18px, 2vw, 30px);
      color: var(--content-color);
    }

    @media (max-width: 1078px) {
      p {
        width: 100%;
      }
    }
  `;

  const Scroll = styled.div`
    .container {
      width: 100px;
      height: 100px;
      position: relative;
    }

    .scroll {
      text-align: end;
      text-decoration: none;
      color: var(--content-color);
      position: absolute;
      // background: var(--card-color);
      bottom: 30px;
      right: 35px;
      writing-mode: vertical-rl;
      font-size: clamp(15px, 2vw, 20px);
      user-select: none;
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
      color: var(--card-color);
      font-size: 10px;
      z-index: 999;
      border: 1px solid var(--highlight-color);
      border-radius: 50%;
      padding: 15px 15px;
      width: 80px;
      height: 80px;
    }

    .svg {
      width: 140px;
      height: 140px;
    }

    @media (max-width: 684px) {
      .fa-solid {
        padding: 10px;
        width: 50px;
        height: 50px;
      }

      .svg {
        width: 80px;
        height: 80px;
      }
    }

    @media (min-width: 684px) and (max-width: 1078px) {
      .scroll {
        bottom: 35px;
        right: 30px;
      }
    }
    @media (max-width: 684px) {
      .scroll {
        bottom: 10px;
        right: 30px;
      }
    }
  `;

  const one = (
    <p className="name-text text-center hero-text">Hey, I'm Subham</p>
  );
  const two = <p className="name-text text-center">Hey, I'm Subham</p>;
  const three = (
    <p className="name-text text-center hero-text2">Hey, I'm Subham</p>
  );
  const four = (
    <p>
      I am a <span style={{fontWeight:"700"}}>Software Developer</span> and I love to design, develop &
      deploy!
    </p>
  );

  const items = [one, two, three, four];

  return (
    <div className="container">
      <Reveal>
        <StyledHero>
          {items.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </StyledHero>
      </Reveal>
      <Scroll>
        <div className="scroll">
          <a href="#home-section2" className="circle">
            <div className="fa-solid">{arrow}</div>
            <div className="svg">{rotateText}</div>
          </a>
        </div>
      </Scroll>
    </div>
  );
}
