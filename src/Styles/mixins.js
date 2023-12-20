import { css } from "styled-components";

const mixins = {
  button: css`
    color: var(--highlight-color);
    background-color: transparent;
    border: 1px solid var(--highlight-color);
    border-radius: 5px;
    font-size: clamp(15px, 2vw, 18px);
    font-family: var(--general-font);
    line-height: 1;
    text-decoration: none;
    padding: 1.25rem 1.75rem;
    transition: 0.2s ease;

    &:hover,
    &:focus-visible {
      outline: none;
      box-shadow: 4px 4px 0 0 var(--highlight-color);
      transform: translate(-5px, -5px);
    }
    &:after {
      display: none !important;
    }
  `,

  resumeBtn: css`
    color: var(--highlight-color);
    background-color: transparent;
    border: 1px solid var(--highlight-color);
    border-radius: 5px;
    font-size: clamp(15px, 2vw, 18px);
    font-family: var(--general-font);
    line-height: 1;
    text-decoration: none;
    padding: 0.75rem 1rem;
    transition: 0.2s ease;

    &:hover,
    &:focus-visible {
      outline: none;
      box-shadow: 4px 4px 0 0 var(--highlight-color);
      transform: translate(-5px, -5px);
    }
    &:after {
      display: none !important;
    }
  `,

  chip: css`
    color: var(--highlight-color);
    border: 1px solid;
    border-color: var(--highlight-color);
    width: fit-content;
    padding: 5px 10px;
    border-radius: 20px;
    font-family: var(--general-font);
    text-transform: uppercase;
    font-size: clamp(14px, 2vw, 17px);
    user-select: none;
  `,
};

export default mixins;