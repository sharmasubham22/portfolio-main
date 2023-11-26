import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
    }

    .connect {
      ${({ theme }) => theme.mixins.button};
      margin-left: 15px;
    }

  `;



  const one = <p>Hello there, my name is</p>;
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

  return (
    <div className="container" style={{ marginTop: "5%", marginBottom: "5%" }}>
      <StyledHero>
        <h1>About</h1>
        <TransitionGroup>
          {items.map((item, i) => (
            <CSSTransition key={i} in={true} appear={true} classNames="fadeup" timeout={2000}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}> {item}</div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </StyledHero>
    </div>
  );
}
