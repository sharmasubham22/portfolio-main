import React from "react";
import styled from "styled-components";
import { footerSvg } from "../images/assets";

export default function Footer() {
  const Footer = styled.div`
    font-family: var(--heavy-font);
    border-top: 1px solid var(--border-color);
    padding: 2vw 2vw 0 2vw;
    width: 100%;

    .item1 {
      display: flex;
      // justify-content: center;
      align-items: end;
    }

    .top-arrow {
      color: var(--text-color);
      text-decoration: none;
      font-size: 1.2rem;
      width: 42px;
      height: 42px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border-radius: 50%;

      &:before {
        content: "";
        width: 46px;
        height: 46px;
        position: absolute;
        background-color: var(--card-color);
        border: 1px solid var(--border-color);
        // opacity:0.3;
        border-radius: 50%;
        transition: 0.3s ease;
      }
    }

    .top-arrow:hover::before {
      transform: scale(1.2);
    }

    .top-arrow .ph-bold {
      z-index: 1;
    }

    @media (max-width: 870px) {
      .item1 {
        display: inline-block;
        width: 100%;
        justify-content: center;
      }

      .fa-brands {
        padding: 4vw 0;
      }

      .thanks {
        display: none;
      }
    }
  `;
  return (
    <>
      <Footer>
        <div className="d-flex justify-content-between">
          <div className="mt-4">{footerSvg}</div>
          <a href="/#home" className="mt-4 top-arrow">
            <i class="ph-bold ph-arrow-up"></i>
          </a>
        </div>
        <div className="d-lg-flex justify-content-lg-between">
          <div>
            <div className="mt-4">
              <a href="/#work" className="link-design">
                Work
              </a>
              <br />
              <a href="/#about" className="link-design">
                About
              </a>
              <br />
              <a href="/#work" className="link-design">
                Contact
              </a>
            </div>
            <p
              className="mt-4 text-start"
              style={{
                color: "var(--text-color)",
                fontSize: "clamp(15px, 2vw, 20px)",
                fontWeight: "200",
              }}
            >
              Designed and Developed with{" "}
              <i
                className="fa-solid fa-heart"
                style={{ color: "var(--highlight-color)" }}
              ></i>
            </p>
          </div>
          <div className="item1 mt-4">
            <p
              
              style={{
                color: "var(--text-color)",
                fontSize: "clamp(15px, 5vw, 60px)",
                fontWeight: "400",
                lineHeight: "1",
                textTransform: "uppercase",
              }}
            >
              &#169;2024
              <span
                style={{
                  color: "var(--highlight-color)",
                }}
              >
                {" "}
                •{" "}
              </span>
              <span style={{ fontWeight: "700" }}>
                <i>Subham Sharma</i>
              </span>
            </p>
          </div>
        </div>
      </Footer>
    </>
  );
}
