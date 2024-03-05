import { css } from "styled-components";

const mixins = {
  button: css`
    padding: 7px 20px;
    border: 1px solid transparent;
    border-radius: 50px;
    font-weight: 400;
    color: var(--text-color);
    position: relative;
    overflow: hidden;
    font-size: clamp(15px, 2vw, 18px);
    font-family: var(--general-font);
    background: var(--highlight-color);

    &:after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: var(--background-color);
      left: 0;
      bottom: -100%;
      border-radius: 50%;
      transition: all ease 0.4s;
    }

    &:hover::after {
      bottom: 0;
      border-radius: 0%;
    }

    span {
      text-decoration: none;
      color: var(--background-color);
      z-index: 2;
      position: relative;
    }

    &:hover span {
      color: var(--highlight-color);
    }
  `,

  resumeBtn: css`
    padding: 7px 20px;
    border-radius: 50px;
    border: 1px solid transparent;
    font-weight: 400;
    color: var(--text-color);
    position: relative;
    overflow: hidden;
    font-size: 18px;
    font-family: var(--general-font);
    background: var(--highlight-color);

    &:after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: var(--background-color);
      left: 0;
      bottom: -100%;
      border-radius: 50%;
      transition: all ease 0.4s;
    }

    &:hover::after {
      bottom: 0;
      border-radius: 0%;
    }

    span {
      text-decoration: none;
      color: var(--background-color);
      z-index: 2;
      position: relative;
    }

    &:hover span {
      color: var(--highlight-color);
    }
  `,

  chip: css`
    color: var(--highlight-color);
    border: 1px solid;
    border-color: var(--highlight-color);
    width: fit-content;
    padding: 5px 15px;
    border-radius: 20px;
    font-family: var(--general-font);
    text-transform: uppercase;
    font-size: clamp(15px, 2vw, 20px);
    user-select: none;
  `,
};

export default mixins;