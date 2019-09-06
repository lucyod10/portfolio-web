import React from 'react';
// import the json file to read the data from.
 const p = require("../json/projects.json");

class Project extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    console.log(p);
    const id = this.props.match.params.id;

    return (
        <div class="project">
          <span class="title">{ p[id].name }</span>
          <p>{ p[id].description }</p>
          <span class="title">Technologies</span>
          <ul>
            <li>{ this.props.tech }</li>
            <li>HTML/CSS</li>
          </ul>

        </div>
    );
  }
}

export default Project;
