import React from 'react'
import { Link } from "react-router-dom";

const ScrollingContact = () => {
  return (
    <div className="bg-[#63dfdd] relative ">
      <div className="marquee-wrapper text-[5rem] line-climb-6">
        <div className="marquee-container1 ">
          <p className="marquee-item">
          Take the next step Take the next step Take the next step Take the next step Take the next step Take the next step Take the next step
          </p>
        </div>
        <div className="marquee-container">
          <p className="marquee-item ">
          Take the next step Take the next step Take the next step Take the next step Take the next step Take the next step Take the next step
          </p>
        </div>
        <div className="text-[3rem] text-white text-center hover:my-5 text-bolder ">
          <Link to="/contact" className="cursor-pointer">
            {" "}
            Contact Us
          </Link>
        </div>
        <div className="marquee-container1 ">
          <p className="marquee-item">
          Take the next step Take the next step Take the next step Take the next step Take the next step Take the next step Take the next step
          </p>
        </div>
        <div className="marquee-container">
          <p className="marquee-item">
          Take the next step Take the next step Take the next step Take the next step Take the next step Take the next step Take the next step
          </p>
        </div>
      </div>
    </div>
  );
}

export default ScrollingContact