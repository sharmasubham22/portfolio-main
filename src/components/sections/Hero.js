import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";
import Reveal from "../Motion";
// import globe from '../../images/globe.svg'

export default function Hero() {
  const StyledHero = styled.div`
    h1 {
      ${({ theme }) => theme.mixins.chip};
      margin: 2% 0% 3% 0%;
    }

    h2 {
      font-size: clamp(60px, 8vw, 100px);
      font-family: var(--heavy-font);
      text-transform: uppercase;
      color: var(--text-color);
    }

    .dev-text {
      font-size: clamp(30px, 5vw, 100px);
      font-family: var(--heavy-font);
      text-transform: uppercase;
    }

    p {
      font-family: var(--general-font);
      width:80%;
      font-size: clamp(15px, 2vw, 20px);
      color: var(--content-color);
    }

    .button-hero {
      ${({ theme }) => theme.mixins.button};
      margin-top: 10px;
    }

    .connect {
      ${({ theme }) => theme.mixins.button};
      margin-right: 15px;
      margin-top: 10px;
    }

    .scroll {
      text-align: end;
      position: absolute;
      bottom: 100px;
      right: 15px;
      writing-mode: vertical-rl;
      font-size: 18px;
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
      .scroll,
      .scrollBox {
        display: none;
      }

      p {
        width: 100%;
      }
    }
  `;



  const one = <p>Hi there! 👋🏻 my name is</p>;
  const two = (
    <h2>
      Subham Sharma
    </h2>
  );
  const three = (
    <p>
      I love to design, develop & deploy. I am a software developer and I
      build frontend and backend applications.
    </p>
  );
  const four = (
    <div style={{ marginTop: "40px" }}>
      {/* <Link type="button" className="connect" to="/work">
        Explore My Work
      </Link> */}
      <Link type="button" className="button-hero" to="/contact">
        Let's Connect
      </Link>
    </div>
  );

  const items = [one, two, three, four];

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
      transition: { staggerChildren: 0.20, duration: 0.5 },
    },
    hidden: { opacity: 0, y: 75 },
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <StyledHero>
        <h1>About</h1>
        <div className="row row-cols-1 row-cols-lg-2 g-4">
          <div className="col">
            <div ref={ref}>
              <motion.div
                initial="hidden"
                animate={controls}
                variants={variants}
              >
                {items.map((item, index) => (
                  <motion.div className="col" key={index} variants={variants}>
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
          <Reveal>
            <div className="col d-flex justify-content-center align-items-center">
              <div className="patterned-col"></div>
            </div>
          </Reveal>
        </div>
        <div>
          <p className="scroll">scroll</p>
          <div className="scrollBox"></div>
        </div>
      </StyledHero>
    </div>
  );
}
