import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export default function Nav() {
  let location = useLocation();

  const StyledBtn = styled.div`
    .res-btn {
      ${({ theme }) => theme.mixins.resumeBtn};
      text-decoration: none;
      color: var(--highlight-color);
    }
  `;
  
      const controls = useAnimation();
      const ref = useRef(null);
      const onScreen = useInView(ref, { once: true });

      useEffect(() => {
        if (onScreen) {
          controls.start("visible");
        }
        // eslint-disable-next-line
      }, [onScreen]);

      const variants = {
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.25, duration: 0.25 },
        },
        hidden: { opacity: 0, y: -75 },
      };
  return (
    <div
      className="container-fluid fixed-top nav2"
      style={{
        borderBottom: "1px solid",
        borderColor: "var(--border-color)",
      }}
    >
      <div ref={ref}>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          className="d-flex bd-highlight"
        >
          <motion.div
            variants={variants}
            className="p-4 flex-grow-1 bd-highlight nav-section"
          >
            <Link className="fs-3 logo" to="/">
              subh.s
            </Link>
          </motion.div>
          <motion.div
            variants={variants}
            className="p-4 bd-highlight nav-section d-flex justify-content-center"
            style={{
              textTransform: "uppercase",
            }}
          >
            <Link
              className={`mx-4 nav-link ${
                location.pathname === "/" ? "active" : ""
              }`}
              type="button"
              to="/"
            >
              About
            </Link>
            <Link
              className={`mx-4 nav-link ${
                location.pathname === "/work" ? "active" : ""
              }`}
              to="/work"
            >
              Projects
            </Link>
          </motion.div>
          <motion.div
            variants={variants}
            className="p-4 bd-highlight nav-section"
          >
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
          </motion.div>
          <motion.div variants={variants} className="p-4 bd-highlight">
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
          </motion.div>
          {/* <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
          </div> */}
        </motion.div>
      </div>
    </div>
  );
}
