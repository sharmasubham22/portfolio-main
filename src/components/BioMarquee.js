import React from 'react'
import Marquee from 'react-fast-marquee'
import styled from 'styled-components';

export default function BioMarquee() {
  const StyledMarquee = styled.section`
    p {
      margin: 10px 30px;
      color: var(--text-color);
      font-family: var(--heavy-font);
      font-size: clamp(30px, 5vw, 42px);
      text-transform: uppercase;
      font-weight: 700;
    }

    .dot {
      height: clamp(10px, 2vw, 15px);
      width: clamp(10px, 2vw, 15px);
      background-color: var(--highlight-color);
      border-radius: 50%;
      display: inline-block;
    }

    .marquee {
      border: 0.3px solid var(--border-color);
      border-radius: 2vh;
      // width:fit-content;
      // padding: 5px 0px;
    }
  `;
  return (
    <div className="mt-4">
      <StyledMarquee>
        <Marquee className="marquee" autoFill={true} gradient={true} gradientColor='var(--background-color)'>
          <p>Software Developer</p>
          <span className="dot"></span>
          <p>Front-End</p>
          <span className="dot"></span>
          <p>Back-End</p>
          <span className="dot"></span>
          <p>Web Developer</p>
          <span className="dot"></span>
          <p>Full Stack</p>
          <span className="dot"></span>
          <p>Designer</p>
          <span className="dot"></span>
        </Marquee>
      </StyledMarquee>
    </div>
  );
}
