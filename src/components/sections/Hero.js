import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";
import vector from '../../images/vector.svg'
import memoji from '../../images/memoji.png'
// import Reveal from "../Motion";

export default function Hero() {
  const StyledHero = styled.div`
    .name-text {
      font-size: clamp(70px, 10vw, 150px);
      font-family: var(--heavy-font);
      text-transform: uppercase;
      font-weight: 700;
      color: var(--text-color);
      line-height: 1;
    }

    p {
      font-family: var(--general-font);
      text-align: center;
      font-size: clamp(18px, 2vw, 30px);
      color: var(--content-color);
    }

    .button-hero {
      ${({ theme }) => theme.mixins.button};
      margin-top: 10px;
      background-color:var(--background-color);
    }

    .memoji{
      width:fit-content;
      padding:15px 10px 0px 10px;
      margin:auto;
      margin-bottom:20px;
      border-radius:50%;
      background-color: var(--highlight-color);
      user-select:none;
    }

    .memoji img{
      border-radius:50%;
    }

    .container {
      width: 100px;
      height: 100px;
      position: relative;
    }

    .vector {
      position: absolute;
      bottom: 0%;
      right: 0%;
      z-index: -1;
      opacity: 0.3;
      overflow: hidden;
    }

    .vector img {
      width: 90%;
    }

    @media (max-width: 684px) {
      .vector img {
        width: 100%;
      }
    }

    @media (max-width: 1500px) and (min-width:684px) {
      .vector img {
        width: 70%;
        margin-right:-20%;
      }
    }

    .scroll {
      text-align: end;
      text-decoration:none;
      color:var(--content-color);
      position: absolute;
      bottom: 120px;
      right: 35px;
      writing-mode: vertical-rl;
      font-size: clamp(15px, 2vw, 20px);
      user-select: none;
    }

    .scrollBox {
      position: absolute;
      width: 1px;
      height: 60px;
      /*   border:1px solid #FA003c; */
      overflow: hidden;
      bottom: 50px;
      right: 50px;
    }
    .scrollBox:after {
      content: "";
      position: absolute;
      top: -60px;
      height: 60px;
      width: 4px;
      background: var(--content-color);
      animation: scrollDrive 2s ease infinite;
    }

    @keyframes scrollDrive {
      0% {
        top: -60px;
      }
      50% {
        top: 60px;
      }
      100% {
        top: 60px;
      }
    }

    @media (max-width: 1078px) {
      .scroll {
        bottom: 55px;
        right: 10px;
      }
      .scrollBox {
        bottom: -10px;
        right: 25px;
      }

      p {
        width: 100%;
      }
    }
  `;



  const one = (
    <p className="name-text text-center">
      Hey, I am Subham 
    </p>
  );
  const two = (
    <p>
      I love to design, develop & deploy. I am a software developer who likes to build
      frontend and backend applications.
    </p>
  );
  const three = (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ marginTop: "40px" }}
    >
      <Link type="button" className="button-hero" to="/contact">
        Let's Connect <i className="fa-solid fa-arrow-right"></i>
      </Link>
    </div>
  );

  const items = [one, two, three];

  const controls = useAnimation();
  const ref = useRef(null);
  const onScreen = useInView(ref, { once: true });

  useEffect(() => {
    if (onScreen) {
      controls.start("visible");
    }
    // eslint-disable-next-line
  }, [onScreen]);

  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.30, duration: 0.5 },
    },
    hidden: { opacity: 0, y: 75 },
  };

  return (
    <div className="container">
      <StyledHero>
        <div className="d-flex justify-content-center align-items-center memoji">
          <img
            src={memoji}
            width={100}
            alt=".."
          />
        </div>
        <div ref={ref}>
          <motion.div initial="hidden" animate={controls} variants={variants}>
            {items.map((item, index) => (
              <motion.div className="col" key={index} variants={variants}>
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="vector vh-100 d-flex justify-content-center align-items-center">
          <img src={vector} alt=".." />
        </div>
        <div>
          <a href="#section2" className="scroll">scroll</a>
          <div className="scrollBox"></div>
        </div>
      </StyledHero>
    </div>
  );
}
