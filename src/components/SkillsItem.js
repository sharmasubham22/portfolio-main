import React from "react";
import styled from "styled-components";
import { bullet3, line } from "../images/bullets";

export default function SkillsItem(props) {
  let { category, skills } = props;

  const StyledChip = styled.p`
    color: var(--text-color);
    border: 1px solid var(--card-color);
    background: var(--card-color);
    width: fit-content;
    padding: 10px 15px;
    border-radius: 8px;
    font-family: var(--general-font);
    display: inline-block;
    margin-right: 10px;
    transition: 0.3s ease;
    user-select: none;
    font-size: clamp(17px, 2vw, 20px);

    &:hover {
      transform: translateY(-5px);
      color: var(--highlight-color);
      border: 1px solid var(--highlight-color);
    }
  `;

  return (
    <div>
      <div className={`card bg-transparent border-0`}>
        <div className="card-body ">
          <p
            className={`card-subtitle `}
            style={{
              fontFamily: "var(--general-font)",
              fontSize: "clamp(15px, 2vw, 20px)",
              color: "var(--content-color)",
            }}
          >
            {bullet3}
            {category}
          </p>
          {line}
          {skills.map((keyValue, keyIndex) => (
            <StyledChip className="my-1" key={keyIndex}>
              {keyValue}
            </StyledChip>
          ))}
        </div>
      </div>
    </div>
  );
}
