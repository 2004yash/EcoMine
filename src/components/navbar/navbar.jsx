import React from 'react';
import './navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
     
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="Logo" className="logo-img" />
        </div>

      
        <div className="menu-right">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
