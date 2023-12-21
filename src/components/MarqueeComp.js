import React from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";
import { bullet5 } from "../images/bullets";

export default function MarqueeComp() {
  const StyledMarquee = styled.section`
    p {
      margin: 10px 30px;
      color: var(--text-color);
      font-family: var(--heavy-font);
      font-size: clamp(25px, 2vw, 32px);
      display: inline-block;
      text-transform: uppercase;
      font-weight: 700;
    }

    .dot {
      height: 15px;
      width: 15px;
      background-color: var(--highlight-color);
      border-radius: 50%;
      display: inline-block;
    }

    .marquee {
      border-top: 1px solid var(--border-color);
      padding: 25px 0px;
    }

    .marquee:hover {
      background-color: var(--card-color);
      pointer: cursor;
    }
  `;
  return (
    <div>
      <StyledMarquee>
        <Marquee className="marquee" autoFill={true}>
          <p>
            Just say hi <i className="fa-solid fa-arrow-right"></i>
          </p>
          {bullet5}
          <p>
            Contact Me <i className="fa-solid fa-arrow-right"></i>
          </p>
          {bullet5}
          <p>
            Get in Touch <i className="fa-solid fa-arrow-right"></i>
          </p>
          {bullet5}
          <p>
            Hire Me <i className="fa-solid fa-arrow-right"></i>
          </p>
          {bullet5}
          <p>
            Work together <i className="fa-solid fa-arrow-right"></i>
          </p>
          {bullet5}
        </Marquee>
      </StyledMarquee>
    </div>
  );
}
