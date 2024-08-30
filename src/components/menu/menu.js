import React from 'react';
import './menu.css';

const Menu = () => {
  return (
    <div className="menu-container">
      <h1>Transforming Coal Mines for a Sustainable Future</h1>
      <div className="img-row">
        {/* Image and text containers */}
        <div className="img-container">
          <div className="actual-img"></div>
          <div className="text-container">
            <p className="p1">Track & Measure Emissions</p>
            <p className="p2">
            Gain real-time insights into your mine's carbon emissions, helping you make data-driven decisions to reduce your environmental impact.
            </p>
          </div>
        </div>
        <div className="img-container central">
          <div className="actual-img"></div>
          <div className="text-container">
            <p className="p1">Plan for Carbon Neutrality</p>
            <p className="p2">
            Access tailored strategies for reducing emissions, optimizing energy use, and offsetting your carbon footprint with afforestation.
            </p>
          </div>
        </div>
        <div className="img-container">
          <div className="actual-img"></div>
          <div className="text-container">
            <p className="p1">Monitor & Improve</p>
            <p className="p2">
            Continuously monitor your progress toward carbon neutrality with intuitive dashboards and analytics designed for long-term sustainability.
            </p>
          </div>
        </div>
      </div>

      {/* Hero section */}
      <div className="hero2">
        <h2 className="h1">What's Your Carbon Footprint?</h2>
        <p className="p3">Uncover the environmental impact of your operations and take actionable steps towards a greener future. </p>
      </div>
    </div>
  );
};

export default Menu;
