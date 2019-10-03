import React from 'react';
import { Link } from 'react-router-dom';
// import the json file to read the data from.

class ProjectItem extends React.Component {
  render () {
    const id = this.props.project_id;
    const p = this.props.json;

    return (
        <div className="project-item">
          <Link to={ "/project/" + id }>


          <img src={ p.feature_image } className="feature" />

          <span className="title">
            { p.name }
          </span>
          <p>{ p.blurb }</p>

        </Link>
      </div>
    );
  }
}

export default ProjectItem;
