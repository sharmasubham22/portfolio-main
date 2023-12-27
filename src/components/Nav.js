import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { logoSvg, sun, moon } from "../images/assets";

export default function Nav(props) {
  let location = useLocation();

  const StyledBtn = styled.div`
    .res-btn {
      ${({ theme }) => theme.mixins.resumeBtn};
      text-decoration: none;
    }
  `;

  return (
    <div
      className="container-fluid sticky-top nav2"
      style={{
        borderBottom: "1px solid",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="d-flex bd-highlight">
        <div className="p-4 flex-grow-1 bd-highlight nav-section">
          <Link className="fs-3 logo" style={{ fontWeight: "700" }} to="/">
            {logoSvg} subh
          </Link>
        </div>
        <div
          className="p-4 bd-highlight nav-section d-flex justify-content-center"
          style={{
            textTransform: "uppercase",
          }}
        >
          <Link
            className={`mx-4 nav-link ${
              location.pathname === "/" ? "active" : ""
            }`}
            to="/"
          >
            Work
          </Link>
          <Link
            className={`mx-4 nav-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
            type="button"
            to="/about"
          >
            About
          </Link>
        </div>
        <div className="p-4 bd-highlight nav-section">
          <Link
            to="https://www.linkedin.com/in/subham-sharma-137985128/"
            target="_blank"
            className="nav-social"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </Link>
          <Link
            to="https://github.com/sharmasubham22"
            target="_blank"
            className="nav-social"
          >
            <i className="fa-brands fa-github"></i>
          </Link>
        </div>
        <div className="d-flex p-4 bd-highlight">
          <StyledBtn>
            <Link
              type="button"
              className="res-btn"
              to="https://drive.google.com/uc?export=view&id=1PrCF0G_hTFWh86LmyxAdFL7D2fj58aip"
              target="_blank"
            >
              Resume <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </StyledBtn>
          <div className="form-check form-switch d-flex justify-content-center align-items-center">
            <label
              htmlFor="flexSwitchCheckDefault"
              className="fs-3"
              style={{ color: "var(--content-color)", cursor: "pointer" }}
            >
              {props.mode === "light" ? moon : sun}
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggle}
              style={{ display: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
