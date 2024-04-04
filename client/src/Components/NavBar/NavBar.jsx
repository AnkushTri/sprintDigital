import React from "react";
import { useState } from "react";
import "./NavBar.css";
import {Link} from "react-router-dom";

const NavBar = () => {

  window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > window.innerHeight) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="navbar xsm:w-[100vw]">
        <div className="log">
          <img src="logos/sprint.svg" alt="sprint" />
        </div>
        <div className="components">
          <ul className="xsm:flex-col">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
              <div className="dropdown text-white relative">
                <button className="dropdown-toggle" onClick={toggleMenu}>
                  Resource
                </button>
                {isOpen && (
                  <div className="dropdown-menu absolute left-[-1rem] z-[999] bg-black px-4 hover:border-b-black">
                    <Link to="/articles">
                      <option>Articles</option>
                    </Link>
                    <Link to="/calculate">
                      <option>Calculate</option>
                    </Link>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
        <button className="btn xsm:w-[30%] mx-auto self-start">
          {" "}
          <Link to="/contact">Contact</Link>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
