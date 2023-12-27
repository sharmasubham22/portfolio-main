import React from "react";
import styled from "styled-components";
// import { motion, useAnimation, useInView } from "framer-motion";
import { arrow, rotateText } from "../../images/assets";

export default function Hero() {
  const StyledHero = styled.div`
    .name-text {
      font-size: clamp(40px, 8vw, 130px);
      font-family: var(--heavy-font);
      text-transform: uppercase;
      font-weight: 700;
      color: var(--text-color);
      line-height: 0.8;
      user-select: none;
    }

    .hero-text {
      background: linear-gradient(
        to bottom,
        var(--highlight-color) 0%,
        transparent 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      opacity: 0.3;
    }

    .hero-text2 {
      background: linear-gradient(
        to top,
        var(--highlight-color) 0%,
        transparent 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      opacity: 0.3;
    }

    p {
      font-family: var(--general-font);
      text-align: center;
      font-size: clamp(18px, 2vw, 30px);
      color: var(--content-color);
    }

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

    @media (max-width: 1078px) {
      .scroll {
        bottom: 10px;
        right: 30px;
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
    <p className="name-text text-center hero-text">Hey, I'm Subham</p>
  );
  const two = <p className="name-text text-center">Hey, I'm Subham</p>;
  const three = (
    <p className="name-text text-center hero-text2">Hey, I'm Subham</p>
  );
  const four = <p>I love to design, develop & deploy!</p>;

  const items = [one, two, three, four];

  // const controls = useAnimation();
  // const ref = useRef(null);
  // const onScreen = useInView(ref, { once: true });

  // useEffect(() => {
  //   if (onScreen) {
  //     controls.start("visible");
  //   }
  //   // eslint-disable-next-line
  // }, [onScreen]);

  // const variants = {
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { staggerChildren: 0.3, duration: 0.5 },
  //   },
  //   hidden: { opacity: 0, y: 75 },
  // };

  return (
    <div className="container">
      <StyledHero>
        {/* <div ref={ref}>
          <motion.div initial="hidden" animate={controls} variants={variants}> */}
            {items.map((item, index) => (
              <div key={index} >
                {item}
             </div>
            ))}
          {/* </motion.div>
        </div> */}
        <div className="scroll">
          <a href="#home-section2" className="circle">
            <div className="fa-solid">{arrow}</div>
            <div className="svg">{rotateText}</div>
          </a>
        </div>
      </StyledHero>
    </div>
  );
}
