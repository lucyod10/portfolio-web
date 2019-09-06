import React from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import '../css/home.css';

function Home() {
  return (
    <div>
      <div class="home">
        <p class="intro">Hi, I'm Lucy. I'm a web developer.</p>
        <p class="scroll">
          <p class="arrow">&#8964;</p>
        </p>
      </div>
      <div className="container">
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default Home;
