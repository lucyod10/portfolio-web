import React from 'react';
import ProjectItem from './ProjectItem';
import '../css/projects.css';
const p = require("../json/projects.json");

function Projects() {
  return (
    <div>
        <h2>Projects</h2>
        <div className="projects">
          { p.map((project, index) => {
            return <ProjectItem key={ index } project_id={index} title={project.title} tech="js" />
          })}

        </div>
    </div>
  );
}

export default Projects;
