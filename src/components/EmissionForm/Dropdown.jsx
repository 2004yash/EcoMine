import React, { useState } from 'react';
import './Dropdown.css';
const Dropdown = () => {
    const [selectedFuel, setSelectedFuel] = useState('');

    const handleSelectChange = (event) => {
        setSelectedFuel(event.target.value);
    };

    return (
        <div>
            <label htmlFor="fuelType">Fuel Type*</label>
            <select id="fuelType" value={selectedFuel} onChange={handleSelectChange}>
                <option value="" disabled></option>
                <option value="diesel">Diesel</option>
                <option value="petrol">Petrol</option>
                <option value="electric">Electric</option>
                {/* Add more options as needed */}
            </select>
        </div>
    );
};

export default Dropdown;
