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
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleHover = () => {
    setIsOpen(true);
  };

  const toggleHoverOff = () => {
    setIsOpen(false);
  };

  return (
    <nav>
      <div className="navbar">
        <div className="log">
          <img src="logos/sprint.svg" alt="sprint" />
        </div>
        <div className="components">
          <ul>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="about">Service</Link>
            </li>
            <li>
              <Link to="about">Project</Link>
            </li>
            <li>
              <a
                onMouseEnter={toggleHover}
                onMouseLeave={toggleHoverOff}
                className="dropdown-toggle"
              >
                Resource
                {isOpen && (
                  <ol className="dropdown-menu">
                    <li>Articles</li>
                    <li>Calculate</li>
                  </ol>
                )}
              </a>
            </li>
          </ul>
        </div>
        <button className="btn">Contact Us</button>
      </div>
    </nav>
  );
};

export default NavBar;
