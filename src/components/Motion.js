import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef} from "react";

const Reveal = ({ children }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const onScreen = useInView(ref, { once: true });

  useEffect(() => {
    if (onScreen) {
      controls.start("visible");
    }
    // eslint-disable-next-line
  }, [onScreen]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
