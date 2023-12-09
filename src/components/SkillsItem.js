import React from "react";
import styled from "styled-components";

export default function SkillsItem(props) {
  let { category, skills } = props;

  const StyledChip = styled.h5`
    color: var(--text-color);
    border: 1px solid var(--highlight-color);
    width: fit-content;
    padding: 10px 15px;
    border-radius: 8px;
    font-family: var(--general-font);
    display: inline-block;
    margin-right: 10px;
    transition: 0.3s ease;
    user-select: none;

    &:hover {
      transform: translateY(-5px);
      color:var(--highlight-color);
    }
  `;

  return (
    <div>
      <div className={`card bg-transparent border-0`}>
        <div className="card-body ">
          <h6
            className={`card-subtitle mb-2 `}
            style={{
              fontFamily: "var(--general-font)",
              fontSize: "clamp(17px, 2vw, 18px)",
              color: "var(--content-color)",
              textTransform: "uppercase",
              paddingBottom: "10px",
            }}
          >
            {category}
          </h6>
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
