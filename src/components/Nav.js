import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { logoSvg } from "../images/assets";

export default function Nav(props) {
  // let location = useLocation();

  const StyledBtn = styled.div`
    .res-btn {
      ${({ theme }) => theme.mixins.resumeBtn};
      text-decoration:none;
      cursor:pointer;
    }
  `;

  return (
    <motion.div
      style={{ position: "sticky", top: "0", zIndex: 1000 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ delay: 5, duration: 0.5 }}
    >
      <div
        className="container-fluid nav2"
        // style={{
        //   borderBottom: "1px solid",
        //   borderColor: "var(--border-color)",
        // }}
      >
        <div className="d-flex bd-highlight">
          <div className="p-4 flex-grow-1 bd-highlight nav-section">
            <Link className="logo fs-3" to="/">
              {logoSvg}
            </Link>
          </div>
          {/* <div
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
              <span style={{ color: "var(--highlight-color)" }}>01. </span>Work
            </Link>
            <Link
              className={`mx-4 nav-link ${
                location.pathname === "/about" ? "active" : ""
              }`}
              type="button"
              to="/about"
            >
              <span style={{ color: "var(--highlight-color)" }}>02. </span>About
            </Link>
          </div> */}
          <div className="bd-highlight nav-section d-flex align-items-center mx-4">
            <Link
              to="https://www.linkedin.com/in/subham-sharma-137985128/"
              target="_blank"
              className="link-design mx-4"
              style={{
                textDecoration: "none",
                fontSize: "clamp(15px, 2vw, 20px)",
              }}
            >
              LinkedIn
            </Link>

            <Link
              to="https://github.com/sharmasubham22"
              target="_blank"
              className="link-design"
              style={{
                textDecoration: "none",
                fontSize: "clamp(15px, 2vw, 20px)",
              }}
            >
            
                Github
          
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
                <span>
                  <i className="ph ph-download-simple"></i> Resume
                </span>
              </Link>
            </StyledBtn>
            <div className="form-check form-switch d-flex justify-content-center align-items-center">
              <label
                htmlFor="flexSwitchCheckDefault"
                className="fs-3"
                style={{ color: "var(--content-color)", cursor: "pointer" }}
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
        </div>
      </div>
    </motion.div>
  );
}
