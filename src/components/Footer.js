import React from "react";
import styled from "styled-components";
import { headSvg, logoSvg } from "../images/assets";
import { Link } from "react-router-dom";

export default function Footer() {
  const Footer = styled.div`
    font-family: var(--general-font);
    border-top: 1px solid var(--border-color);
    padding: 2vw 2vw 0 2vw;

    .item1 {
      display: flex;
      padding: 60px 0 0 0;
      justify-content: space-between;
    }

    .fa-brands {
      color: var(--text-color2);
      font-size: 20px;
      margin: 0 10px;
      transition: 0.2s;

      &:hover {
        color: var(--highlight-color);
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
        <div className="text-center text-lg-start mt-4">{logoSvg}</div>
        <div className="item1">
          <p
            className="text-center"
            style={{
              color: "var(--content-color)",
              fontSize: "clamp(15px, 2vw, 20px)",
              fontWeight: "200",
              lineHeight: "1",
            }}
          >
            &#169; 2024{" • "}
            <span
              style={{
                color: "var(--text-color2)",
                fontWeight: "500",
                // textTransform: "uppercase",
              }}
            >
              Subham Sharma
            </span>
          </p>

          <div className="d-flex align-items-center justify-content-center">
            <Link to="https://www.instagram.com/subh.sharma22/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link
              to="https://www.facebook.com/subham.sharma.5209/"
              target="_blank"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </Link>
            <Link to="https://twitter.com/subh_sharma22" target="_blank">
              <i className="fa-brands fa-x-twitter"></i>
            </Link>
            <Link
              to="https://www.linkedin.com/in/subham-sharma-137985128/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
            <Link to="https://github.com/sharmasubham22" target="_blank">
              <i className="fa-brands fa-github"></i>
            </Link>
          </div>

          <p
            className="text-center"
            style={{
              color: "var(--content-color)",
              fontSize: "clamp(15px, 2vw, 20px)",
              fontWeight: "200",
            }}
          >
            Designed and &lt; &gt; with{" "}
            <i
              className="fa-solid fa-heart"
              style={{ color: "var(--highlight-color)" }}
            ></i>
          </p>
        </div>
        <p
          className="thanks text-center mt-2"
          style={{
            fontFamily: "var(--heavy-font)",
            color: "var(--card-color)",
            fontSize: "clamp(8vw, 11vw, 15vw)",
            lineHeight: "1",
            textTransform: "uppercase",
            fontWeight: "400",
            userSelect: "none",
          }}
        >
          Thank{headSvg}
          <i style={{ fontWeight: "700" }}>You</i>
        </p>
      </Footer>
    </>
  );
}
