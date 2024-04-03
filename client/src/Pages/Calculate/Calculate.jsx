import React from 'react'
import { useState } from 'react';
import './Calculater.css';

const Calculate = () => {
  const [value, setValue] = useState(5); 
  const handleChange = (event) => {
    setValue(event.target.value);
  };
 const checkbox=[
      {
      type: 'checkbox',
      id: 'checkbox1',
      label: '',
      info: 'Checkbox 1 info',
      example: 'Checkbox 1 example'
    },
    {
      type: 'checkbox',
      id: 'checkbox2',
      label: 'Checkbox 2',
      info: 'Checkbox 2 info',
      example: 'Checkbox 2 example'
    },
   
    {
      type: 'label',
      htmlFor: 'inputField',
      labelText: 'Input Label'
    }
  ];
  return (
    <div className="py-[15%] px-[2%]">
      <div className="calculater">
        <img src="calc.svg" alt="cal" />
        <div className="head">
          <h3 className="header">BUSINESS CALCULATOR</h3>
          <h1>
            How much could your business <span>save in overheads?</span>
          </h1>
          <h3>
            Answer a few simple questions on your current workflow and we will
            provide you with an estimate of how much a custom software solution
            could save your business annually.
          </h3>
        </div>
        <div className="tellusabt">
          <h1>Tell us about your business</h1>
          <div>
            <h3>How many staff members does your business have?</h3>
            <p>0-5{value}</p>
            <input
              type="range"
              min="0"
              max="500"
              value={value}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="tellusabt">
          <div>
            <h3>On average, what is your business' annual turnover?</h3>
            <p>0-5{value}</p>
            <input
              type="range"
              min="0"
              max="50"
              value={value}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculate