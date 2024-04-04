import React from "react";
import { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

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
    <nav className="xsm:fixed z-[999]">
      <div className="navbar xsm:w-[100vw]">
<<<<<<< HEAD
        <div className="log ml-5 xsm:self-start ml-0">
          <img src="logos/sprint.svg" alt="sprint" />
=======
        <div className="log">
          <a href="/">
            <img src="logos/sprint.svg" alt="sprint" />
          </a>
>>>>>>> 11f0ba073d908efc98155c47aa509fbc021470b0
        </div>
        <div className="components ml-[20%]">
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
                      <option className="hover:border-b-2">Articles</option>
                    </Link>
                    <Link to="/calculate">
                      <option className=" hover:border-b-2 ">Calculate</option>
                    </Link>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
<<<<<<< HEAD
        <button className="btn  xsm:w-[30%] self-start">
=======
        <button className="btn xsm:w-[30%] mx-auto self-start absolute right-4 top-[50%] translate-y-[-50%] ">
>>>>>>> 11f0ba073d908efc98155c47aa509fbc021470b0
          {" "}
          <Link to="/contact">Contact</Link>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
