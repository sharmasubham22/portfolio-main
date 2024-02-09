import React from "react";


export default function SkillsItem(props) {
  let { category, percentage} = props;

  return (
    <div style={{padding: '10px 0'}}>
          <p
            style={{
              fontWeight: "500",
              fontSize: "clamp(15px, 2vw, 20px)",
              lineHeight: "1",
              color: "var(--text-color)",
            }}
          >
            {category}
          </p>
      
          <div className="skills-container">
            <div
              className="skills"
              style={{
                width: `${percentage}%`,
                backgroundColor: "var(--content-color)",
                borderRadius: "10px",
              }}
            ></div>
          </div>
         
    </div>
  );
}
