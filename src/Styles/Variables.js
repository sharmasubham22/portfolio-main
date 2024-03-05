import { css } from "styled-components"; 

const Variables = css`
  :root {
    --background-color: #0f0f0f;
    --border-color: rgb(200, 200, 200, 0.1);
    --card-color: #1a1a1a;
    --img-mask: #364156;
    --project-bg: #212121;
    --highlight-color: #affc41;
    --social-btn: rgba(175, 252, 65, 0.3);
    --text-color: #fdfdfd;
    --content-color: rgba(251, 251, 251, 0.5);
    --nav-bg: rgba(150, 150, 150, 0.1);
    --opacity: 0.5;
    --general-font: Inter;
    --heavy-font: cabinet grotesk, Sans-serif;
    --hero-font: northden;
    --border-radius: 2.5vh;
    --content-font: clamp(15px, 2vw, 18px);
  }

  [data-theme="dark"] {
    --background-color: #e1e1da;
    --border-color: rgb(5, 10, 24, 0.2);
    --card-color: #d5d3c8;
    --img-mask: #f7f4df;
    --project-bg: #e0dfd5;
    --highlight-color: #f9603a;
    --social-btn: rgba(249, 96, 58, 0.3);
    --text-color: #2a2b25;
    --nav-bg: rgba(100, 100, 100, 0.1);
    --opacity: 0.5;
    --content-color: #676e72;
  }
`;

export default Variables;

  // :root {
  //   --background-color: rgb(5, 10, 24);
  //   --border-color: rgb(255, 255, 255, 0.1);
  //   --card-color: #0b1124;
  //   --highlight-color: #9975fa;
  //   --text-color: rgb(255, 255, 255);
  //   --opacity: 0.5;
  //   --content-color: #aba3c7;
  //   --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
  //   --general-font: space grotesk;
  //   --heavy-font: shapiro;
  //   --heavy-font2: shapiro-air;

// second version ----------------------------------->
    //   --background-color: #02141f;
    // --border-color: rgb(255, 255, 255, 0.1);
    // --card-color: #032030;
    // --highlight-color: #64ffdb;
    // --text-color: #e1e1da;
    // --opacity: 0.5;
    // --button-text: #e1e1da;
    // --content-color: #96a9ad;
    // --featured-color: #00243b;
    // --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    // --general-font: Bai Jamjuree;
    // --heavy-font: cabinet grotesk, Sans-serif;
  // }

  //  [data-theme="dark"] {
  //   --background-color: rgb(255, 255, 255);
  //   --border-color: rgb(5, 10, 24, 0.1);
  //   --card-color: rgb(255, 255, 255);
  //   --highlight-color: #9975fa;
  //   --text-color: rgb(5, 10, 24);
  //   --opacity: 0.5;
  //   --content-color: #aba3c7;
  // }