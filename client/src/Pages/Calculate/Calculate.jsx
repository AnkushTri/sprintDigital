import React from "react";
import { useState } from "react";
import "./Calculater.css";

const Calculate = () => {
  const [value, setValue] = useState(5);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const checkbox = [
    {
      type: "checkbox",
      id: "checkbox1",
      label: "",
      info: "Checkbox 1 info",
      example: "Checkbox 1 example",
    },
    {
      type: "checkbox",
      id: "checkbox2",
      label: "Checkbox 2",
      info: "Checkbox 2 info",
      example: "Checkbox 2 example",
    },

    {
      type: "label",
      htmlFor: "inputField",
      labelText: "Input Label",
    },
  ];
  return (
    <div className="py-[15%] px-[5%]">
      <div className="calculater">
        <img src="calc.svg" alt="cal" className="items-centre px-[15%]" />
        <div className="head">
          <h3 className="header text-center font-bold text-xl text-slate-400 my-8 tracking-wider ">
            BUSINESS CALCULATOR
          </h3>
          <h1>
            How much could your business <span>save in overheads?</span>
          </h1>
          <h3 className=" text-center font-medium text-xl">
            Answer a few simple questions on your current workflow and
          </h3>
          <h3 className=" text-center font-medium text-xl">
            we wil provide you with an estimate of how much a
          </h3>
          <h3 className=" text-center font-medium text-xl">
            custom software solutioncould save your business
          </h3>
          <h3 className=" text-center font-medium text-xl">annually.</h3>
        </div>
        <div className="tellus about my-4 ">
          <h1 className="font-bold text-2xl py-4 text-center">
            Tell us about your business
          </h1>
          <div className=" align-middle">
            <h3 className=" font-semibold text-xl text-center">
              How many staff members does your business have?
            </h3>
            <p>{value}</p>
            <input
              type="range"
              min="1"
              max="500"
              value={value}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="tellusabt">
          <div>
            <h3>On average, what is your business' annual turnover?</h3>
            <p>{value}</p>
            <input
              type="range"
              min="0"
              max="50"
              value={value}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          {checkbox.map((item, index) => (
            <div key={index}>
              {item.type === "checkbox" && (
                <div>
                  <input type="checkbox" id={item.id} />
                  <label htmlFor={item.id}>{item.label}</label>
                  <p>{item.info}</p>
                  <p>{item.example}</p>
                </div>
              )}
              {item.type === "label" && (
                <div>
                  <label htmlFor={item.htmlFor}>{item.labelText}</label>
                  <input type="text" id={item.htmlFor} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculate;
