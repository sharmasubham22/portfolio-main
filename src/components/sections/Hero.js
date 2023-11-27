import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Hero() {
  const StyledHero = styled.div`
    h1 {
      ${({ theme }) => theme.mixins.chip};
      margin: 0% 0% 7% 0%;
    }

    h2 {
      font-size: clamp(25px, 4vw + 0.5vw, 80px);
      font-family: var(--heavy-font);
      text-transform: uppercase;
      color: var(--text-color);
    }

    p {
      font-family: var(--general-font);
      width: 70%;
      font-size: clamp(15px, 2vw, 20px);
      color: var(--content-color);
    }

    .button-hero {
      ${({ theme }) => theme.mixins.button};
      margin-right: 15px;
    }

    .connect {
      ${({ theme }) => theme.mixins.button};
    }

    .scroll {
      text-align: end;
      position: absolute;
      bottom: 100px;
      right: 15px;
      writing-mode: vertical-rl;
      font-size: 18px;
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
        width:100%;
      }
    }
  `;



  const one = <p>Hi there! My name is</p>;
  const two = (
    <h2>
      Subham Sharma. <br />
    </h2>
  );
  const three = (
    <h2 style={{color:"var(--content-color)"}}>
      I am a <span style={{ color: "var(--highlight-color" }}>developer.</span>
    </h2>
  );
  const four = (
    <p>
      I love to design, develop & deploy. I am a software developer and I can
      build frontend and backend applications.
    </p>
  );
  const five = (
    <div style={{ marginTop: "50px" }}>
      <Link type="button" className="button-hero" to="/contact">
        Let's Connect!
      </Link>
      <Link type="button" className="connect " to="/work">
        My Work &rarr;
      </Link>
    </div>
  );

  const items = [one, two, three, four, five];

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
    <div className="container" >
      <StyledHero>
        <h1>About</h1>
        <div ref={ref}>
          <motion.div initial="hidden" animate={controls} variants={variants}>
            {items.map((item, index) => (
              <motion.div className="col" key={index} variants={variants}>
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
 
          <div>
            <p className="scroll">scroll</p>
            <div class="scrollBox"></div>
          </div>
       
      </StyledHero>
    </div>
  );
}
