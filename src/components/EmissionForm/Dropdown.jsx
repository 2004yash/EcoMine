import React from 'react';
import styles from './Dropdown.module.css'; // Import CSS module

const Dropdown = ({ value, onChange }) => {
    return (
        <div>
            <label htmlFor="fuelType" className={styles.label}>Fuel Type*</label>
            <select
                id="fuelType"
                className={styles.selectInput}  // Apply the CSS module class
                value={value}
                onChange={onChange}
            >
                <option value="" disabled>Select Fuel Type</option>
                <option value="anthracite">Anthracite</option>
                <option value="bituminous">Bituminous</option>
                <option value="lignite">Lignite</option>
                <option value="subbituminous">Subbituminous</option>
                <option value="diesel">Diesel</option>
                <option value="Fuel Oil">Fuel Oil</option>
                <option value="LPG">LPG</option>
                <option value="Pet Coke">Pet Coke</option>
                <option value="Rice Husk">Rice Husk</option>
                <option value="Wood">Wood</option>
            </select>
        </div>
    );
};

export default Dropdown;
