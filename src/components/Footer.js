import React from "react";
import styled from "styled-components";

export default function Footer() {
  const Footer = styled.div`
    font-family: var(--general-font);
    border-top: 1px solid var(--border-color);
    display: flex;
    padding: 20px 15px 15px 15px;
    justify-content: space-between;

    @media (max-width: 870px) {
      display: inline-block;
      width: 100%;
      padding: 10px;
      justify-content: start;
    }
  `;
  return (
    <Footer>
      <div>
        <p style={{ color: "var(--content-color)" }}>
          Coded with{" "}
          <i
            className="fa-solid fa-heart"
            style={{ color: "var(--highlight-color)" }}
          ></i>
        </p>
      </div>
      <div>
        {" "}
        <p style={{ color: "var(--content-color)" }}>
          &#169; 2023{" "}
          <span
            style={{
              color: "var(--highlight-color)",
              fontWeight: "700",
              textTransform: "uppercase",
            }}
          >
            Subham Sharma
          </span>{" "}
        </p>
      </div>
    </Footer>
  );
}
