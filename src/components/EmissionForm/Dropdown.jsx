import React from 'react';
import './Dropdown.module.css';

const Dropdown = ({ value, onChange }) => {
    return (
        <div>
            <label htmlFor="fuelType">Fuel Type*</label>
            <select id="fuelType" value={value} onChange={onChange}>
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

                {/* Add more options as needed */}
            </select>
        </div>
    );
};

export default Dropdown;