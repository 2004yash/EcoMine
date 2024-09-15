import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Dropdown from './Dropdown';
import './Transportation.css';
import Input from './Input';
import { useNavigate } from "react-router-dom";
import { CarbonEmissionFromFuel, CarbonEmissionFromElectricity } from "../../CarbonCalculator";
const Excavation = () => {
  const navigate = useNavigate();

  // Initialize state with values from localStorage, if they exist
  const [inputValues, setInputValues] = useState({
    fuelUnit: localStorage.getItem('fuelUnit') || '',
    fuelEmissions: localStorage.getItem('fuelEmissions') || '',
    electricityUnit: localStorage.getItem('electricityUnit') || '',
    electricityEmissions: localStorage.getItem('electricityEmissions') || '',
  });

  const [selectedFuel, setSelectedFuel] = useState(localStorage.getItem('selectedFuel') || '');

  // Save input values and selectedFuel to localStorage whenever they change
  useEffect(() => {
    Object.keys(inputValues).forEach(key => {
      localStorage.setItem(key, inputValues[key]);
    });
   
    localStorage.setItem('selectedFuel', selectedFuel);
    var newElectricEmission  = CarbonEmissionFromElectricity(inputValues.electricityUnit);
    var newFuelEmission = CarbonEmissionFromFuel(selectedFuel, inputValues.fuelUnit);
    setInputValues((prevValues) => ({
      ...prevValues,
      fuelEmissions: newFuelEmission,
      electricityEmissions: newElectricEmission,
    }));
  }, [inputValues, selectedFuel]);

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
            <Dropdown value={selectedFuel} onChange={handleDropdownChange} />
            <Input
              title="Units[kg]"
              value={inputValues.fuelUnit}
              onChange={handleInputChange('fuelUnit')}
            />
            <Input
              title="Emission[kgCO2]"
              value={inputValues.fuelEmissions} readonly
              // onChange={handleInputChange('fuelEmissions')}
            />
          </div>
        </div>
        <div className="electri">
          <div className="headingE">
            <h3>2. Electricity consumption per month</h3>
          </div>
          <div className="inputE">
            <Input
              title="Total Consumption [KWh]"
              value={inputValues.electricityUnit}
              onChange={handleInputChange('electricityUnit')}
            />
            <Input
              title="Emission[kgCO2]"
              value={inputValues.electricityEmissions} readonly
              // onChange={handleInputChange('electricityEmissions')}
            />
          </div>
        </div>

        <div className="footerr">
          <button onClick={() => navigate("/carbonform/equipment")}className='btn4'>Next</button>
          <button onClick={() => navigate(-1)} className='btn'>Prev</button>
        </div>
      </div>
    </>
  );
}

export default Excavation;