import React from 'react';
import { Link } from 'react-router-dom';
// import the json file to read the data from.
const p = require("../json/projects.json");



class ProjectItem extends React.Component {
  render () {
    const id = this.props.project_id;
    return (
        <div className="project-item">
          <Link to={ "/project/" + id }>
            <span className="title">
              { p[id].name }
            </span>



          <p>{ p[id].blurb }</p>
          <span className="title">Technologies</span>
          <ul>
            { p[id].tech.map((tech, index) => {
              return <li key={ index }>{ tech }</li>
            }) }
          </ul>
        </Link>
      </div>
    );
  }
}

export default ProjectItem;
