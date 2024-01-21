import React from "react";

export default function EducationItem(props) {
  let { duration, name, course } = props;
  return (
    <div>
      <div className="d-flex">
        <div
          className="duration-item"
          style={{
            color: "var(--content-color)",
            fontFamily: "var(--general-font)",
            fontSize: "clamp(15px, 1vw, 16px)",
            fontWeight:"500"
          }}
        >
          {duration}
        </div>
        <div className="about-item">
          <h3
            className="card-title"
            style={{
              fontFamily: "var(--general-font)",
              fontSize: "clamp(15px, 2vw, 20px)",
              fontWeight: "400",
              color: "var(--text-color)",
            }}
          >
            {course}
          </h3>
          <h6
            className="card-subtitle mb-3"
            style={{
              fontFamily: "var(--general-font)",
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "var(--content-color)",
              fontWeight: "500",
            }}
          >
            {name} 
          </h6>
        </div>
      </div>
    </div>
  );
}
