import React from "react";


export default function SkillsItem(props) {
  let { category, percentage, skills} = props;


  return (
    <div>
      <div className={`card bg-transparent border-0`}>
        <div className="card-body ">
          <p
            className={`card-subtitle mb-2`}
            style={{
              fontFamily: "var(--general-font)",
              fontSize: "clamp(11px, 1vw, 16px)",
              color: "var(--content-color)",
              fontWeight: "200",
            }}
          >
            <span
              style={{ fontWeight: "400", fontSize: "clamp(14px, 1vw, 18px)", color:"var(--text-color)" }}
            >
              {category}
            </span>{" "}
            {skills}
          </p>
          <div className="skills-container">
            <div
              className="skills"
              style={{
                width: `${percentage}%`,
                backgroundColor: "var(--highlight-color)",
                borderRadius: "10px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
