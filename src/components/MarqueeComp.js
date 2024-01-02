import React from "react";
import Marquee from "react-fast-marquee";
import styled from "styled-components";

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

    .ph {
      font-size: clamp(25px, 2vw, 32px);
      color: var(--highlight-color);
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
  `;
  return (
    <div>
      <StyledMarquee>
        <Marquee className="marquee" autoFill={true}>
          <p>Just say hi</p>
          <i class="ph ph-arrow-up-right"></i>
          <p>Contact Me</p>
          <i class="ph ph-arrow-up-right"></i>
          <p>Get in Touch</p>
          <i class="ph ph-arrow-up-right"></i>
          <p>Hire Me</p>
          <i class="ph ph-arrow-up-right"></i>
          <p>Work together</p>
          <i class="ph ph-arrow-up-right"></i>
        </Marquee>
      </StyledMarquee>
    </div>
  );
}
