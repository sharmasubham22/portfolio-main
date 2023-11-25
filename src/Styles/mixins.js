import { css } from "styled-components";

const mixins = {
  button: css`
    color: var(--highlight-color);
    background-color: transparent;
    border: 1px solid var(--highlight-color);
    border-radius: 5px;
    font-size: clamp(15px, 2vw, 18px);
    font-family: sono;
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

  chip: css`
    color: #9975fa;
    border: 1px solid;
    border-color: #9975fa;
    width: fit-content;
    padding: 5px 10px;
    border-radius: 20px;
    font-family: Sono;
    text-transform: uppercase;
    font-size: clamp(10px, 2vw, 17px);
  `,
};

export default mixins;