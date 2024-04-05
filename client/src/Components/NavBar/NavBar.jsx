import React from "react";
import { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

const NavBar = () => {
  window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > window.innerHeight) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

   const [openMenu, setOpenMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
       setOpenMenu(!openMenu);
     };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="navbar xsm:w-[100vw] flex-col">
        <div className="log w-[10%] px-2 py-1 xsm:top-5">
          <a href="/">
            <img src="logos/sprint.svg" alt="sprint" />
          </a>
        </div>
        {/* desktop */}
        <div className="components xsm:hidden">
          <ul className="xsm:hidden">
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
          <button className="btn xsm:w-[30%] mx-auto self-start absolute right-4 top-[50%] translate-y-[-50%] xsm:hidden">
            {" "}
            <Link to="/contact">Contact</Link>
          </button>
        </div>

        {openMenu && (
          <div className="components hidden xsm:block h-[100vh] uppercase">
            <ul className="hidden flex xsm:flex-col block">
              <li>
                <Link to="/home" onClick={handleClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={handleClick}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={handleClick}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" onClick={handleClick}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={handleClick}>
                  Contact
                </Link>
              </li>
              <li onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
                <div className="dropdown text-white relative">
                  <button
                    className="dropdown-toggle uppercase"
                    onClick={toggleMenu}
                  >
                    Resource
                  </button>
                  {isOpen && (
                    <div className="dropdown-menu absolute left-[-1rem] z-[999] bg-black px-4 py-2  hover:border-b-black uppercase">
                      <Link to="/articles">
                        <option
                          className="hover:border-b-2 my-3"
                          onClick={handleClick}
                        >
                          Articles
                        </option>
                      </Link>
                      <Link to="/calculate">
                        <option
                          className=" hover:border-b-2"
                          onClick={handleClick}
                        >
                          Calculate
                        </option>
                      </Link>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        )}

        <div
          className="menu hidden xsm:block absolute right-10 text-[2rem] top-2 transition ease-in-out delay-200"
          onClick={handleClick}
        >
          {openMenu ? <IoMdClose /> : <IoMenu />}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
