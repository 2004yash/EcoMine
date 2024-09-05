import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li><NavLink className={(e) => {return e.isActive?"white":""}}  to="/carbonform/excavation">EXCAVATION</NavLink></li>
          <li><NavLink className={(e) => {return e.isActive?"white":""}}  to="/carbonform/transportation">TRANSPORTATION</NavLink></li>
          <li><NavLink className={(e) => {return e.isActive?"white":""}}  to="/carbonform/equipment">EQUIPMENT</NavLink></li>
          <li><NavLink  className={(e) => {return e.isActive?"white":"" }} to="/carbonform/offset">OFFSET</NavLink></li>
          {/* <li><NavLink  className={(e) => {return e.isActive?"white":"" }} to="/carbonform/result">RESULT</NavLink></li> */}
        </ul>
      </nav>
      
    </>
  );
}

export default Nav