import React, { useEffect, useRef } from "react";
import FeaturedProjects from "../FeaturedProjects";
import projectsData from '../../data/Projects.json'
import styled from "styled-components";
import OtherProjects from "../OtherProjects";
import otherData from '../../data/Others.json'
import { Link } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import Reveal from "../Motion";

export default function Projects() {
    const StyledProjects = styled.section`
      h1 {
        ${({ theme }) => theme.mixins.chip};
      }

      .connect {
        ${({ theme }) => theme.mixins.button};
      }

      p {
        color: var(--content-color);
        font-family: var(--general-font);
      }

      .contact-section {
        text-align: center;
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
    <div className="container" style={{ marginTop: "5%", marginBottom: "5%" }}>
      <StyledProjects>
        <h1>My Work</h1>
        <Reveal>
          <h2
            className="my-5"
            style={{
              fontFamily: "var(--heavy-font)",
              color: "var(--text-color)",
              fontSize: "clamp(40px, 4vw, 8vw)",
              textTransform: "uppercase",
            }}
          >
            Projects
          </h2>
        </Reveal>
        <div ref={ref}>
          <motion.div initial="hidden" animate={controls} variants={variants}>
            {projectsData.map((element, index) => {
              return (
                <motion.div key={index} variants={variants}>
                  <FeaturedProjects
                    title={element.title}
                    description={element.description}
                    techs={element.technologies}
                    imageLink={element.imgLink}
                    git={element.git}
                    demo={element.demo}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <h3 className="section-head" style={{ marginTop: "10%" }}>
          Other Projects
        </h3>
        <div ref={ref}>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            className="row my-5 row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"
          >
            {otherData.map((element, index) => {
              return (
                <motion.div className="col" key={index} variants={variants}>
                  <OtherProjects
                    title={element.title}
                    description={element.description}
                    techs={element.technologies}
                    git={element.git}
                    demo={element.demo}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <div className="contact-section">
          <p> Did you like my profile?</p>
          <Link type="button" className="connect" to="/contact">
            Get in Touch!
          </Link>
        </div>
      </StyledProjects>
    </div>
  );
}
