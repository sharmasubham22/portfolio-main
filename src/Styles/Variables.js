import { css } from "styled-components"; 

const Variables = css`
  :root {
    --background-color: #02141f;
    --border-color: rgb(255, 255, 255, 0.1);
    --card-color: #032030;
    --highlight-color: #64ffdb;
    --text-color: #e1e1da;
    --opacity: 0.5;
    --button-text: #e1e1da;
    --content-color: #96a9ad;
    --featured-color: #00243b;
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --general-font: Bai Jamjuree;
    --heavy-font: cabinet grotesk, Sans-serif;
  }

  [data-theme="dark"] {
    --background-color: #e1e1da;
    --border-color: rgb(5, 10, 24, 0.1);
    --card-color: #d5d3c8;
    --featured-color: #00243b;
    --highlight-color: #b46049;
    --text-color: #2a2b25;
    --opacity: 0.5;
    --button-text: #e1e1da;
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