import React from 'react';
// import the json file to read the data from.
 const p = require("../json/projects.json");

class Project extends React.Component {
  render () {
    console.log(p);
    const id = this.props.match.params.id;
    const project = p[id];

    return (
        <div className="project">
          <span className="title">{ project.name }</span>
          <p>{ project.description }</p>

          <span className="title">Find me at:</span>
          <ul>
            <li><a href={ project.github } target="blank">GitHub</a></li>
            <li><a href={ project.website } target="blank">Website</a></li>
          </ul>

          <span className="title">Preview</span>
          { project.images.map((image, index) => {
            return <section key={ index }>
            <img src={ image.image } alt={ image.caption } />
            <p>{ image.caption }</p>
            </section>
          }) }

          <span className="title">Technologies</span>
          <ul>
            { project.tech.map((tech, index) => {
              return <li key={ index }>{ tech.title }</li>
            }) }
          </ul>

        </div>
    );
  }
}

export default Project;
