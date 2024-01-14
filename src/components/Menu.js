import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

export default function Menu(props) {
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
    .res-btn {
      ${({ theme }) => theme.mixins.resumeBtn};
      text-decoration: none;
      font-size:24px;
    }
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
          <div className="p-4 flex-fill bd-highlight menu-section">
            <Link className="logo fs-2" to="/">
              subham.
              <span
                style={{
                  color: "var(--highlight-color)",
                }}
              >
                sharma
              </span>
            </Link>
          </div>
          <div className="menu-nav" ref={navRef}>
            <Link
              className={`mx-4 nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
              to="/"
              onClick={handleCloseClick}
            >
              Work
            </Link>
            <Link
              className={`mx-4 nav-link ${
                location.pathname === "/about" ? "active" : ""
              }`}
              type="button"
              to="/about"
              onClick={handleCloseClick}
            >
              About
            </Link>

            <StyledBtn className="my-2">
              <Link
                type="button"
                className="res-btn"
                to="https://drive.google.com/uc?export=view&id=1PrCF0G_hTFWh86LmyxAdFL7D2fj58aip"
                target="_blank"
              >
                Resume <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </StyledBtn>

            <div>
              <Link
                to="https://www.linkedin.com/in/subham-sharma-137985128/"
                target="_blank"
                className="link-design mx-4 mt-3 fs-2"
              >
                <i className="ph ph-linkedin-logo fs-4 brand-icons"></i>
                <span className="mx-2">LinkedIn</span>
              </Link>
              <br />
              <Link
                to="https://github.com/sharmasubham22"
                target="_blank"
                className="link-design mx-4 mt-3 fs-2"
              >
                <i className="ph ph-github-logo fs-4 brand-icons"></i>
                <span className="mx-2">Github</span>
              </Link>
            </div>
            <div className="form-check form-switch">
              <label
                htmlFor="flexSwitchCheckDefault"
                className="fs-1"
                style={{
                  color: "var(--content-color)",
                  cursor: "pointer",
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
