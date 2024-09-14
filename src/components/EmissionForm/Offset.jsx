import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import './Offset.css';
import Input from './Input';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS
import {totalCarbonEmission} from "../../CarbonCalculator";

const Excavation = () => {
  const navigate = useNavigate();

  // Initialize state with values from localStorage, if they exist
  const [inputValues, setInputValues] = useState({
    afforestation: localStorage.getItem('afforestation') || '',
    methaneCapture: localStorage.getItem('methaneCapture') || '',
    renewableEnergy: localStorage.getItem('renewableEnergy') || '',
    soilCarbon: localStorage.getItem('soilCarbon') || '',
    ccs: localStorage.getItem('ccs') || '',
    beccs: localStorage.getItem('beccs') || '',
    carbonCredits: localStorage.getItem('carbonCredits') || '',
    enhancedWeathering: localStorage.getItem('enhancedWeathering') || '',
    biochar: localStorage.getItem('biochar') || '',
    renewableDiesel: localStorage.getItem('renewableDiesel') || '',
    avoidedDeforestation: localStorage.getItem('avoidedDeforestation') || '',
    oceanAlkalinity: localStorage.getItem('oceanAlkalinity') || '',
    wetlandsPeatlands: localStorage.getItem('wetlandsPeatlands') || '',
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
 

  // Handler to show toast and navigate
  const handleClick = () => {
    const finalResult = totalCarbonEmission();
    localStorage.clear()
    toast.success('Loading results...', {
      position: "bottom-center",
      autoClose: 1995,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Bounce,
      });
    setTimeout(() => {
      navigate('/result', { state: { result: finalResult } });
    }, 2000);
  };

  return (
    <>
      <Nav />
      <div className="box">
        <div className="containerr">
          <div className="electri">
            <div className="headingE">
              {/* Add heading if needed */}
            </div>
            <div className="inputE">
              <Input
                title="Afforestation/Reforestation"
                value={inputValues.afforestation}
                onChange={handleInputChange('afforestation')}
                units="hectare"
              />
            
              <Input
                title="Methane Capture"
                value={inputValues.methaneCapture}
                onChange={handleInputChange('methaneCapture')}
                units="cc"
              />
              <Input
                title="Renewable Energy"
                value={inputValues.renewableEnergy}
                onChange={handleInputChange('renewableEnergy')}
                units="MWh"
              />
            </div>
          </div>
          <div className="electri">
            <div className="headingE">
              {/* Add heading if needed */}
            </div>
            <div className="inputE">
              <Input
                title="Soil Carbon Sequestration"
                value={inputValues.soilCarbon}
                onChange={handleInputChange('soilCarbon')}
                units="hectare"
              />
              <Input
                title="CCS"
                value={inputValues.ccs}
                onChange={handleInputChange('ccs')}
                units="metric tons"
              />
              <Input
                title="BECCS"
                value={inputValues.beccs}
                onChange={handleInputChange('beccs')}
                units="MWh"
              />
            </div>
          </div>
          <div className="electri">
            <div className="headingE">
              {/* Add heading if needed */}
            </div>
            <div className="inputE">
              <Input
                title="Carbon Credits"
                value={inputValues.carbonCredits}
                onChange={handleInputChange('carbonCredits')}
                units="metric tons"
              />
              <Input
                title="Enhanced Weathering"
                value={inputValues.enhancedWeathering}
                onChange={handleInputChange('enhancedWeathering')}
                units="metric tons"
              />
              <Input
                title="Biochar"
                value={inputValues.biochar}
                onChange={handleInputChange('biochar')}
                units="metric tons"
              />
            </div>
          </div>
          <div className="electri">
            <div className="headingE">
              {/* Add heading if needed */}
            </div>
            <div className="inputE">
              <Input
                title="Renewable Diesel"
                value={inputValues.renewableDiesel}
                onChange={handleInputChange('renewableDiesel')}
                units="metric tons"
              />
              <Input
                title="Avoided Deforestation"
                value={inputValues.avoidedDeforestation}
                onChange={handleInputChange('avoidedDeforestation')}
                units="hectare"
              />
              <Input
                title="Ocean Alkalinity"
                value={inputValues.oceanAlkalinity}
                onChange={handleInputChange('oceanAlkalinity')}
                units="hectare"
              />
            </div>
          </div>
          <div className="electri">
            <div className="headingE">
              {/* Add heading if needed */}
            </div>
            <div className="inputE">
              <Input
                title="Wetlands/Peatlands"
                value={inputValues.wetlandsPeatlands}
                onChange={handleInputChange('wetlandsPeatlands')}
                units="hectare"
              />
            </div>
          </div>
        </div>
        <div className="footer">
          
          <button onClick={handleClick} className='btn4' >RESULT</button>
          <button onClick={() => navigate(-1)} className='btn'>Prev</button>
        </div>
      </div>
      <ToastContainer
  position="bottom-center"
  autoClose={1995}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
  transition={Bounce} // Correct prop format
/>
    </>
  );
}

export default Excavation;
