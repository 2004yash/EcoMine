import React from 'react';
import './menu.css';

const Menu = () => {
  return (
    <div className="menu-container">
      <h1>SIT CONSECTETUR ADIPISCING ELIT.</h1>
      <div className="img-row">
        {/* Image and text containers */}
        <div className="img-container">
          <div className="actual-img"></div>
          <div className="text-container">
            <p className="p1">Lorom ipsum dolor</p>
            <p className="p2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="img-container central">
          <div className="actual-img"></div>
          <div className="text-container">
            <p className="p1">Lorom ipsum dolor</p>
            <p className="p2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="img-container">
          <div className="actual-img"></div>
          <div className="text-container">
            <p className="p1">Lorom ipsum dolor</p>
            <p className="p2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>

      {/* Hero section */}
      <div className="hero2">
        <h2 className="h1">What's Your Carbon Footprint?</h2>
        <p className="p3">Lorem ipsum dolor ipsum dolor sit amet,consectetur adipiscing elit </p>
      </div>
    </div>
  );
};

export default Menu;
