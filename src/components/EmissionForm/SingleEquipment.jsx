import './SingleEquipment.css';
import React, { useState, useEffect } from 'react';

const SingleEquipment = ({ text = "Equipment Details" }) => {
  const defaultEquipment = {
    powerSource: "electric",
    appliances: 0,
    load: 0,
    usage: 0,
    emissions: 0,
  };

  const [equipmentList, setEquipmentList] = useState(
    () => JSON.parse(localStorage.getItem("equipmentList")) || [defaultEquipment]
  );

  // Function to calculate emissions for a single equipment object
  const calculateEmissions = (equipment) => {
    const emissionFactor = equipment.powerSource === "electric" ? 0.03 : 0.25;
    const calculatedEmissions =
      equipment.load * equipment.appliances * equipment.usage * emissionFactor;
    return calculatedEmissions.toFixed(2);
  };

  // Effect to update localStorage whenever the equipment list changes
  useEffect(() => {
    localStorage.setItem("equipmentList", JSON.stringify(equipmentList));
  }, [equipmentList]);

  // Handler to add new equipment
  const handleAddEquipment = () => {
    setEquipmentList([...equipmentList, defaultEquipment]);
  };

  // Handler to delete equipment
  const handleDeleteEquipment = (index) => {
    const updatedList = equipmentList.filter((_, i) => i !== index);
    setEquipmentList(updatedList);
  };

  // Handlers to update individual equipment
  const handleUpdateEquipment = (index, field, value) => {
    const updatedList = [...equipmentList];
    updatedList[index] = {
      ...updatedList[index],
      [field]: value,
    };
    updatedList[index].emissions = calculateEmissions(updatedList[index]);
    setEquipmentList(updatedList);
  };

  return (
    <div>
      {/* Loop to render each equipment */}
      {equipmentList.map((equipment, index) => (
        <div key={index} className="outer-container">
          <div className="text-above">{text}</div>

          <div className="form-section">
            <div className="input-group">
              <label>Approx. Load (Watts)</label>
              <input
                type="number"
                value={equipment.load}
                onChange={(e) =>
                  handleUpdateEquipment(index, "load", parseFloat(e.target.value) || 0)
                }
              />
            </div>
            <div className="equipment-input-group">
              <label>No. of Appliances</label>
              <input
                type="number"
                value={equipment.appliances}
                onChange={(e) =>
                  handleUpdateEquipment(index, "appliances", parseFloat(e.target.value) || 0)
                }
              />
            </div>
            <div className="equipment-input-group">
              <label>Avg. Usage (hrs/day)</label>
              <input
                type="number"
                value={equipment.usage}
                onChange={(e) =>
                  handleUpdateEquipment(index, "usage", parseFloat(e.target.value) || 0)
                }
              />
            </div>
            <div className="input-group">
              <label>Emissions (Kg CO2)</label>
              <input type="text" value={equipment.emissions} readOnly />
            </div>

            {/* Power Source Toggle Section */}
            <div className="power-source-toggle">
              <label className="toggle-label">Power Source:</label>
              <div className="toggle-options">
                <label className="option-label">
                  <input
                    type="radio"
                    value="electric"
                    checked={equipment.powerSource === "electric"}
                    onChange={(e) =>
                      handleUpdateEquipment(index, "powerSource", e.target.value)
                    }
                  />
                  <p className="option-text">Electric</p>
                </label>
                <label className="option-label">
                  <input
                    type="radio"
                    value="diesel"
                    checked={equipment.powerSource === "diesel"}
                    onChange={(e) =>
                      handleUpdateEquipment(index, "powerSource", e.target.value)
                    }
                  />
                  <p className="option-text">Diesel</p>
                </label>
              </div>
            </div>

            {/* Delete Equipment Button */}
            <button
              onClick={() => handleDeleteEquipment(index)}
              className="btn-delete-equipment"
            >
              Delete Equipment
            </button>
          </div>
        </div>
      ))}

      {/* Add Equipment Button */}
      <button onClick={handleAddEquipment} className="btn-add-equipment">
        Add Equipment
      </button>
    </div>
  );
};

export default SingleEquipment;
