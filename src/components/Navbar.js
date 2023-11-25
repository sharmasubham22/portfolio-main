import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
// import logo from './logo.png'

export default function Navbar() {
  let location = useLocation();

  const StyledButton = styled.button`
    ${({ theme }) => theme.mixins.button};
  `;

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark d-flex bd-highlight"
        style={{
          borderBottom: "1px solid",
          borderColor: "var(--border-color)",
          padding: "20px",
        }}
      >
        
        <div className="container-fluid">
          <div className="p-2 flex-grow-1 bd-highlight">
            <Link
              className="navbar-brand fs-3"
              style={{ fontFamily: "Sono" }}
              to="/"
            >
              &#60;subham.sharma/&#62;
              {/* <img src={logo} alt="logo" width={50} style={{filter:"invert(1)"}}/> */}
            </Link>
          </div>
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
       
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ textTransform: "uppercase" }}
            >
              <li className="nav-item mx-lg-5 mx-sm-2">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  type="button"
                  style={{ fontFamily: "Sono" }}
                  aria-current="page"
                  to="/"
                >
                  About
                </Link>
              </li>
              <li className="nav-item mx-lg-5 mx-sm-2">
                <Link
                  className={`nav-link ${
                    location.pathname === "/work" ? "active" : ""
                  }`}
                  style={{ fontFamily: "Sono" }}
                  aria-current="page"
                  to="/work"
                >
                  Projects
                </Link>
              </li>
            </ul>

            <div className=" gap-3">
              <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item mx-lg-4">
                  <StyledButton type="button">Resume</StyledButton>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
