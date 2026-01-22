import React from "react";
import styled from "styled-components";
import { logoSvg } from "../images/assets";

export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();
  const Footer = styled.div`
    font-family: var(--heavy-font);
    border-top: 1px solid var(--border-color);
    padding: 2vw 0;
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

    .footer-nav {
      font-size: var(--content-font);
      font-weight: 400;
      color: var(--text-color);
      text-decoration: none;
      font-family: var(--general-font);

      .ph {
        opacity: 0;
        transition: 0.3s ease;
      }

      &:hover {
        .ph {
          opacity: 1;
        }
      }
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
        <div className="container">
          <div className="d-md-flex justify-content-md-between">
            <div className="mb-4">{logoSvg}</div>
            <div>
              <div>
                <p
                  style={{
                    textTransform: "uppercase",
                    color: "var(--content-color)",
                    fontFamily: "var(--general-font)",
                    fontSize: "12px",
                  }}
                >
                  Main
                </p>
                <a href="/#work" className="footer-nav">
                  Work <i className="ph ph-arrow-up-right"></i>
                </a>
                <br />
                <a href="/#about" className="footer-nav">
                  About <i className="ph ph-arrow-up-right"></i>
                </a>
                <br />
                <a href="/#contact" className="footer-nav">
                  Contact <i className="ph ph-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
      
            <div className="item1 mt-4">
              <div>
                <p
                  style={{
                    color: "var(--text-color)",
                    fontSize: "var(--content-font)",
                    fontWeight: "400",
                  }}
                >
                  &#169; {year} Subham Sharma. All Rights Reserved.
                  {/* <span
                  style={{
                    color: "var(--highlight-color)",
                  }}
                >
                  {" "}
                  •{" "}
                </span> */}
                </p>
                <p
                  style={{
                    color: "var(--content-color)",
                    fontSize: "clamp(15px, 2vw, 16px)",
                  }}
                >
                  Created with{" "}
                  <i
                    className="fa-solid fa-heart"
                    style={{ color: "var(--highlight-color)" }}
                  ></i> by yours truly.
                </p>
              </div>
            </div>
         
        </div>
      </Footer>
    </>
  );
}
