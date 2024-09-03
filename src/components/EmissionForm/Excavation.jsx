import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Dropdown from './Dropdown';
import './Excavation.css';
import Input from './Input';
import { useNavigate } from "react-router-dom";

const Excavation = () => {
  const navigate = useNavigate();

  // Initialize state with values from localStorage, if they exist
  const [inputValues, setInputValues] = useState({
    fuelUnits: localStorage.getItem('fuelUnits') || '',
    fuelEmission: localStorage.getItem('fuelEmission') || '',
    electricityUnits: localStorage.getItem('electricityUnits') || '',
    electricityEmission: localStorage.getItem('electricityEmission') || '',
  });

  // Save input values to localStorage whenever they change
  useEffect(() => {
    Object.keys(inputValues).forEach(key => {
      localStorage.setItem(key, inputValues[key]);
    });
  }, [inputValues]);

  // Handler to update state
  const handleInputChange = (field) => (e) => {
    setInputValues({ ...inputValues, [field]: e.target.value });
  };

  return (
    <>
      <Nav />
      <div className="box">
        <div className="fueli">
          <div className="headingF">
            <h3>1. Fuel consumption per month</h3>
          </div>
          <div className="inputF">
            <Dropdown />
            <Input
              placeholder="Units[kg]"
              value={inputValues.fuelUnits}
              onChange={handleInputChange('fuelUnits')}
            />
            <Input
              placeholder="Emission[kgCO2]"
              value={inputValues.fuelEmission}
              onChange={handleInputChange('fuelEmission')}
            />
          </div>
        </div>
        <div className="electri">
          <div className="headingE">
            <h3>2. Electricity consumption per month</h3>
          </div>
          <div className="inputE">
            <Input
              placeholder="Total Consumption Units[kg]"
              value={inputValues.electricityUnits}
              onChange={handleInputChange('electricityUnits')}
            />
            <Input
              placeholder="Emission[kgCO2]"
              value={inputValues.electricityEmission}
              onChange={handleInputChange('electricityEmission')}
            />
          </div>
        </div>

        <div className="footer">
          <button onClick={() => navigate("/carbonform/transportation")}className='btn5'>Next</button>
        </div>
      </div>
    </>
  );
}

export default Excavation;
