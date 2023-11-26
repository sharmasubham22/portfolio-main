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
      font-size: 50px;
      animation: fa-solid 2s ease infinite;
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
      background-color: var(--highlight-color);
      padding: 20px;
      border-radius: 50%;
      bottom: 0;
    }
    .circle {
      position: relative;
      height: 15rem;
      width: 15rem;
      display: flex;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
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
          </Reveal>

          <StyledDiv className="col">
            <div className="bg">
              <div className="circle">
                <i class="fa-solid fa-arrow-down"></i>
                <svg
                  id="rotatingText"
                  viewBox="0 0 200 200"
                  width="400"
                  height="400"
                >
                  <defs>
                    <path
                      id="circle"
                      d="M 100, 100
                m -90, 0
                a 90, 90 0 1, 0 180, 0
                a 90, 90 0 1, 0 -180, 0
                "
                    ></path>
                  </defs>
                  <text width="400">
                    <textPath
                      alignment-baseline="top"
                      href="#circle"
                      class="text"
                    >
                      Click below for contact details &#x2022;
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </StyledDiv>
        </div>
      </div>
    </div>
  );
}
