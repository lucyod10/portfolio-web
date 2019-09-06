import React from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';

function Header() {
  return (
    <div class="header">
      <div class="logo">
        <h1>Lucy</h1>
        <h2>Ogden-Doyle</h2>
      </div>
      <nav class="menu">
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export default Header;
