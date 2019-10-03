import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import maze from '../js/maze.js';

function Maze() {
  return (
    <P5Wrapper sketch={ maze } />
  );
}

export default Maze;
