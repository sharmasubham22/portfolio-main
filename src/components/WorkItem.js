import React from "react";

export default function WorkItem(props) {
  let { name, position, duration, keys, description } = props;
 
  return (
    <div>
      <div
        className="card h-100 p-4"
        style={{
          backgroundColor: "var(--card-color)",
          borderRadius: "20px",
        }}
      >
        <div className="card-body">
          <h6
            className="card-subtitle mb-2 text-muted"
            style={{ fontFamily: "var(--general-font)" }}
          >
            {duration}
          </h6>
          <h3
            className="card-title"
            style={{
              fontFamily: "var(--general-font)",
              fontSize: 'clamp(24px, 2vw, 30px)',
              fontWeight:"700",
              textTransform: "uppercase",
              color: "var(--text-color)",
            }}
          >
            {position}
          </h3>
          <h6
            className="card-subtitle mb-4 text-muted"
            style={{ fontFamily: "var(--general-font)" }}
          >
            {name}
          </h6>
          {keys.map((keyValue, keyIndex) => (
            <h4
              key={keyIndex}
              style={{
                marginRight: "10px",
                display: "inline-block",
                color: "var(--highlight-color)",
                border: "1px solid",
                borderColor: "var(--highlight-color)",
                width: "fit-content",
                padding: "5px 15px",
                borderRadius: "20px",
                fontFamily: "var(--general-font)",
                textTransform: "uppercase",
                fontSize: "clamp(12px, 1.3vw, 14px)",
              }}
            >
              {keyValue}
            </h4>
          ))}

          <h4
            className="card-text mt-3"
            style={{
              color: "var(--content-color)",
              fontSize: "clamp(15px, 2vw, 20px)",
              fontFamily: "var(--general-font)",
            }}
          >
            {description}
          </h4>
        </div>
      </div>
    </div>
  );
}
