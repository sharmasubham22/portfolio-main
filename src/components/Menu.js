import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export default function Menu() {
    const navRef = useRef();
    const refClose = useRef();

    const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav");
    };

    const handleCloseClick = ()=>{
      refClose.current.click();
    }

    let location = useLocation();

  const StyledBtn = styled.div`
    ${({ theme }) => theme.mixins.resumeBtn};

    .res-btn {
      text-decoration: none;
      color: var(--highlight-color);
    }
  `;
  return (
    <>
      <div
        className="container-fluid fixed-top menu"
        style={{
          borderBottom: "1px solid",
          borderColor: "var(--border-color)",
        }}
      >
        <div className="d-flex bd-highlight">
          <div className="p-3 flex-fill bd-highlight menu-section">
            <Link className="fs-3 logo" to="/">
              subh.s
            </Link>
          </div>
          <div className="menu-nav" ref={navRef}>
            <Link
              className={`mx-4 nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
              type="button"
              to="/"
              onClick={handleCloseClick}
            >
              About
            </Link>
            <Link
              className={`mx-4 nav-link ${
                location.pathname === "/work" ? "active" : ""
              }`}
              to="/work"
              onClick={handleCloseClick}
            >
              Projects
            </Link>
            <Link
              className={`mx-4 nav-link ${
                location.pathname === "/contact" ? "active" : ""
              }`}
              to="/contact"
              onClick={handleCloseClick}
            >
              Contact
            </Link>
            <div className="d-flex">
              <Link
                to="https://www.linkedin.com/in/subham-sharma-137985128/"
                target="_blank"
                className="menu-social"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
              <Link
                to="https://github.com/sharmasubham22"
                target="_blank"
                className="menu-social"
              >
                <i className="fa-brands fa-github"></i>
              </Link>
            </div>
            <StyledBtn>
              <Link
                type="button"
                className="res-btn"
                to="https://drive.google.com/uc?export=view&id=1s6_WoJ-w99w4LENuxGMxD4ERIIvLF7bD"
                target="_blank"
              >
                My Resume
              </Link>
            </StyledBtn>
          </div>

          <div className="p-3 fs-3 bd-highlight menu-section nav-btn">
            <input type="checkbox" id="hi" />
            <label class="menu" for="hi" ref={refClose} onClick={showNavbar}>
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
