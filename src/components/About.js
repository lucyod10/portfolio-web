import React from 'react';
import art from "../images/icon/art_blue.png";
import coding from "../images/icon/coding_01_blue.png";
import resume from "../images/icon/resume_02_blue.png";
import rocketship from "../images/icon/rocketship_blue.png";

function About() {
  return (
    <div className="thinContainer">
        <h2>About</h2>
        <img src={ art } className="icon" />
        <img src={ coding } className="icon" />
        <img src={ rocketship } className="icon" />
        <p>
          Hi! I’m Lucy Ogden-Doyle. I am a junior Web Developer who has recently made the switch from my career as an AR/VR Developer and 3D Artist. My journey took me from being a 3D artist who had an interest in all things computers, to learning C# in order to create my Virtual Reality projects. From here I began leaning into the development world by creating VR and AR experiences as well as mobile apps until I decided to make the switch into web where I am now studying to complete the transition into a full stack web dev :D. I am super excited about where my career takes me next and can’t wait to get started.
        </p>

        <p>
          <img src={ resume } className="resume" />
        </p>

    </div>
  );
}

export default About;
