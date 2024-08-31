import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">Dashboard</h1>
      <div className="search-container">
        <input type="text" placeholder="Company name :" className="search-input" />
        <input type="text" placeholder="E-mail :" className="search-input" />
      </div>
      <div className="card-grid">
        <div className="card">
          <h2>Money Saved</h2>
          <p>Your monthly carbon emission is</p>
          <button className="card-button">xyz</button>
          <span className="card-symbol">$</span>
          <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor</p>
        </div>
        <div className="card">
          <h2>Carbon Footprint</h2>
          <div className="card-image bar-chart"></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor</p>
        </div>
        <div className="card">
          <h2>Monthly Carbon Emission</h2>
          <p>Your monthly carbon emission is</p>
          <button className="card-button">XYZ tons</button>
          <span className="card-symbol">CO₂</span>
          <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor</p>
        </div>
        <div className="card">
          <h2>How to Reduce Carbon Footprint</h2>
          <p>Detailed Strategies for Cutting Your Carbon Emissions and Enhancing Eco-Friendly Practices</p>
          <button className="card-button">Click Here</button>
          <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor</p>
        </div>
        <div className="card">
          <h2>Carbon Footprint</h2>
          <p>Guidance and Support from Leading Mentors</p>
          <button className="card-button">CONNECT</button>
          <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor</p>
        </div>
        <div className="card">
          <h2>Carbon Credits</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor</p>
          <button className="card-button">Click Here</button>
          <p className="card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
