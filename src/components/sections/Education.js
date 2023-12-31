import React from 'react'
import data from "../../data/Education.json";
import EducationItem from '../EducationItem';

export default function Education() {
  return (
    <div style={{ marginTop: "5%" }}>
      {data.map((element, index) => {
        return (
          <div key={index}>
            <EducationItem
              duration={element.duration}
              name={element.name}
              course={element.course}
            />
          </div>
        );
      })}
      </div>

  );
}
