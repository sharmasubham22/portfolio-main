import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { logoSvg } from "../images/assets";

export default function Nav(props) {

  const StyledBtn = styled.div`
    .res-btn {
      ${({ theme }) => theme.mixins.resumeBtn};
      text-decoration: none;
      cursor: pointer;
    }
  `;

  return (
    <motion.div
      style={{
        position: "fixed",
        top: "0",
        width: "100%",

        // background:
        //   "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent)",
        zIndex: 3,
      }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ delay: 5, duration: 0.5 }}
    >
      <div className="container-fluid nav2">
        <div className="row">
          <div className=" col">
            <Link className="logo fs-3" to="/">
              {logoSvg}
            </Link>
          </div>
          <div className=" d-flex justify-content-center col">
            <div className="d-flex nav-item2">
              {/* <a className={`nav-link`} href="/#home">
              <span style={{ color: "var(--highlight-color)" }}>01. </span>Home
            </a> */}
              <a className="nav-link" href="/#work">
                <span style={{ color: "var(--highlight-color)" }}>01. </span>
                Work
              </a>
              <a className="nav-link" href="/#about">
                <span style={{ color: "var(--highlight-color)" }}>02. </span>
                About
              </a>
              <a className="nav-link" href="/#contact">
                <span style={{ color: "var(--highlight-color)" }}>03. </span>
                Contact
              </a>
            </div>
          </div>

          <div className="d-flex d-flex justify-content-end col">
            <StyledBtn className="d-flex justify-content-center align-items-center">
              <Link
                type="button"
                className="res-btn"
                to="https://drive.google.com/uc?export=view&id=1PrCF0G_hTFWh86LmyxAdFL7D2fj58aip"
                target="_blank"
              >
                <span>
                  <i className="ph-bold ph-download-simple"></i> Resume
                </span>
              </Link>
            </StyledBtn>
            <div className="nav-social d-flex justify-content-center align-items-center">
              <Link
                to="https://www.linkedin.com/in/subham-sharma-137985128/"
                target="_blank"
                className="social-item"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>

              <Link
                to="https://github.com/sharmasubham22"
                target="_blank"
                className="social-item"
              >
                <i className="fa-brands fa-github"></i>
              </Link>
              <label
                htmlFor="flexSwitchCheckDefault"
                style={{ cursor: "pointer" }}
                className="social-item"
              >
                {props.mode === "light" ? (
                  <i className="ph-fill ph-sun"></i>
                ) : (
                  <i className="ph-fill ph-moon"></i>
                )}
              </label>
              <input
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggle}
                style={{ display: "none" }}
              />
            </div>
            {/* <div className="d-flex justify-content-center align-items-center nav-social">
              <label
                htmlFor="flexSwitchCheckDefault"
                style={{ cursor: "pointer" }}
                className="social-item"
              >
                {props.mode === "light" ? (
                  <i className="ph-fill ph-moon"></i>
                ) : (
                  <i className="ph-fill ph-sun"></i>
                )}
              </label>
              <input
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggle}
                style={{ display: "none" }}
              />
            </div> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
