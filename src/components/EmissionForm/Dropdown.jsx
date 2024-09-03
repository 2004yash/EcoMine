import React from 'react';
import './Dropdown.css';

const Dropdown = ({ value, onChange }) => {
    return (
        <div>
            <label htmlFor="fuelType">Fuel Type*</label>
            <select id="fuelType" value={value} onChange={onChange}>
                <option value="" disabled>Select Fuel Type</option>
                <option value="diesel">Diesel</option>
                <option value="petrol">Petrol</option>
                <option value="electric">Electric</option>
                {/* Add more options as needed */}
            </select>
        </div>
    );
};

export default Dropdown;
