import React from "react";
import SkillsItem from "../SkillsItem";
import skillData from "../../data/Skills.json";

export default function Skills() {
  return (
    <div >

        {skillData.map((element, index) => (
          <div key={index}>
            <SkillsItem
              category={element.category}
              percentage={element.percentage}
              skills={element.skills}
            />
          </div>
        ))}
      </div>

  );
}
