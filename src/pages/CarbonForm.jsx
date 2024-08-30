import "./CarbonForm.css";
import Excavation from "../components/EmissionForm/Excavation";
import Transportation from "../components/EmissionForm/Transportation";
import { Route, Routes,Navigate } from "react-router-dom";

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
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default CarbonForm;
