import React from 'react'
import Marquee from 'react-fast-marquee'
import styled from 'styled-components';

export default function BioMarquee() {
  const StyledMarquee = styled.section`
    p {
      margin: 10px 30px;
      color: var(--content-color);
      font-family: var(--heavy-font);
      font-size: clamp(30px, 8vw, 102px);
      text-transform: uppercase;
      font-weight: 400;
    }

    .dot {
      height: clamp(15px, 5vw, 35px);
      width: clamp(15px, 5vw, 35px);
      background-color: var(--highlight-color);
      border-radius: 50%;
      display: inline-block;
    }

    .marquee {
      border-top: 1px solid var(--border-color);
      border-bottom: 1px solid var(--border-color);
      // padding: 5px 0px;
    }
  `;
  return (
    <div className="mt-3">
      <StyledMarquee>
        <Marquee className="marquee" autoFill={true} speed={130} gradient={true} gradientColor='var(--background-color)'>
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
