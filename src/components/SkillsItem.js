import React from "react";


export default function SkillsItem(props) {
  let { category, percentage} = props;

  return (
    <div style={{ padding: "10px 0" }}>
      <p
        style={{
          fontWeight: "400",
          fontSize: "var(--content-font)",
          lineHeight: "1",
          color: "var(--text-color)",
        }}
      >
        {category} - {percentage}%
      </p>

      <div className="skills-container">
        <div
          className="skills"
          style={{
            width: `${percentage}%`,
            backgroundImage:
              "linear-gradient(to right,var(--card-color), var(--highlight-color))",
            borderRadius: "10px",
          }}
        ></div>
      </div>
    </div>
  );
}
