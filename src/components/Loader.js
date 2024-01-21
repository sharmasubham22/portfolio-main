import React from 'react'
import { loaderLogo, loaderSvg } from '../images/assets';

export default function Loader() {
  
        setTimeout(function () {
          document.querySelector("#loader").style.top = "-100%";
        }, 4300);

  return (
    <div id="loader">
      <div className="p-4 text-end">
        {loaderLogo}
      </div>
      <div className="d-flex justify-content-center align-items-center center-content">
        {loaderSvg}
        <h1 className="loader-text">Design</h1>
        <h1 className="loader-text">Develop</h1>
        <h1 className="loader-text">Deploy</h1>
      </div>
      <div className="text-center">
        <p className='loader-item'
          style={{
            fontFamily: "var(--general-font)",
            color: "var(--content-color)",
            fontWeight: "500",
            fontSize: "clamp(16px, 2vw, 24px)",
          }}
        >
          Subham Sharma
        </p>
      </div>
    </div>
  );
}
