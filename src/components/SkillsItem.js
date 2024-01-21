import React from "react";


export default function SkillsItem(props) {
  let { category, percentage} = props;

  // const skillItem = skills.join(" • ");

  return (
    <div>
      <div className={`card bg-transparent border-0`}>
        <div className="card-body ">
          <p
            style={{
              fontWeight: "500",
              fontSize: "clamp(15px, 2vw, 20px)",
              lineHeight: "1",
              color: "var(--content-color)",
            }}
          >
            {category}
          </p>
          {/* <p
            className={`card-subtitle mb-3`}
            style={{
              fontFamily: "var(--general-font)",
              fontSize: "clamp(12px, 2vw, 16px)",
              lineHeight: "1",
              color: "var(--content-color)",
              fontWeight: "400",
            }}
          >
            {" "}
            <i>{skillItem}</i>
          </p> */}
          <div className="skills-container">
            <div
              className="skills"
              style={{
                width: `${percentage}%`,
                backgroundColor: "var(--text-color2)",
                borderRadius: "10px",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
