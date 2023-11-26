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

  const StyledBtn = styled.button`
    ${({ theme }) => theme.mixins.resumeBtn};
  `;
  return (
    <>
      <div
        className="container-fluid sticky-top menu"
        style={{
          borderBottom: "1px solid",
          borderColor: "var(--border-color)",
        }}
      >
        <div className="d-flex bd-highlight">
          <div className="p-3 flex-fill bd-highlight menu-section">
            <Link className="fs-3 logo" to="/">
              &#60;subham.sharma/&#62;
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
            <div
              className="p-3 fs-3 bd-highlight menu-section nav-btn nav-close-btn"
              onClick={showNavbar} ref={refClose}
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
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
            <StyledBtn type="button">My Resume</StyledBtn>
          </div>
          <div className="p-3 fs-3 bd-highlight menu-section nav-btn">
            <i className="fa-solid fa-bars" onClick={showNavbar}></i>
          </div>
        </div>
      </div>
    </>
  );
}
