import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { logoSvg } from '../images/assets';

export default function Menu(props) {
    const navRef = useRef();
    const refClose = useRef();

    const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav");
    };

    const handleCloseClick = ()=>{
      refClose.current.click();
    }


  const StyledBtn = styled.a`
    padding: 10px 20px;
    border: 1px solid var(--border-color);
    border-radius: 50px;
    font-weight: 500;
    background-color: var(--text-color);
    color: var(--background-color);
    position: relative;
    overflow: hidden;
    font-size: clamp(24px, 3vw, 28px);
    font-family: var(--general-font);
    text-decoration: none;
  `;
  return (
    <>
      <div
        className="container-fluid sticky-top menu-bar"
      >
        <div className="d-flex bd-highlight">
          <div className="p-3 flex-fill bd-highlight menu-section">
            <Link className="logo" to="/">
              {logoSvg}
            </Link>
          </div>
          <div className="menu-nav" ref={navRef}>
            <div className="form-check form-switch">
              <label
                htmlFor="flexSwitchCheckDefault"
                className="fs-1"
                style={{
                  color: "var(--content-color)",
                  marginLeft: "-40px",
                }}
              >
                {props.mode === "light" ? (
                  <i className="ph-fill ph-moon"></i>
                ) : (
                  <i className="ph-fill ph-sun"></i>
                )}
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
            <a
              className={`mx-4 menu-link`}
              href="/#home"
              onClick={handleCloseClick}
            >
              <span style={{ color: "var(--highlight-color)" }}>01. </span>Home
            </a>
            <a
              className={`mx-4 menu-link`}
              href="/#work"
              onClick={handleCloseClick}
            >
              <span style={{ color: "var(--highlight-color)" }}>02. </span>Work
            </a>
            <a
              className={`mx-4 menu-link`}
              href="/#about"
              onClick={handleCloseClick}
            >
              <span style={{ color: "var(--highlight-color)" }}>03. </span>About
            </a>
            <a
              className={`mx-4 menu-link`}
              href="/#contact"
              onClick={handleCloseClick}
            >
              <span style={{ color: "var(--highlight-color)" }}>04. </span>
              Contact
            </a>

            <StyledBtn
              className="res-btn my-2"
              href="https://drive.google.com/uc?export=view&id=1PrCF0G_hTFWh86LmyxAdFL7D2fj58aip"
              target="_blank"
            >
              <span>
                <i className="ph-bold ph-download-simple"></i> Resume
              </span>
            </StyledBtn>
            <div className="nav-social ">
              <Link
                to="https://www.linkedin.com/in/subham-sharma-137985128/"
                target="_blank"
                className="social-item fs-1"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>

              <Link
                to="https://github.com/sharmasubham22"
                target="_blank"
                className="social-item fs-1"
              >
                <i className="fa-brands fa-github"></i>
              </Link>
            </div>
          </div>

          <div className="bd-highlight menu-section nav-btn">
            <input type="checkbox" id="hi" />
            <label
              className="menu"
              htmlFor="hi"
              ref={refClose}
              onClick={showNavbar}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
