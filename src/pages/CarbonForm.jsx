import { useState } from "react";
import Subheading from "../components/Subheading";
import Input from "../components/Input";
import "./CarbonForm.css";

function App() {
  const [count, setCount] = useState(0);
  const [CoalVolume, setCoalVolume] = useState("")
  // const [coalVolume, setCoalVolume] = useState("");
  const [energyConsumption1, setEnergyConsumption1] = useState("");
  const [energyConsumption2, setEnergyConsumption2] = useState("");
  const [energyConsumption3, setEnergyConsumption3] = useState("");
  const [energyConsumption4, setEnergyConsumption4] = useState("");
  const [energyConsumption5, setEnergyConsumption5] = useState("");
  const [emissionFactor1, setEmissionFactor1] = useState("");
  const [emissionFactor2, setEmissionFactor2] = useState("");
  const [distance, setDistance] = useState("");
  const [fuel, setFuel] = useState("");

  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };
 
  

  return (
    <>
      <div className="hero">
        <div className="hero2">
          <div className="main">
            <div className="heading">
              <h1>Calculate Your Carbon Footprint</h1>
              <p>Discover How Your Lifestyle Affects the Planet</p>
            </div>
            <div className="Excavation ">
              <div className="titlemain">
                <Subheading Title="Excavation " />
              </div>
              <div className="inputmain">
                <Input
                   placeholder="Volume of coal" 
                 
                value={CoalVolume} 
                onChange={handleChange(setCoalVolume)}
                />

                <Input  placeholder="Energy Consumption" 
                 value={energyConsumption1} 
                 onChange={handleChange(setEnergyConsumption1)}/>

                <Input  placeholder="Emission Factor"
                 value={emissionFactor1} 
                 onChange={handleChange(setEmissionFactor1)} />
              </div>
            </div>

            <div className="Excavation ">
              <div className="titlemain">
                <Subheading Title="Transportation " />
              </div>
              <div className="inputmain">
              <Input 
                  placeholder="Distance" 
                  value={distance} 
                  onChange={handleChange(setDistance)}
                />
                <Input 
                  placeholder="Fuel" 
                  value={fuel} 
                  onChange={handleChange(setFuel)}
                />
                <Input 
                  placeholder="Emission Factor" 
                  value={emissionFactor2} 
                  onChange={handleChange(setEmissionFactor2)}
                />
              </div>
            </div>

            <div className="Excavation">
              <div className="titlemain">
                <Subheading Title="Energy Consumption " />
              </div>
              <div className="inputmain2">
                <Input 
                  placeholder="Electricity Usage" 
                  value={energyConsumption2} 
                  onChange={handleChange(setEnergyConsumption2)}
                />
                <Input 
                  placeholder="Energy Consumption" 
                  value={energyConsumption3} 
                  onChange={handleChange(setEnergyConsumption3)}
                />
              </div>
            </div>

            <div className="Excavation">
              <div className="titlemain">
                <Subheading Title="Methane Emission " />
              </div>
              <div className="inputmain2">
              <Input 
                  placeholder="Electricity Usage" 
                  value={energyConsumption4} 
                  onChange={handleChange(setEnergyConsumption4)}
                />
                <Input 
                  placeholder="Energy Consumption" 
                  value={energyConsumption5} 
                  onChange={handleChange(setEnergyConsumption5)}
                />
              </div>
            </div>

            <div className="btn">
              <button >View Report</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
