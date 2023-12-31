import React from "react";

export default function WorkItem(props) {
  let { name, position, duration, keys } = props;
 
  return (
    <div>
      <ul className="section-list">
        <li className="list-item ">
          <div>
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
                fontSize: "clamp(15px, 2vw, 20px)",
               
                color: "var(--text-color)",
              }}
            >
              {position}
            </h3>
            <h6
              className="card-subtitle mb-2 text-muted"
              style={{ fontFamily: "var(--general-font)" }}
            >
              {name}
            </h6>
            {keys.map((keyValue, keyIndex) => (
              <h4
                key={keyIndex}
                className=" mb-4"
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
          </div>
        </li>
      </ul>
    </div>
  );
}
