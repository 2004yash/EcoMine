import React, { useState } from 'react';
import styles from './ExplosiveDropdown.module.css'; // Import the CSS module

const ExplosiveDropdown = () => {
  // Array of explosive types
  const explosives = [
    "Dynamite",
    "Ammonium Nitrate Fuel Oil (ANFO)",
    "TNT",
    "Nitroglycerin",
    "RDX",
    "C-4",
  ];

  // State to store the selected explosive
  const [selectedExplosive, setSelectedExplosive] = useState("");

  // Handler for dropdown change
  const handleSelectChange = (e) => {
    setSelectedExplosive(e.target.value);
  };

  return (
    <div>
      <label htmlFor="explosive-select" className={styles.expolabel}>Explosive: </label>
      <div className={styles.expo}>
        <select
          id="explosive-select"
          value={selectedExplosive}
          onChange={handleSelectChange}
          className={styles.exposelectInput}  // Apply scoped class for select
        >
          <option value="" className={styles.expodrop}>-- Select Explosive --</option>
          {explosives.map((explosive, index) => (
            <option key={index} value={explosive}>
              {explosive}
            </option>
          ))}
        </select>
      </div>

      {selectedExplosive && (
        <p className={styles.selectedExplosiveText}>You selected: {selectedExplosive}</p>
      )}
    </div>
  );
};

export default ExplosiveDropdown;
