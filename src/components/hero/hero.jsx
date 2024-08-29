import React from 'react';
import './hero.css'; // Import the updated CSS

function Hero3() {
  return (
    <section className="hero-section">
     

      <div className="hero-content">
        {/* Large text (p1) split into two lines */}
        <p className="p5">
          Lorem ipsum dolor sit
          <br />
          amet, consectetur
        </p>
        {/* Smaller text (p2) */}
        <p className="p6">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
        </p>
        <button className="button">News API</button>
      </div>
    </section>
  );
}

export default Hero3;
