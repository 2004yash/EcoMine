import "./CarbonForm.css";
import Excavation from "../components/EmissionForm/Excavation";
import Transportation from "../components/EmissionForm/Transportation";
import EquipmentOption from "../components/EmissionForm/Equipment";
import Offset from "../components/EmissionForm//Offset";
import { Route, Routes,Navigate } from "react-router-dom";

// import EquipmentOption from "../components/EmissionForm/Equipment";

function CarbonForm() {
  return (
    <div className="frame">
      <h1>Welcome to the carbon footprint calculator</h1>
      <div className="form">
        <div className="DisplayForm">
          {/* Define nested routes here */}
          <Routes>
          <Route path="/" element={<Navigate to="excavation" />} />
            <Route path="/excavation" element={<Excavation />} />
            <Route path="transportation" element={<Transportation />} />
            <Route path="equipment" element={<EquipmentOption />} />
            <Route path="offset" element={<Offset/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default CarbonForm;
