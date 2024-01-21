import React from "react";
import styled from "styled-components";
// import { motion, useAnimation, useInView } from "framer-motion";
import { heroSvg, rotateText } from "../../images/assets";
import Reveal from "../Motion";

export default function Hero() {
  const StyledHero = styled.div`
    .name-text {
      font-size: clamp(80px, 10vw, 200px);
      font-family: var(--heavy-font);
      font-weight: 900;
      text-transform: uppercase;
      color: var(--text-color);
      line-height: 0.4;
    }

    @media (max-width: 656px) {
      .name-text{
        line-height: 0.9;
      }
    }

    .hero-text {
      background: linear-gradient(
        to bottom,
        var(--content-color) 0%,
        transparent 90%,
        transparent 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1;
      user-select: none;
      font-size: clamp(60px, 10vw, 150px);
    }

    .hero-text2 {
      background: linear-gradient(
        to top,
        var(--content-color) 0%,
        transparent 90%,
        transparent 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1;
      user-select: none;
      font-size: clamp(60px, 10vw, 150px);
    }

    p {
      font-family: var(--general-font);
      text-align: center;
      font-size: clamp(18px, 2vw, 30px);
      color: var(--text-color2);
      font-weight: 400;
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
      color: var(--text-color);
      // position: absolute;
      // background: var(--card-color);
      // bottom: 30px;
      // right: 35px;
      user-select: none;
      font-weight: 200;
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
      width: 140px;
      height: 140px;
      opacity: 0;
      transition: all ease 0.4s;
    }

    .scroll:hover {
      .fa-solid {
        transform: scale(0.7);
      }

      .svg {
        opacity: 1;
      }
    }

    @media (max-width: 684px) {
      // display: none;
      .fa-solid {
        transform: scale(1);
        margin-top:50px;
      }

      .svg {
        display: none;
      }
    }

    // @media (min-width: 684px) and (max-width: 1078px) {
    //   .scroll {
    //     bottom: 35px;
    //     right: 30px;
    //   }
    // }
  `;

  const one = (
    <p className="name-text text-center hero-text">Software</p>
  );
  const two = <p className="name-text text-center">Hey, I'm Subham</p>;
  const three = (
    <p className="name-text text-center hero-text2">Developer</p>
  );
  const four = (
    <p>
      {/* I am a <span style={{fontWeight:"500"}}>Software Developer</span> and I love to  */}
      I Design, Develop & Deploy!
    </p>
  );

  const items = [one, two, three, four];

  return (
    <div className="container-fluid">
      <Reveal>
        <StyledHero>
          {items.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </StyledHero>
      </Reveal>
      <Scroll>
        <div className="scroll">
          <div className="circle">
            <div className="fa-solid">{heroSvg}</div>
            <div className="svg">{rotateText}</div>
          </div>
        </div>
      </Scroll>
    </div>
  );
}
