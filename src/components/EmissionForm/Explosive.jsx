import React, { useState, useEffect } from "react";
import styles from "./Explosive.module.css"; // Import the CSS module
// import ExplosiveDropdown from "./ExplosiveDropdown";
import ExplosiveDropdown from "./ExplosiveDropdown ";
import { ImBin2 } from "react-icons/im";
import { getEmissionFactor } from "../../CarbonCalculator";

const Explosive = ({ text = "" }) => {
  const defaultExplosive = {
    explosiveType: "",
    numberOfExplosives: 0,
    emissions: 0,
  };

  const [explosiveList, setExplosiveList] = useState(
    () => JSON.parse(localStorage.getItem("explosiveList")) || [defaultExplosive]
  );

  const calculateEmissions = (explosive) => {
    let emissionFactor = 1;
    emissionFactor = getEmissionFactor(explosive.explosiveType)
    if (explosive.explosiveType === "Black Powder") emissionFactor = 2;
    console.log("Calculating emissions for:", explosive); // Debugging line
    const calculatedEmissions = explosive.numberOfExplosives * emissionFactor;
    return calculatedEmissions.toFixed(2);
  };

  useEffect(() => {
    localStorage.setItem("explosiveList", JSON.stringify(explosiveList));
  }, [explosiveList]);

  const handleAddExplosive = () => {
    setExplosiveList([...explosiveList, defaultExplosive]);
  };

  const handleDeleteExplosive = (index) => {
    const updatedList = explosiveList.filter((_, i) => i !== index);
    setExplosiveList(updatedList);
  };

  const handleUpdateExplosive = (index, field, value) => {
    console.log(`Updating explosive ${index} field ${field} to ${value}`); // Debugging line
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
      <div className={styles.headExpo}>
        <h3>3. Explosive Details</h3>
      </div>
      <div>
        {explosiveList.map((explosive, index) => (
          <div key={index} className={styles["outer-container"]}>
            <div className={styles["text-above"]}>{text}</div>

            <div className={styles["tnt"]}>
              <ExplosiveDropdown
                value={explosive.explosiveType}
                onChange={(e) =>
                  handleUpdateExplosive(index, "explosiveType", e.target.value)
                }
              />

              <div className={styles["input-group"]}>
                <label>No. of Explosives used</label>
                <input
                  className={styles.ip}
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

              <div className={styles["input-group"]}>
                <label>Emissions (Kg CO2)</label>
                <input className={styles.ip} type="text" value={explosive.emissions} readOnly />
              </div>

              <button
                onClick={() => handleDeleteExplosive(index)}
                className={styles["btn-delete-explosive"]}
              >
                <ImBin2 style={{ color: "white", alignItems: "center", fontSize: "150%" }} />
              </button>
            </div>
          </div>
        ))}

        <button onClick={handleAddExplosive} className={styles["btn-add-explosive"]}>
          Add Explosive +
        </button>
      </div>
    </>
  );
};

export default Explosive;
