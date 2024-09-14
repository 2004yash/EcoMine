import "./Explosive.css";
import React, { useState, useEffect } from "react";
import ExplosiveDropdown from "./ExplosiveDropdown ";

const Explosive = ({ text = "" }) => {
  const defaultExplosive = {
    explosiveType: "",
    numberOfExplosives: 0,
    emissions: 0,
  };

  const [explosiveList, setExplosiveList] = useState(
    () =>
      JSON.parse(localStorage.getItem("explosiveList")) || [defaultExplosive]
  );

  // Function to calculate emissions for a single explosive object
  const calculateEmissions = (explosive) => {
    const emissionFactor = explosive.explosiveType === "ANFO" ? 0.25 : 0.50; // Example emission factors
    const calculatedEmissions =
      explosive.numberOfExplosives * emissionFactor;
    return calculatedEmissions.toFixed(2);
  };

  // Effect to update localStorage whenever the explosive list changes
  useEffect(() => {
    localStorage.setItem("explosiveList", JSON.stringify(explosiveList));
  }, [explosiveList]);

  // Handler to add new explosive
  const handleAddExplosive = () => {
    setExplosiveList([...explosiveList, defaultExplosive]);
  };

  // Handler to delete explosive
  const handleDeleteExplosive = (index) => {
    const updatedList = explosiveList.filter((_, i) => i !== index);
    setExplosiveList(updatedList);
  };

  // Handlers to update individual explosives
  const handleUpdateExplosive = (index, field, value) => {
    const updatedList = [...explosiveList];
    updatedList[index] = {
      ...updatedList[index],
      [field]: value,
    };
    updatedList[index].emissions = calculateEmissions(updatedList[index]);
    setExplosiveList(updatedList);
  };

  return (
    <>
      <div className="headExpo">
        <h3>3. Explosive Details</h3>
      </div>
      <div>
        {/* Loop to render each explosive */}
        {explosiveList.map((explosive, index) => (
          <div key={index} className="outer-container">
            <div className="text-above">{text}</div>

            <div className="form-section">
              {/* Dropdown for Explosive Type */}
              <ExplosiveDropdown
                value={explosive.explosiveType}
                onChange={(e) =>
                  handleUpdateExplosive(index, "explosiveType", e.target.value)
                }
              />

              <div className="input-group">
                <label>No.of Explosives used      </label>
                <input
                  type="number"
                  value={explosive.numberOfExplosives}
                  onChange={(e) =>
                    handleUpdateExplosive(
                      index,
                      "numberOfExplosives",
                      parseFloat(e.target.value) || 0
                    )
                  }
                />
              </div>

              <div className="input-group">
                <label>Emissions (Kg CO2)</label>
                <input type="text" value={explosive.emissions} readOnly />
              </div>

              {/* Delete Explosive Button */}
              <button
                onClick={() => handleDeleteExplosive(index)}
                className="btn-delete-explosive"
              >
                Delete Explosive
              </button>
            </div>
          </div>
        ))}

        {/* Add Explosive Button */}
        <button onClick={handleAddExplosive} className="btn-add-explosive">
          Add Explosive +
        </button>
      </div>
    </>
  );
};

export default Explosive;
