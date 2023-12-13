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
            <svg
              width="13"
              height="16"
              viewBox="0 0 13 16"
              fill="none"
              style={{ marginRight: "10px" }}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8784 12.5732C12.2184 11.5217 11.4368 10.5549 10.5504 9.69364C10.1803 9.31624 9.84348 8.89736 9.49186 8.49732C9.44375 8.49732 9.37712 8.49731 9.34751 8.44825L8.1668 7.11603C8.44876 6.44663 8.7791 5.7995 9.15504 5.17998C9.77314 4.07043 10.4542 2.99862 11.1352 1.92304C11.2758 1.70415 11.6903 1.66642 11.3054 1.08145C11.2388 0.926719 11.0019 0.77951 10.8502 0.632325C10.1543 -0.0507639 9.85827 -0.163978 9.76204 0.21342C9.73984 0.296447 9.64727 0.33044 9.58805 0.383276C8.99956 0.232317 9.41042 0.885214 8.96998 0.855023C9.02664 0.964353 9.0436 1.09057 9.01787 1.21141C8.99214 1.33225 8.92535 1.43994 8.82933 1.51547C8.2316 2.15802 7.67761 2.84141 7.1712 3.56093C6.83558 4.14344 6.54479 4.75164 6.30142 5.38001C5.77955 4.91581 5.3206 4.38746 4.82094 3.87042C3.91044 2.9307 3.01474 1.98341 2.07833 1.05879C1.88587 0.870087 1.91176 0.436113 1.27886 0.715387C1.116 0.753127 0.93464 0.968244 0.764385 1.09278C-0.0128689 1.67398 -0.172012 1.95324 0.1722 2.11552C0.246225 2.14948 0.26102 2.24762 0.301734 2.31555C0.0463503 2.87787 0.749585 2.57972 0.631147 3.0175C0.746026 2.98272 0.869279 2.99052 0.979039 3.03957C1.0888 3.08862 1.17797 3.17573 1.23074 3.28544C1.75631 3.96853 2.18195 4.74976 2.75564 5.38379C3.42556 6.13858 4.23614 6.71978 4.94677 7.41797C5.0393 7.50854 5.12812 7.60289 5.21695 7.69724C4.96897 8.2105 4.72468 8.73127 4.51371 9.2634C4.07697 10.3956 3.5181 11.4523 3.32193 12.66C3.19609 13.4827 2.74083 14.1998 2.43363 14.9772C2.30779 15.298 2.72975 15.6528 3.56622 15.9056C4.4027 16.1585 4.46559 15.8414 4.55812 15.6754C5.10633 14.6161 5.56572 13.5114 5.9313 12.3731C6.11266 11.8939 6.32359 11.4221 6.54197 10.9579C6.54197 10.9088 6.51236 10.8523 6.54197 10.8108C6.71592 10.4334 6.91208 10.0295 7.08974 9.64457L7.15267 9.71252C7.98545 10.5466 8.69979 11.4976 9.6621 12.2071C10.3172 12.694 10.7243 13.4337 11.2166 14.0941C11.4202 14.3621 11.9569 14.1696 12.5787 13.5657C13.2005 12.9619 12.9784 12.7468 12.8784 12.5732Z"
                fill="var(--highlight-color)"
              />
            </svg>

            {category}
          </p>
          <svg
            width="100%"
            height="3"
            viewBox="0 0 1170 3"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M775.445 0C791.385 0 847.828 0.0468455 884.016 0.0312405C967.761 0.00783298 1051.51 0.00779868 1135.05 0.288689C1148.1 0.335504 1170.3 0.335506 1169.85 1.21719C1169.39 2.13788 1154.53 2.66846 1131.76 2.63725C1076.65 2.55142 1021.25 2.34077 966.426 2.50462C886.209 2.7387 806.124 2.61387 726 2.66068C654.045 2.69969 582.067 2.65288 510.12 2.70749C442.535 2.75431 374.973 2.95717 307.411 2.94937C249.103 2.94157 190.811 2.71527 132.487 2.62944C118.755 2.61384 102.229 2.76992 87.17 2.76212C74.725 2.74651 53.9625 2.74647 41.6268 2.66844C36.3055 2.63723 30.7735 2.59043 25.5614 2.62944C1.60771 2.77769 -4.72793 2.45778 3.29305 1.45125C5.05642 1.23278 3.01995 0.936308 8.81721 0.788061C9.05909 0.780258 9.53505 0.77248 9.75352 0.764678C27.317 0.156083 45.3329 0.436971 63.4816 0.421366C152.563 0.351143 241.667 0.343329 330.764 0.312119C385.429 0.296514 440.163 0.335523 494.726 0.210683C509.668 0.179473 524.61 0.0468417 539.778 0.124867H539.52C555.344 0.0936567 571.167 0.0312005 586.991 0.039003C646.852 0.0468055 709.365 -0.0312119 766.799 0.0468131C769.062 0.0390106 772.113 0 775.445 0Z"
              fill="var(--highlight-color)"
            />
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
