import React from 'react'
import Nav from './Nav'
import Dropdown from './Dropdown'
import './Excavation.css';
import Input from './Input';
import { useNavigate, useNavigation } from "react-router-dom";
const Excavation = () => {
    const navigate=useNavigate();
  return (
    <>
    <Nav/>
    <div className="box">
        <div className="fueli">
            <div className="headingF">
                <h3>1.  Fuel consumption per month</h3>
            </div>
            <div className="inputF">
                <Dropdown/>
                <Input placeholder="Units[kg]"/>
                <Input placeholder="Emission[kgCO2]"/>
            </div>
        </div>
        <div className="electri">
            <div className="headingE">
                <h3>2. Electricity consumption per month</h3>
            </div>
            <div className="inputE">
                
                <Input placeholder="Total Consumption Units[kg]"/>
                <Input placeholder="Emission[kgCO2]"/>
            </div>
        </div>

        <div className="footer">
            <button onClick={() => {
                navigate("/carbonform/transportation")
            }
            } >Next</button>
           
        </div>
    </div>
    </>
  )
}

export default Excavation
