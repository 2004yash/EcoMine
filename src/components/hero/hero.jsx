import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './hero.css'; // Import the updated CSS

function Hero3() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Large text (p1) split into two lines */}
        <p className="p5">
          Empowering Mines to <br />Achieve Carbon Neutrality.
        </p>
        {/* Smaller text (p2) */}
        <p className="p6">
          EcoMines helps coal mines track and reduce their carbon <br />
          emissions, guiding them toward carbon neutrality through <br /> 
          emission estimation and sustainable strategies.
        </p>
      </div>

      {/* Sign Up button using Link to route to /signup */}
      <Link to="/signup">
        <button className="signup-button">Sign Up</button>
      </Link>
    </section>
  );
}

export default Hero3;
