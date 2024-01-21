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

    // const handleCloseClick = ()=>{
    //   refClose.current.click();
    // }

    // let location = useLocation();

  const StyledBtn = styled.a`
    padding: 10px 20px;
    border: 1px solid var(--border-color);
    border-radius: 50px;
    font-weight: 200;
    color: var(--text-color);
    position: relative;
    overflow: hidden;
    font-size: clamp(24px, 3vw, 28px);
    font-family: var(--general-font);
    text-decoration:none;

    &:after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: var(--text-color2);
      left: 0;
      bottom: -100%;
      border-radius: 50%;
      transition: all ease 0.4s;
    }

    &:hover::after {
      bottom: 0;
      border-radius: 0%;
    }

    span {
      text-decoration: none;
      color: var(--text-color);
      z-index: 2;
      position: relative;
    }

    &:hover span {
      color: var(--background-color);
    }
  `;
  return (
    <>
      <div
        className="container-fluid sticky-top menu"
        // style={{
        //   borderBottom: "1px solid",
        //   borderColor: "var(--border-color)",
        // }}
      >
        <div className="d-flex bd-highlight">
          <div className="p-4 flex-fill bd-highlight menu-section">
            <Link className="logo fs-2" to="/">
              {logoSvg}
            </Link>
          </div>
          <div className="menu-nav" ref={navRef}>
            {/* <Link
              className={`mx-4 nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
              to="/"
              onClick={handleCloseClick}
            >
              <span style={{ color: "var(--highlight-color)"}}>01. </span>Work
            </Link>
            <Link
              className={`mx-4 nav-link ${
                location.pathname === "/about" ? "active" : ""
              }`}
              type="button"
              to="/about"
              onClick={handleCloseClick}
            >
              <span style={{ color: "var(--highlight-color)" }}>02. </span>About
            </Link> */}

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
                className="link-design mx-4 mt-4 fs-2"
              >
                <i className="ph ph-github-logo fs-4 brand-icons"></i>
                <span className="mx-2">Github</span>
              </Link>
            </div>
            <StyledBtn
              className="res-btn my-2"
              href="https://drive.google.com/uc?export=view&id=1PrCF0G_hTFWh86LmyxAdFL7D2fj58aip"
              target="_blank"
            >
              <span>
                Resume <i className="ph ph-download-simple"></i>
              </span>
            </StyledBtn>
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
