
import './Equipment.css';
import React, { useState, useEffect } from 'react';
import Nav from './Nav';

import { useNavigate } from "react-router-dom";

const EquipmentOption = ({ text = "Random Equipment" }) => {
  const [powerSource, setPowerSource] = useState(
    () => localStorage.getItem("powerSource") || "electric"
  );
  const [appliances, setAppliances] = useState(
    () => parseFloat(localStorage.getItem("appliances")) || 0
  );
  const [load, setLoad] = useState(
    () => parseFloat(localStorage.getItem("load")) || 0
  );
  const [usage, setUsage] = useState(
    () => parseFloat(localStorage.getItem("usage")) || 0
  );
  const [emissions, setEmissions] = useState(0);

  // Function to calculate emissions based on current state
  const calculateEmissions = (currentLoad, currentAppliances, currentUsage, currentPowerSource) => {
    const emissionFactor = currentPowerSource === "electric" ? 0.03 : 0.25;
    const calculatedEmissions = currentLoad * currentAppliances * currentUsage * emissionFactor;
    return calculatedEmissions.toFixed(2);
  };

  // Effect to recalculate emissions when any input state changes
  useEffect(() => {
    setEmissions(calculateEmissions(load, appliances, usage, powerSource));
    // Save data to localStorage whenever state changes
    localStorage.setItem("powerSource", powerSource);
    localStorage.setItem("appliances", appliances);
    localStorage.setItem("load", load);
    localStorage.setItem("usage", usage);
  }, [load, appliances, usage, powerSource]);

  // Handlers to update state
  const handleToggleChange = (event) => {
    setPowerSource(event.target.value);
  };

  const handleApplianceChange = (num) => {
    setAppliances(num);
  };

  const handleUsage = (num) => {
    setUsage(num);
  };

  const handleLoadChange = (num) => {
    setLoad(num);
  };
  const navigate = useNavigate();
  return (
    <>
    
    <Nav/>
    <div className="outer-container">
      <div className="text-above">{text}</div>

      {/* New Section with Inputs */}
      <div className="form-section">
        <div className="input-group">
          <label>Approx. Load (Watts)</label>
          <input
          // className="equipment-input"
            type="number"
            value={load}
            onChange={(e) => handleLoadChange(parseFloat(e.target.value) || 0)}
          />
        </div>
        <div className="equipment-input-group">
          <label>No. of appliances</label>
          <input
          //  className="equipment-input"
            type="number"
            value={appliances}
            onChange={(e) => handleApplianceChange(parseFloat(e.target.value) || 0)}
          />
        </div>
        <div className="equipment-input-group">
          <label>Avg. usage (hrs/day)</label>
          <input
          // className="equipment-input"
            type="number"
            value={usage}
            onChange={(e) => handleUsage(parseFloat(e.target.value) || 0)}
          />
        </div>
        <div className="input-group">
       
          <label>Emissions (Kg CO2)</label>
          <input
            // className="equipment-input"
             type="text"
              value={emissions} readOnly
               />
        </div>
      </div>

      {/* Power Source Toggle Section */}
      <div className="power-source-toggle">
        <label className="toggle-label">Power Source:</label>
        <div className="toggle-options">
          <label className="option-label">
            <input
              type="radio"
              value="electric"
              checked={powerSource === "electric"}
              onChange={handleToggleChange}
            />
            <p className="option-text">Electric</p>
          </label>
          <label className="option-label">
            <input
              type="radio"
              value="diesel"
              checked={powerSource === "diesel"}
              onChange={handleToggleChange}
            />
            <p className="option-text">Diesel</p>
          </label>
        </div>
      </div>
      <div className="footer">
          <button onClick={() => navigate("/carbonform/offset")} className='btn3'>Next</button>
          <button onClick={() => navigate(-1)} className='btn2'>Prev</button>
        </div>
    </div>
    </>
  );
};

export default EquipmentOption;
