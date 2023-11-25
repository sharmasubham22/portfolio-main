import React from 'react'
import WorkItem from '../WorkItem'
import workData from '../../data/Work.json'

export default function Experience() {  
  return (
    <div
      className="container"
      style={{ marginTop: "5%", marginBottom: "5%" }}
    >
      <h1 className="my-5 section-head">
        <span style={{ color: "var(--highlight-color)" }}>02. </span>Work
      </h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {workData.map((element, index) => {
          return (
            <div className="col" key={index}>
              <WorkItem
                name={element.name}
                position={element.position}
                duration={element.duration}
                keys={element.keyPoints}
                description={element.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
