import React from 'react';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="home">Home</a></li>
        <li><a href="dashboard">Dashboard</a></li>
        <li><a href="login">Login</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;