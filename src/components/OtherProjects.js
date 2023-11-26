import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, useAnimation, useInView } from "framer-motion";

export default function OtherProjects(props) {
     let { title, description, techs, git, demo } = props;

     const StyledCard = styled.section`
       font-family: var(--general-font);

       .card {
         background-color: var(--card-color);
         transition: 0.3s ease;
       }

       .card:hover {
         transform: translate(0, -10px);
       }

       .card-title {
         color: var(--text-color);
         text-transform: uppercase;
       }

       .card-subtitle {
         color: var(--highlight-color);
         text-transform: uppercase;
       }

       .card-text {
         color: var(--content-color);
       }

       .fa-folder {
         font-size: 50px;
         color: var(--highlight-color);
       }
       .fa-brands,
       .fa-solid {
         margin-left: 30px;
       }

       .project-link {
         text-decoration: none;
         color: var(--text-color);
         font-size: 24px;
       }

       .project-link:hover {
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
            transition: { staggerChildren: 0.35, duration: 0.5 },
          },
          hidden: { opacity: 0, y: 75 },
        };
  return (
    <>
      <div ref={ref}>
        <motion.div initial="hidden" animate={controls} variants={variants}>
          <StyledCard>
            <div className="card p-4">
              <div className="card-body">
                <div className="d-flex bd-highlight mb-3">
                  <div className="flex-grow-1 bd-highlight">
                    <i className="fa-regular fa-folder"></i>
                  </div>
                  <div className="bd-highlight">
                    <Link className="project-link" to={git}>
                      <i className="fa-brands fa-github"></i>
                    </Link>
                  </div>
                  <div className="bd-highlight">
                    <Link className="project-link" to={demo}>
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </Link>
                  </div>
                </div>
                <h5 className="card-title fs-3">{title}</h5>

                <p className="card-text">{description}</p>
                {techs.map((techKey, techIndex) => {
                  return (
                    <h6
                      className="card-subtitle mb-2"
                      style={{ display: "inline", marginRight: "10px" }}
                      key={techIndex}
                    >
                      {techKey}
                    </h6>
                  );
                })}
              </div>
            </div>
          </StyledCard>
        </motion.div>
      </div>
    </>
  );
}
