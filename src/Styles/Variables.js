import { css } from "styled-components";

const Variables = css`
  :root {
    --background-color: rgb(5, 10, 24);
    --border-color: rgb(255, 255, 255, 0.1);
    --card-color: #0b1124;
    --highlight-color: #9975fa;
    --text-color: rgb(255, 255, 255);
    --opacity: 0.5;
    --content-color: #aba3c7;
    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .section-head {
    font-family: "shapiro";
    text-transform: uppercase;
    color: var(--text-color);
    font-size: clamp(20px, 4vw, 40px);
  }

  .navbar {
    background-color: rgb(6, 11, 25, 0.9);
    backdrop-filter: blur(10px);
  }
`;

export default Variables;