import { css } from "styled-components";

const mixins = {
  button: css`
    color: var(--highlight-color);
    background-color: transparent;
    border: 1.5px solid var(--highlight-color);
    border-radius: 3px;
    font-size: clamp(15px, 2vw, 18px);
    font-weight:700;
    font-family: var(--general-font);
    line-height: 1;
    text-decoration: none;
    padding: 1.25rem 1.75rem;
    transition: 0.3s ease;
    box-shadow: 1px 1px 0px var(--highlight-color), 2px 2px 0px var(--highlight-color), 3px 3px 0px var(--highlight-color),
      4px 4px 0px var(--highlight-color), 5px 5px 0px var(--highlight-color), 6px 6px 0px var(--highlight-color);

    &:hover,
    &:focus-visible {
      outline: none;
      box-shadow: none;
      transform: translate(5px, 5px);
      background-color: transparent;
      color: var(--highlight-color);
    }
    &:after {
      display: none !important;
    }
  `,

  resumeBtn: css`
    color: var(--background-color);
    background-color: var(--highlight-color);
    border: 1px solid var(--highlight-color);
    border-radius: 5px;
    font-size: clamp(15px, 2vw, 18px);
    font-family: var(--general-font);
    line-height: 1;
    text-decoration: none;
    padding: 0.75rem 1rem;
    transition: 0.2s ease-out;

    &:hover,
    &:focus-visible {
      outline: none;
      // box-shadow: 4px 4px 0 0 var(--highlight-color);
      // transform: translate(0px, -5px);
      background-color: transparent;
      color: var(--highlight-color);
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