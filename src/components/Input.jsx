import React from 'react'
import "./Input.css";


const Input = ({value, onChange, placeholder}) => {
  return (
    <div className='boxes'>
     
        <div className="parameter">{ placeholder}</div>
        <div className="box">
        <input 
          type="text" 
          value={value} 
          onChange={onChange} 
         
        />
        </div>
      
    </div>
  )
}

export default Input
