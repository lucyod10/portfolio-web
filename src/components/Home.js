import React from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Maze from './Maze';
import '../css/home.css';

function Home() {
  return (
    <div>
      <div className="home">
        <p className="intro">Hi, I'm Lucy. I'm a web developer.</p>
        <div className="scroll">
          <p className="arrow">&#8964;</p>
        </div>

      </div>
      <div className="container">
        <About />
        <Projects />
        <Contact />
      </div>

      <Maze />
    </div>
  );
}

export default Home;
