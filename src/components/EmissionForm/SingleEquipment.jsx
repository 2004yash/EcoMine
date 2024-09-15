import React, { useState, useEffect } from "react";
import styles from "./SingleEquipment.module.css"; // Importing the CSS module
import { ImBin2 } from "react-icons/im";

const SingleEquipment = ({ text = "Equipment Details" }) => {
  const defaultEquipment = {
    powerSource: "electric",
    appliances: 0,
    load: 0,
    usage: 0,
    emissions: 0,
  };

  const [equipmentList, setEquipmentList] = useState(
    () =>
      JSON.parse(localStorage.getItem("equipmentList")) || [defaultEquipment]
  );

  const calculateEmissions = (equipment) => {
    const emissionFactor = equipment.powerSource === "electric" ? 0.03 : 0.25;
    const calculatedEmissions =
      equipment.load * equipment.appliances * equipment.usage * emissionFactor;
    return calculatedEmissions.toFixed(2);
  };

  useEffect(() => {
    localStorage.setItem("equipmentList", JSON.stringify(equipmentList));
  }, [equipmentList]);

  const handleAddEquipment = () => {
    setEquipmentList([...equipmentList, defaultEquipment]);
  };

  const handleDeleteEquipment = (index) => {
    const updatedList = equipmentList.filter((_, i) => i !== index);
    setEquipmentList(updatedList);
  };

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
      {equipmentList.map((equipment, index) => (
        <div key={index} className={styles.outerContainer}>
          <div className={styles.textAbove}>{text}</div>

          <div className={styles.formSection}>
            <div className={styles.leftyy}>
              <div className={styles.inputGroup}>
                <label>Approx. Load (Watts)</label>
                <input className={styles.ip}
                  type="number"
                  value={equipment.load}
                  onChange={(e) =>
                    handleUpdateEquipment(
                      index,
                      "load",
                      parseFloat(e.target.value) || 0
                    )
                  }
                />
              </div>
              <div className={styles.equipmentInputGroup}>
                <label>No. of Appliances</label>
                <input className={styles.ip}
                  type="number"
                  value={equipment.appliances}
                  onChange={(e) =>
                    handleUpdateEquipment(
                      index,
                      "appliances",
                      parseFloat(e.target.value) || 0
                    )
                  }
                />
              </div>
              <div className={styles.equipmentInputGroup}>
                <label>Avg. Usage (hrs/day)</label>
                <input className={styles.ip}
                  type="number"
                  value={equipment.usage}
                  onChange={(e) =>
                    handleUpdateEquipment(
                      index,
                      "usage",
                      parseFloat(e.target.value) || 0
                    )
                  }
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Emissions (Kg CO2)</label>
                <input className={styles.ip} type="text" value={equipment.emissions} readOnly />
              </div>


              <button
              onClick={() => handleDeleteEquipment(index)}
              className={styles.btnDeleteEquipment}
            >
            <ImBin2   style={{
                    color: "white",
                    alignItems: "center",
                    fontSize: "150%",
                  }}/>
            </button>


            </div>
            <div className={styles.righty}>
              <div className={styles.powerSourceToggle}>
                <label className={styles.toggleLabel}>Power Source:</label>
                <div className={styles.toggleOptions}>
                  <label className={styles.optionLabel}>
                    <input
                      type="radio"
                      value="electric"
                      checked={equipment.powerSource === "electric"}
                      onChange={(e) =>
                        handleUpdateEquipment(
                          index,
                          "powerSource",
                          e.target.value
                        )
                      }
                    />
                    <p className={styles.optionText}>Electric</p>
                  </label>
                  <label className={styles.optionLabel}>
                    <input
                      type="radio"
                      value="diesel"
                      checked={equipment.powerSource === "diesel"}
                      onChange={(e) =>
                        handleUpdateEquipment(
                          index,
                          "powerSource",
                          e.target.value
                        )
                      }
                    />
                    <p className={styles.optionText}>Diesel</p>
                  </label>
                </div>
              </div>
              
            </div>

            
          </div>
          <button onClick={handleAddEquipment} className={styles.btnAddEquipment}>
        Add Equipment
      </button>
        </div>
       
      ))}

      
    </div>
  );
};

export default SingleEquipment;
