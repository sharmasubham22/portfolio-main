import React from 'react'
import MarqueeComp from './MarqueeComp';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function GetInTouch() {
  const StyledDiv = styled.div`

  `;
  return (
    <div style={{ marginTop: "5%" }}>
      <div className="container">
        <h1 className="section-head">
          <span style={{ color: "var(--highlight-color)" }}>04. </span>Get In
          Touch !
        </h1>
        <div className="row row-cols-1 row-cols-md-2 my-5">
          <div className="col">
            <p
              style={{
                fontFamily: "sono",
                color: "var(--text-color)",
                fontSize: "clamp(15px, 2vw, 18px)",
              }}
            >
              Liked my profile? I am always open for a great chat. My inbox is
              always open. If you have questions or just want to say hi, do
              reach out and I will try my best to get back to you as soon as
              possible.
            </p>
          </div>
          <StyledDiv className="col">

          </StyledDiv>
        </div>
      </div>
      <Link to="/contact" style={{ textDecoration: "none" }}>
        <MarqueeComp />
      </Link>
    </div>
  );
}
