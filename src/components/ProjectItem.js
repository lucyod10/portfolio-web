import React from 'react';
import { Link } from 'react-router-dom';
// import the json file to read the data from.
 const p = require("../json/projects.json");

class ProjectItem extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const id = this.props.project_id;
    return (
        <div class="project-item">
          <Link to={ "/project/" + id }>
            <span class="title">
              { p[id].name }
            </span>
          </Link>
          <p>{ p[id].blurb }</p>
          <span class="title">Technologies</span>
          <ul>
            <li>{ this.props.tech }</li>
            <li>HTML/CSS</li>
          </ul>

        </div>
    );
  }
}

export default ProjectItem;
