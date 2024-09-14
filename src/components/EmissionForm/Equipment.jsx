import React from 'react';
import Nav from './Nav';
import SingleEquipment from "./SingleEquipment";
import './Equipment.css';
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Equipment = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <>
      <Nav />
      <div className="singlee">
      <SingleEquipment />
      </div>
      <div className="footerr">
        <button onClick={() => navigate("/carbonform/offset")} className='btn4'>
          Next
        </button>
        <button onClick={() => navigate(-1)} className='btn'>
          Prev
        </button>
      </div>
    </>
  );
}

export default Equipment;
