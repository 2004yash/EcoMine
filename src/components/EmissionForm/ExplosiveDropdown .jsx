import React from 'react';
import styles from './Dropdown.module.css'; // Import CSS module

const ExplosiveDropdown = ({ value, onChange }) => {
  console.log("Dropdown value:", value); // Debugging line

  return (
    <div>
      <label htmlFor="explosiveType" className={styles.expolabel}>Explosive Type*</label>
      <select
        id="explosiveType"
        className={styles.expodrop}  // Apply the CSS module class
        value={value}
        onChange={onChange}
      >
        <option value="" disabled>Select Explosive Type</option>
        <option value="Dynamite (Nitroglycerin-based)">Dynamite (Nitroglycerin-based)</option>
        <option value="Ammonium Nitrate Fuel Oil (ANFO)">Ammonium Nitrate Fuel Oil (ANFO)</option>
        <option value="Emulsion Explosives">Emulsion Explosives</option>
        <option value="Water-gel Explosives (Slurries)">Water-gel Explosives (Slurries)</option>
        <option value="Pentolite">Pentolite</option>
        <option value="TNT (Trinitrotoluene)">TNT (Trinitrotoluene)</option>
        <option value="PETN (Pentaerythritol Tetranitrate)">PETN (Pentaerythritol Tetranitrate)</option>
        <option value="Black Powder">Black Powder</option>
      </select>
    </div>
  );
};

export default ExplosiveDropdown;
