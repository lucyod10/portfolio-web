import React from 'react';
import ProjectItem from './ProjectItem';
import '../css/projects.css';

function Projects() {
  return (
    <div>
        <h2>Projects</h2>
        <div class="projects">
          <ProjectItem project_id="memory" title="Memory Game" tech="js" />
          <ProjectItem project_id="dinoland" title="DinoLand" tech="React" />
          <ProjectItem project_id="greenify" title="Greenify" tech="React and Rails" />
          <ProjectItem project_id="news" title="Greenify" tech="React and Rails" />
          <ProjectItem project_id="blog" title="Greenify" tech="React and Rails" />
          <ProjectItem project_id="maze" title="Greenify" tech="React and Rails" />
        </div>
    </div>
  );
}

export default Projects;
