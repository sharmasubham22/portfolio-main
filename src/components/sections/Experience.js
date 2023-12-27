import React, { useEffect, useRef } from "react";
import WorkItem from "../WorkItem";
import workData from "../../data/Work.json";
import Reveal from "../Motion";
import { motion, useAnimation, useInView } from "framer-motion";
import { bullet4 } from "../../images/bullets";

export default function Experience() {
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
      <Reveal>
        <h1 className="my-5 section-head d-flex">
          <div className="bullet-hashtag">{bullet4}</div> Experience
        </h1>
      </Reveal>
      <div ref={ref}>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={variants}
          className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 g-4"
        >
          {workData.map((element, index) => {
            return (
              <motion.div key={index} variants={variants} className="col">
                <WorkItem
                  name={element.name}
                  position={element.position}
                  duration={element.duration}
                  keys={element.keyPoints}
                  description={element.description}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
