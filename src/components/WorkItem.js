import React from "react";

export default function WorkItem(props) {
  let { name, position, duration, keys } = props;

const keysItem = keys.join(" • ");

  return (
    <div>
      <div className="d-flex">
        <div
          className="duration-item"
          style={{
            color: "var(--content-color)",
            fontFamily: "var(--general-font)",
            fontSize: "clamp(14px, 1vw, 16px)",
            fontWeight: "400",
          }}
        >
          {duration}
        </div>
        <div className="about-item">
          <h3
            className="card-title"
            style={{
              fontFamily: "var(--general-font)",
              fontSize: "var(--content-font)",
              fontWeight: "400",
              color: "var(--text-color)",
            }}
          >
            {position}
          </h3>
          <h6
            className="card-subtitle mb-2 "
            style={{
              fontFamily: "var(--general-font)",
              fontSize: "var(--content-font)",
              color: "var(--content-color)",
              fontWeight: "400",
            }}
          >
            {name}
          </h6>
          <p
            style={{
              color: "var(--highlight-color)",
              fontSize: "var(--content-font)",
              fontFamily: "var(--heavy-font)",
              fontWeight: "400",
              lineHeight: "1",
            }}
          >
            <i>{keysItem}</i>
          </p>
        </div>
      </div>
    </div>
  );
}
