import React, { useState } from "react";
import './Equipment.css';


const EquipmentOption = ({text="Random Equipment"}) => {
    const [powerSource, setPowerSource] = useState("electric");
  const [appliances, setAppliances] = useState(0);
  const [load, setLoad] = useState(0);
  const [usage, setUsage] = useState(0);
  const [emissions, setEmissions] = useState(0); // Assuming a default emissions value

  const handleToggleChange = (event) => {
    setPowerSource(event.target.value);
    var emissionfac = 0.25;
    if(powerSource === "electric")
        emissionfac = 0.03;
    setEmissions((load*appliances*usage*emissionfac).toFixed(2));
  };

  // Example functions for handling input changes
  const handleApplianceChange = (num) => {
    setAppliances(num);
    var emissionfac = 0.25;
    if(powerSource === "electric")
        emissionfac = 0.03;
    setEmissions((load*appliances*usage*emissionfac).toFixed(2));
  };
  const handleUsage = (num)=> {
    setUsage(num)
    var emissionfac = 0.25;
    if(powerSource === "electric")
        emissionfac = 0.03;
    setEmissions((load*appliances*usage*emissionfac).toFixed(2));
  }
  const handleloadChange = (num) => {
    setLoad(num);
   var emissionfac = 0.25;
    if(powerSource === "electric")
        emissionfac = 0.03;
    setEmissions((load*appliances*usage*emissionfac).toFixed(2));
  }

  return (
    <div className="outer-container">
      <div className="text-above">{text}</div>
      
      {/* New Section with Inputs */}
      {true ? (
      <div className="form-section">
        <div className="input-group">
          <label>Approx. Load (Watts)</label>
          <input type="number" value={load} onChange={(e) => handleloadChange(e.target.value)} />
        </div>
        {/* <div className="input-group">
          <label>No. of appliances</label>
          <div className="appliance-control">
            <button onClick={() => handleApplianceChange(-1)} disabled={appliances <= 1}>-</button>
            <span>{appliances}</span>
            <button onClick={() => handleApplianceChange(1)}>+</button>
          </div>
        </div> */}
        <div className="input-group">
          <label>No. of appliances</label>
          <input type="number" value={appliances} onChange={(e) => handleApplianceChange(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Avg. usage (hrs/day)</label>
          <input type="number" value={usage} onChange={(e) => handleUsage(e.target.value

          ) } />
        </div>
        <div className="input-group">
          <label>Emissions (Kg CO2)</label>
          <input type="text" value={emissions} readOnly />
        </div>
      </div>
      ):(
        <div>
        {/* Empty else block - Add content here later if needed */}
      </div>
      )
    }
      {/* Existing Power Source Toggle Section */}
      <div className="power-source-toggle">
        <label className="toggle-label">Power Source:</label>
        <div className="toggle-options">
          <label className="option-label">
            <input
              type="radio"
              value="electric"
              checked={powerSource === 'electric'}
              onChange={handleToggleChange}
            />
            <p className="option-text">Electric</p>
          </label>
          <label className="option-label">
            <input
              type="radio"
              value="diesel"
              checked={powerSource === 'diesel'}
              onChange={handleToggleChange}
            />
            <p className="option-text">Diesel</p>
          </label>
        </div>
      </div>
    </div>
  );
};
export default EquipmentOption;