import React from 'react'
import Marquee from 'react-fast-marquee'
import styled from 'styled-components';
import { bullet2 } from '../images/bullets';

export default function BioMarquee() {
  const StyledMarquee = styled.section`
    p {
      margin: 10px 30px;
      color: var(--text-color);
      font-family: var(--heavy-font);
      font-size: clamp(25px, 2vw, 32px);
      text-transform: uppercase;
      font-weight: 700;
    }

    .marquee {
      padding: 15px 0px;
    }
  `;
  return (
    <div>
      <StyledMarquee>
        <Marquee className="marquee" autoFill={true}>
          <p>Software Developer</p>
          {bullet2}
          <p>Frontend</p>
          {bullet2}
          <p>Backend</p>
          {bullet2}
          <p>Web Developer</p>
          {bullet2}
          <p>Designer</p>
          {bullet2}
        </Marquee>
      </StyledMarquee>
    </div>
  );
}
