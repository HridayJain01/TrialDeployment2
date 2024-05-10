import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Hriday Jain</h1>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="footer">Projects</a></li>
          <li><a href="contacts">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
