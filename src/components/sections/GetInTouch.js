import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Reveal from "../Motion";
import { bullet4 } from "../../images/bullets";
import { arrow, rotateText } from "../../images/assets";

export default function GetInTouch() {
  const StyledDiv = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;

    .fa-solid {
      position: absolute;
      color: var(--card-color);
      font-size: 70px;
      z-index:999;
    }

    .circle {
      position: relative;
      display: flex;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      user-select: none;
    }

    @media (max-width: 991px) {
      display: none;

      .bg {
        display: none;
      }
    }
  `;

    var [date, setDate] = useState(new Date());

    useEffect(() => {
      var timer = setInterval(() => setDate(new Date()), 1000);
      return function cleanup() {
        clearInterval(timer);
      };
    });

  return (
    <div>
      <div className="container" style={{ marginTop: "5%" }}>
        <Reveal>
          <h1 className="section-head">
            {bullet4} Get in Touch
          </h1>
        </Reveal>
        <div className="row row-cols-1 row-cols-lg-2 my-5 d-flex align-items-center">
          <Reveal>
            <div className="col">
              <p
                style={{
                  fontFamily: "var(--general-font)",
                  color: "var(--content-color)",
                  fontSize: "clamp(15px, 2vw, 26px)",
                }}
              >
                I am always open for a nice chat. My inbox is always open. If
                you have questions or just want to say hi, do reach out and I
                will try my best to get back to you as soon as possible.
              </p>
              <div className="mt-5">
                <h2
                  style={{
                    color: "var(--highlight-color)",
                    fontFamily: "var(--general-font)",
                    fontSize: "clamp(15px, 2vw, 26px)",
                  }}
                >
                  Location
                </h2>
                <p
                  style={{
                    color: "var(--content-color)",
                    fontFamily: "var(--general-font)",
                    fontSize: "clamp(15px, 2vw, 26px)",
                  }}
                >
                  Halifax, NS (Canada)
                  <br /> {date.toLocaleDateString()},{" "}
                  {date.toLocaleTimeString()}
                </p>
                <div
                  className="d-flex align-items-center mt-4"
                  style={{
                    width: "fit-content",
                    padding: "5px 15px 5px 10px",
                    border: "1px solid var(--border-color)",
                    borderRadius: "35px",
                  }}
                >
                  <div className="blob green"></div>
                  <h2
                    className="mt-2 mx-2"
                    style={{
                      color: "var(--content-color)",
                      fontFamily: "var(--general-font)",
                      fontSize: "clamp(16px, 2vw, 18px)",
                    }}
                  >
                    Available to Work
                  </h2>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <StyledDiv className="col">
              <div className="bg">
                <div className="circle">
                  <div
                    className="fa-solid"
                    style={{
                      border: "1px solid var(--background-color)",
                      borderRadius: "50%",
                      padding: "35px 40px",
                    }}
                  >
               {arrow}
                  </div>
                 {rotateText}
                </div>
              </div>
            </StyledDiv>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
