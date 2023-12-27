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
      border-top: 1px solid var(--border-color);
      border-bottom: 1px solid var(--border-color);
      padding: 25px 0px;
    }
  `;
  return (
    <div className='mt-3'>
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
          <p>Full Stack</p>
          {bullet2}
          <p>Designer</p>
          {bullet2}
        </Marquee>
      </StyledMarquee>
    </div>
  );
}
