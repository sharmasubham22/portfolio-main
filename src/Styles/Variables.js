import { css } from "styled-components";


const Variables = css`

  :root {
    --background-color: #02141f;
    --border-color: rgb(255, 255, 255, 0.1);
    --card-color: #032030;
    --highlight-color: #a3b18a;
    --text-color: rgb(255, 255, 255);
    --opacity: 0.5;
    --content-color: #dad7cd;
    --featured-color: #00243b;
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --general-font: space grotesk;
    --heavy-font: archivo black;
  }

  [data-theme="dark"] {
    --background-color: #f0f3fa;
    --border-color: rgb(5, 10, 24, 0.1);
    --card-color: #d5deef;
    --featured-color: #00243b;
    --highlight-color: #02a3f5;
    --text-color: black;
    --opacity: 0.5;
    --content-color: #395886;
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