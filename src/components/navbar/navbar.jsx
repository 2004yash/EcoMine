import React from 'react';
import './navbar.css'; // Import the CSS for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left-side menu items */}
        <div className="menu-left">
          <a href="#home" className="nav-link">menu</a>
          <a href="#about" className="nav-link">menu</a>
        </div>

        {/* Centered logo */}
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/your-logo.png`} alt="Logo" className="logo-img" />
        </div>

        {/* Right-side menu items */}
        <div className="menu-right">
          <a href="#services" className="nav-link">menu</a>
          <a href="#contact" className="nav-link">menu</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


