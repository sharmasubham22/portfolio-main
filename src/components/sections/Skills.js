import React from 'react'
import SkillsItem from '../SkillsItem'
import skillData from '../../data/Skills.json'
import Reveal from '../Motion';
import { bullet4 } from '../../images/bullets';

export default function Skills() {
  return (
    <div className="container" style={{ marginTop: "5%", marginBottom: "5%" }}>
      <Reveal>
        <h1 className="my-5 section-head d-flex">
          <div className="bullet-hashtag">{bullet4}</div> Things I Know
        </h1>
      </Reveal>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {skillData.map((element, index) => (
          <Reveal key={index}>
            <div className="col" key={index}>
              <SkillsItem
                category={element.category}
                skills={element.skillItems}
              />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
