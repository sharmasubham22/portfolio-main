import React from "react";
import styled from "styled-components";
import Reveal from "../Motion";

export default function GetInTouch() {
  const StyledDiv = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;

    .fa-solid {
      position: absolute;
      color: var(--card-color);
      font-size: 70px;
      animation: fa-solid 2s ease infinite;
      z-index:999;
    }

    @keyframes fa-solid {
      70% {
        transform: translateY(0%);
      }
      80% {
        transform: translateY(-15%);
      }
      90% {
        transform: translateY(0%);
      }
      95% {
        transform: translateY(-7%);
      }
      97% {
        transform: translateY(0%);
      }
      99% {
        transform: translateY(-3%);
      }
      100% {
        transform: translateY(0);
      }
    }

    .bg {
      // position: absolute;
      bottom: 0;
    }
    .circle {
      position: relative;
      display: flex;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      user-select: none;
    }

    @media (max-width: 984px) {
      display: none;

      .bg {
        display: none;
      }
    }
  `;

  return (
    <div>
      <div
        className="container"
        style={{ marginTop: "5%", marginBottom: "5%" }}
      >
        <Reveal>
          <h1 className="section-head">
            <span style={{ color: "var(--highlight-color)" }}>04. </span>Get In
            Touch !
          </h1>
        </Reveal>
        <div className="row row-cols-1 row-cols-md-2 my-5 d-flex align-items-center">
          <Reveal>
            <div className="col">
              <p
                style={{
                  fontFamily: "var(--general-font)",
                  color: "var(--text-color)",
                  fontSize: "clamp(15px, 2vw, 20px)",
                }}
              >
                Liked my profile? I am always open for a great chat. My inbox is
                always open. If you have questions or just want to say hi, do
                reach out and I will try my best to get back to you as soon as
                possible.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <StyledDiv className="col">
              <div className="bg">
                <div className="circle">
                  <i className="fa-solid fa-arrow-down"></i>
                  <svg
                    id="rotatingText"
                    viewBox="0 0 210 210"
                    width="400"
                    height="400"
                  >
                    <path
                      className="shield-background"
                      d="m88.6 6.2c-8.8-0.6-13.2 7.8-19.5 12.1-7.2 1.4-15.9-1.4-21.7 4.7-5.7 4.3-4.7 13.3-10.7 17-7.2 2.7-15.9 5.9-17.5 14.6-1.5 6.2 2 14.1-4.2 18.4-5.9 4.9-11 12.6-8 20.6 1.7 5.3 6.2 10.8 2.6 16.3-3.6 6.9-5.3 15.8 0.5 22.1 3.6 4.2 10 7.6 8.7 14.1-0.7 7.7 1.1 16.7 8.9 20.1 4.9 2.5 12.1 3.2 13.4 9.7 2.3 7.4 7.4 14.9 15.9 15.2 5.5 0.4 12.4-1.6 16.1 3.9 4.9 5.8 12.3 10.9 20.2 8 5.4-1.6 11.1-6.4 16.7-2.7 6.8 3.5 15.5 5.4 21.8-0.3 4.4-3.6 7.8-10.2 14.4-8.9 7.7 0.7 16.7-1.2 20.1-8.9 2.5-4.9 3.2-12.1 9.7-13.4 7.4-2.3 14.9-7.4 15.2-15.9 0.5-5.5-1.6-12.4 3.9-16.1 6-4.9 10.9-12.6 7.9-20.6-1.7-5.3-6.2-10.8-2.6-16.3 3.6-6.8 5.3-15.8-0.5-22.1-3.6-4.2-9.9-7.6-8.7-14 0.7-7.7-1.1-16.7-8.9-20.1-4.9-2.5-12.1-3.2-13.4-9.7-2.3-7.4-7.4-15-16-15.3-5.5-0.4-12.4 1.6-16.1-3.9-4.9-5.8-12.3-10.9-20.2-8-5.4 1.7-11.1 6.4-16.7 2.7-3.7-1.4-7.3-3.5-11.4-3.4z"
                      fill="var(--highlight-color)"
                    />
                    <defs>
                      <path
                        id="circle"
                        d="M 105, 105
                m -80, 0
                a 80, 80 0 1, 0 160, 0
                a 80, 80 0 1, 0 -160, 0
                "
                      ></path>
                    </defs>
                    <text width="400">
                      <textPath
                        alignmentBaseline="top"
                        href="#circle"
                        className="text"
                      >
                        Click down below for my contact details &#x2022;
                      </textPath>
                    </text>
                    <path
                      className="shield-outline"
                      d="m87.7 1c-4.6 0-8.9 1.8-12.1 5l-6.3 6.3c-1.2 1.2-2.9 1.9-4.7 1.9h-8.9c-6.9 0-13.2 4.2-15.8 10.6l-3.4 8.2c-0.7 1.6-1.9 2.9-3.6 3.6l-8.2 3.4c-6.4 2.7-10.6 8.9-10.6 15.8v8.9c0 1.8-0.7 3.4-1.9 4.7l-6.3 6.3c-4.9 4.9-6.4 12.3-3.7 18.7l3.4 8.2c0.7 1.6 0.7 3.4 0 5.1l-3.4 8.2c-2.6 6.4-1.2 13.7 3.7 18.7l6.4 6.3c1.2 1.2 1.9 2.9 1.9 4.7v8.9c0 6.9 4.1 13.2 10.6 15.8l8.2 3.4c1.6 0.7 2.9 1.9 3.6 3.6l3.4 8.2c2.7 6.4 8.9 10.6 15.8 10.6h8.9c1.8 0 3.4 0.7 4.7 1.9l6.3 6.3c3.3 3.3 7.6 5 12.1 5 2.2 0 4.5-0.4 6.5-1.3l8.2-3.4c1.6-0.7 3.4-0.7 5.1 0l8.2 3.4c2.1 0.9 4.3 1.3 6.5 1.3 4.6 0 8.9-1.8 12.1-5l6.3-6.3c1.2-1.2 2.9-1.9 4.7-1.9h8.9c6.9 0 13.2-4.2 15.8-10.6l3.4-8.2c0.7-1.6 1.9-2.9 3.6-3.6l8.2-3.4c6.4-2.7 10.6-8.9 10.6-15.8v-8.9c0-1.8 0.7-3.4 1.9-4.7l6.3-6.3c4.9-4.9 6.3-12.3 3.7-18.7l-3.4-8.2c-0.7-1.6-0.7-3.4 0-5l3.4-8.2c2.7-6.4 1.2-13.7-3.7-18.7l-6.3-6.2c-1.2-1.2-1.9-2.9-1.9-4.7v-8.9c0-6.9-4.1-13.2-10.6-15.8l-8.2-3.4c-1.6-0.7-2.9-1.9-3.6-3.6l-3.4-8.3c-2.7-6.4-8.9-10.6-15.8-10.6h-8.9c-1.8 0-3.4-0.7-4.7-1.9l-6.3-6.3c-3.2-3.2-7.6-5-12.1-5-2.2 0-4.5 0.4-6.5 1.3l-8.2 3.4c-1.6 0.7-3.4 0.7-5 0l-8.2-3.4c-2.1-0.9-4.3-1.3-6.5-1.3zm0.3 11.5c0.9 0 1.7 0.2 2.5 0.5l8.1 3.4c2.1 0.9 4.3 1.3 6.5 1.3 2.2 0 4.4-0.4 6.5-1.3l8.1-3.3c0.8-0.3 1.7-0.5 2.5-0.5 1.7 0 3.4 0.7 4.6 1.9l6.2 6.2c3.2 3.2 7.5 5 12 5h8.7c2.7 0 5 1.6 6 4l3.4 8.1c1.7 4.2 5 7.4 9.2 9.2l8.1 3.4c2.4 1 4 3.4 4 6v8.8c0 4.5 1.8 8.8 5 12l6.2 6.2c1.9 1.9 2.4 4.7 1.4 7.1l-3.3 8.1c-1.7 4.2-1.7 8.8 0 13l3.4 8.1c1.1 2.4 0.5 5.2-1.3 7.1l-6.2 6.2c-3.2 3.2-5 7.4-5 12v8.8c0 2.7-1.6 5-4 6l-8.1 3.4c-4.2 1.7-7.4 5-9.2 9.2l-3.3 8.1c-1 2.4-3.4 4-6 4h-8.8c-4.5 0-8.8 1.8-12 5l-6.2 6.2c-1.2 1.2-2.9 1.9-4.6 1.9-0.9 0-1.7-0.2-2.5-0.5l-8.1-3.3c-2.1-0.9-4.3-1.3-6.5-1.3-2.2 0-4.4 0.4-6.5 1.3l-8.1 3.4c-0.8 0.3-1.6 0.5-2.5 0.5-1.7 0-3.4-0.7-4.6-1.9l-6.2-6.2c-3.2-3.2-7.4-5-12-5h-8.8c-2.6 0-5-1.6-6-4l-3.3-8.1c-1.7-4.2-5-7.4-9.2-9.2l-8.1-3.3c-2.4-1-4-3.4-4-6v-8.8c0-4.5-1.8-8.8-5-12l-6.2-6.2c-1.9-1.9-2.4-4.6-1.4-7.1l3.4-8.1c1.7-4.2 1.7-8.8 0-13l-3.3-8.1c-1-2.4-0.5-5.2 1.4-7.1l6.2-6.2c3.2-3.2 5-7.5 5-12v-8.8c0-2.6 1.6-5 4-6l8.1-3.3c4.2-1.7 7.4-5 9.2-9.2l3.4-8.1c1-2.4 3.4-4 6-4h8.8c4.5 0 8.8-1.8 12-5l6.2-6.2c1.2-1.2 2.9-1.9 4.6-1.9z"
                      fill="var(--highlight-color)"
                    />
                  </svg>
                </div>
              </div>
            </StyledDiv>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
