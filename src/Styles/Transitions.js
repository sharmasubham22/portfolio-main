import { css } from "styled-components";

const TransitionStyles = css`
  .fadeup-appear {
    opacity: 0.01;
    transform: translateY(20px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }

  .fadeup-appear-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }

  .fadedown-appear {
    opacity: 0.01;
    transform: translateY(-20px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }

  .fadedown-appear-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 300ms var(--easing), transform 300ms var(--easing);
  }

  .fade-appear {
    opacity: 0;
  }
  .fade-appear-active {
    opacity: 1;
    transition: opacity 300ms var(--easing);
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 300ms var(--easing);
  }
`;

export default TransitionStyles;
