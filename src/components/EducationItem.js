import React from "react";

export default function EducationItem(props) {
  let { duration, name, course } = props;
  return (
    <div>
      <ul className="section-list2">
        <li className="list-item2">
          <div>
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
                fontSize: "clamp(15px, 1vw, 16px)",
                color: "var(--content-color)",
                fontWeight: "200",
              }}
            >
              {name} ({duration})
            </h6>
          </div>
        </li>
      </ul>
    </div>
  );
}
