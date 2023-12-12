import React from "react";
import styled from "styled-components";

export default function SkillsItem(props) {
  let { category, skills } = props;

  const StyledChip = styled.h4`
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
            <span style={{ color: "var(--highlight-color)" }}>◇ </span>
            {category}
          </p>
          <svg width="100%" height="3" viewBox="0 0 1170 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M775.445 0C791.385 0 847.828 0.0468455 884.016 0.0312405C967.761 0.00783298 1051.51 0.00779868 1135.05 0.288689C1148.1 0.335504 1170.3 0.335506 1169.85 1.21719C1169.39 2.13788 1154.53 2.66846 1131.76 2.63725C1076.65 2.55142 1021.25 2.34077 966.426 2.50462C886.209 2.7387 806.124 2.61387 726 2.66068C654.045 2.69969 582.067 2.65288 510.12 2.70749C442.535 2.75431 374.973 2.95717 307.411 2.94937C249.103 2.94157 190.811 2.71527 132.487 2.62944C118.755 2.61384 102.229 2.76992 87.17 2.76212C74.725 2.74651 53.9625 2.74647 41.6268 2.66844C36.3055 2.63723 30.7735 2.59043 25.5614 2.62944C1.60771 2.77769 -4.72793 2.45778 3.29305 1.45125C5.05642 1.23278 3.01995 0.936308 8.81721 0.788061C9.05909 0.780258 9.53505 0.77248 9.75352 0.764678C27.317 0.156083 45.3329 0.436971 63.4816 0.421366C152.563 0.351143 241.667 0.343329 330.764 0.312119C385.429 0.296514 440.163 0.335523 494.726 0.210683C509.668 0.179473 524.61 0.0468417 539.778 0.124867H539.52C555.344 0.0936567 571.167 0.0312005 586.991 0.039003C646.852 0.0468055 709.365 -0.0312119 766.799 0.0468131C769.062 0.0390106 772.113 0 775.445 0Z" fill="var(--highlight-color)"/>
</svg>

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
