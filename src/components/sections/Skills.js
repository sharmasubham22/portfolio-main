import React from 'react'
import SkillsItem from '../SkillsItem'
import skillData from '../../data/Skills.json'

export default function Skills() {
  return (
    <div
      className="container"
      style={{ marginTop: "5%", marginBottom: "5%" }}
    >
      <h1 className="my-5 section-head">
        <span style={{ color: "var(--highlight-color)" }}>03. </span>My
        Skillsets
      </h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {skillData.map((element, index) => (
          <div className="col" key={index}>
            <SkillsItem
              category={element.category}
              skills={element.skillItems}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
