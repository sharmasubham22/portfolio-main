import React, { useEffect } from 'react'
import { loaderLogo, loaderSvg } from '../images/assets';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function Loader() {

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 3.5 });

    return animation.stop;
    // eslint-disable-next-line
  }, []);
  
  
        setTimeout(function () {
          document.querySelector("#loader").style.top = "-100%";
        }, 4300);

  return (
    <div id="loader">
      <div className="p-4 d-flex justify-content-between">
        <motion.h1 className='counter'>{rounded}</motion.h1>
        {loaderLogo}
      </div>
      <div className="d-flex justify-content-center align-items-center center-content">
        {loaderSvg}
        <h1 className="loader-text">Subham Sharma</h1>
      </div>
      <div className="text-center">
        <p
          className="loader-item"
          style={{
            fontFamily: "var(--heavy-font)",
            color: "var(--text-color)",
            fontWeight: "500",
            fontSize: "clamp(16px, 2vw, 24px)",
          }}
        >
          Portfolio | 2025
        </p>
      </div>
    </div>
  );
}
