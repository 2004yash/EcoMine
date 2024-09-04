import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Dropdown from './Dropdown';
import './Excavation.css';
import Input from './Input';
import { useNavigate } from "react-router-dom";
import { CarbonEmissionFromFuel, CarbonEmissionFromElectricity } from "../../CarbonCalculator";
const Excavation = () => {
  const navigate = useNavigate();

  // Initialize state with values from localStorage, if they exist
  const [inputValues, setInputValues] = useState({
    fuelUnits: localStorage.getItem('fuelUnits') || '',
    fuelEmission: localStorage.getItem('fuelEmission') || 0,
    electricityUnits: localStorage.getItem('electricityUnits') || '',
    electricityEmission: localStorage.getItem('electricityEmission') || 0,
  });
  const [selectedFuelInExcavation, setSelectedFuel] = useState(localStorage.getItem('selectedFuelInExcavation') || '');
  // Save input values to localStorage whenever they change
  useEffect(() => {
    Object.keys(inputValues).forEach(key => {
      localStorage.setItem(key, inputValues[key]);
    });
    localStorage.setItem('selectedFuelInExcavation', selectedFuelInExcavation);
    var newElectricEmission  = CarbonEmissionFromElectricity(inputValues.electricityUnits);
    var newFuelEmission = CarbonEmissionFromFuel(selectedFuelInExcavation , inputValues.fuelUnits);
    console.log(selectedFuelInExcavation);
    localStorage.setItem('fuelEmission',newFuelEmission);
    localStorage.setItem('electricityEmission',newElectricEmission);
    setInputValues((prevValues) => ({
      ...prevValues,
      fuelEmission: newFuelEmission,
      electricityEmission: newElectricEmission,
    }));
  }, [inputValues,selectedFuelInExcavation]);

  // Handler to update state
  const handleInputChange = (field) => (e) => {
    setInputValues({ ...inputValues, [field]: e.target.value });
  };
  const handleDropdownChange = (e) => {
    setSelectedFuel(e.target.value);
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
          <Dropdown value={selectedFuelInExcavation} onChange={handleDropdownChange} />
            <Input
              placeholder="Units[kg]"
              value={inputValues.fuelUnits}
              onChange={handleInputChange('fuelUnits')}
            />
            <Input
              placeholder="Emission[kgCO2]"
              value={inputValues.fuelEmission} readonly
              // onChange={handleInputChange('fuelEmission')}
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
              value={inputValues.electricityEmission} readonly
              // onChange={handleInputChange('electricityEmission')}
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