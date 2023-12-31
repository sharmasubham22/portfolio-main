import React from "react";
import WorkItem from "../WorkItem";
import workData from "../../data/Work.json";

export default function Experience() {
  return (
    <div style={{ marginTop: "5%"}}>
    
          {workData.map((element, index) => {
            return (
                <div key={index} >
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
  );
}
