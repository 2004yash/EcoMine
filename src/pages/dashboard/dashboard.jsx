import React from 'react';
import './dashboard.css'; // Ensure this path is correct

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">Dashboard</h1>
      
      <div className="input-row">
        <div className="input-box">
          <label htmlFor="company-name">Company Name</label>
          <input type="text" id="company-name" name="company-name" required />
        </div>
        <div className="input-box">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
      </div>
      
      <div className="grid-container">
        <div className="grid-box box1">Box 1</div>
        <div className="grid-box box2">Box 2</div>
        <div className="grid-box box3">Box 3</div>
        <div className="grid-box box4">Box 4</div>
        <div className="grid-box box5">Box 5</div>
        <div className="grid-box box6">Box 6</div>
      </div>
    </div>
  );
}

export default Dashboard;
