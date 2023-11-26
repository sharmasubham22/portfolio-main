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
  `;



  const one = <p>Hi there! My name is</p>;
  const two = (
    <h2>
      Subham Sharma. <br />
    </h2>
  );
  const three = (
    <h2>
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
    <div className="container" style={{ marginTop: "5%", marginBottom: "5%" }}>
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
      </StyledHero>
    </div>
  );
}
