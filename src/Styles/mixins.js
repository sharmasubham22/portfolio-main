import { css } from "styled-components";

const mixins = {
  button: css`
    padding: 10px 20px;
    border: 1px solid var(--border-color);
    border-radius: 50px;
    font-weight: 400;
    color: var(--text-color);
    position: relative;
    overflow: hidden;
    font-size: clamp(15px, 2vw, 24px);
    font-family: var(--general-font);
    background: transparent;

    &:after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: var(--text-color);
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
      color: var(--text-color);
      z-index: 2;
      position: relative;
    }

    &:hover span {
      color: var(--background-color);
    }

    &:hover span .fa-arrow-right {
      transform: rotate(0deg);
    }
  `,

  resumeBtn: css`
    padding: 7px 20px;
    border: 1px solid var(--border-color);
    border-radius: 50px;
    font-weight: 400;
    color: var(--text-color);
    position: relative;
    overflow: hidden;
    font-size: clamp(15px, 2vw, 18px);
    font-family: var(--general-font);

    &:after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: var(--text-color);
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
      color: var(--text-color);
      z-index: 2;
      position: relative;
    }

    &:hover span {
      color: var(--background-color);
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