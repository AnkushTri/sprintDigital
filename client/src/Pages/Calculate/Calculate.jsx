import React from "react";
import { useState } from "react";
import "./Calculater.css";

const Calculate = () => {
  const [value, setValue] = useState(0);
  const [operation, setOperation] = useState(0);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(500);
  const handleChange = (event) => {
    const inputValue = parseInt(event.target.value);
    setValue(inputValue);
    if (inputValue >= 0 && inputValue <= 15) {
      setMin(1);
      setMax(15);
    } else if (inputValue > 15 && inputValue <= 30) {
      setMin(16);
      setMax(30);
    } else if (inputValue > 30 && inputValue <= 50) {
      setMin(31);
      setMax(50);
    } else if (inputValue > 50 && inputValue <= 150) {
      setMin(51);
      setMax(150);
    }
  };
  const handleBus = (e) => {
    setOperation(e.target.value);
  };
  const calc = [
    {
      title:
        "Do you currently have any of these Saas platforms or software solutions?",
      options: [
        {
          tag: "Accounting",
          subtitle: "e.g. Xero, Myob",
        },
        {
          tag: "Point of Sales",
          subtitle: "e.g. SAP",
        },
        {
          tag: "CRM",
          subtitle: "eg. Trello, Monday",
        },
        {
          tag: "CRM",
          subtitle: "eg. Trello, Monday",
        },
        {
          tag: "Accounting",
          subtitle: "e.g. Xero, Myob",
        },
      ],
    },
    {
      title:
        "Which of these manual processes do your staff currently do every week?",
      options: [
        {
          tag: "Accounting",
          subtitle: "e.g. Xero, Myob",
        },
        {
          tag: "Point of Sales",
          subtitle: "e.g. SAP",
        },
        {
          tag: "CRM",
          subtitle: "eg. Trello, Monday",
        },
        {
          tag: "CRM",
          subtitle: "eg. Trello, Monday",
        },
        {
          tag: "Accounting",
          subtitle: "e.g. Xero, Myob",
        },
      ],
    },
  ];
  const industries = [
  "Technology",
  "Finance",
  "Healthcare",
  "Retail",
  "Manufacturing",
  "Education",
  "Entertainment",
  "Hospitality",
  "Transportation",
  "Real Estate",
  "Government",
  "Telecommunications",
  "Media",
  "Energy",]
  return (
    <div className="pt-[15%] pb-[5%] px-[5%]">
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
            <p className="text-center py-2">{`${min}-${max}`}</p>
            <input
              type="range"
              min="0"
              max="500"
              value={value}
              onChange={handleChange}
              className="w-[100%] focus:outline-none mb-6 border-none"
            />
          </div>
        </div>
        <div className="tellusabt">
          <div>
            <h3>On average, what is your business' annual turnover?</h3>
            <p className="text-center py-2">{operation} $k</p>
            <input
              type="range"
              min="0"
              max="5000"
              value={operation}
              onChange={handleBus}
              className="w-[100%] focus:outline-none mb-6 border-none"
            />
          </div>
        </div>
        <div>
          {calc.map((item, index) => (
            <div key={index} className="mt-12">
              <h1 className="text-[1.2rem] ">{item.title}</h1>
              <div className="grid grid-cols-2 items-center">
                {item.options?.map((el) => {
                  return (
                    <div key={el} className="my-4 mx-4 text-[1.2rem]">
                      <input
                        type="checkbox"
                        id={el.tag}
                        className="outline-none bg-[grey]"
                      />
                      <span className="px-4">
                        {el.tag}{" "}
                        <span className="text-[grey] text-[0.8rem]">
                          {el.subtitle}
                        </span>
                      </span>
                    </div>
                  );
                })}
                <input
                  type="text"
                  className="py-2 px-3 rounded-lg bg-[#e2f1ee] focus:outline-[#7ec6cd]"
                />
              </div>
            </div>
          ))}
        </div>

        {/* form */}
        <form action="" className="my-12">
          <h1 className="text-[1.5rem]">Tell us about you</h1>
          <div className="flex flex-wrap flex-grow min-[100px]: gap-[10%]">
            <div className="w-[45%] my-4">
              <label htmlFor="name">
                Name<span>*</span>
              </label>
              <input
                required
                name="name"
                id="name"
                type="text"
                className="rounded-md py-2 w-[100%]"
              />
            </div>
            <div className="w-[45%] my-4">
              <label htmlFor="cname">
                Company name <span>*</span>
              </label>
              <input
                required
                name="cname"
                id="cname"
                type="text"
                className="rounded-md py-2 w-[100%]"
              />
            </div>
            <div className="w-[45%] my-4">
              <label htmlFor="email">
                Email address<span>*</span>
              </label>
              <input
                required
                name="email"
                id="email"
                type="email"
                className="rounded-md py-2 w-[100%]"
              />
            </div>
            <div className="w-[45%] my-4">
              <label htmlFor="phone">
                Phone number<span>*</span>
              </label>
              <input
                required
                name="phone"
                id="phone"
                type="number"
                className="rounded-md py-2 w-[100%]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="industry">
              Industry <span>*</span>
            </label>
            <select
              name="industry"
              id="industry"
              className="w-full font-light px-3 py-3 border focus:outline-none"
            >
              <option value="" className="py-4">
                Select an Industry
              </option>
              {industries?.map((el) => {
                return <option value={el.toLocaleLowerCase()}>{el}</option>;
              })}
            </select>
          </div>

          {/* captcha */}
          <div className="flex w-[50%] mx-auto justify-between px-4 items-center bg-white mt-6 py-2  border">
            <div className="flex gap-2">
              <input
                type="checkbox"
                name="terms"
                id="agree"
                required
                className="w-8"
              />
              <p> I'm not a robot</p>
            </div>
            <img src="logos/captcha.png" alt="captcha" className="w-12" />
          </div>
          <div className=" border rounded-3xl w-[100%]  text-white bg-[#2ae8f2] my-3">
            <button type="button" className="py-4 w-[100%] mx-auto font-light">
              Calculate my saving
            </button>
          </div>
        </form>
        <p className="text-center text-[grey]">
          By submitting your details you agree that Sprint Digital may email you
          with information regarding your potential business savings and other
          offers. Sprint Digital will use your information within our{" "}
          <span className="text-[blue] ">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Calculate;
