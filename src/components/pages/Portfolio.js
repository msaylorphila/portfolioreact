import React from "react";
import Card from "../Card";
import { projectsData } from "../../utils/projectsData";

function Portfolio() {
  return (
    <div className="card-container">
      <div className="row mx-auto w-75">
        {projectsData.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;