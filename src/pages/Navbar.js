import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import "./Navbar.css";
import logo from "./logo.jpg";
// import About from "./About";

const Navbar = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__logo-container">
          <img src={logo} alt="logooo" className="logo" />
          <NavLink to="/" className="nav__logo">
            Som Sahayak
          </NavLink>
        </div>
        <div className={"nav__menu"} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link">
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/news" className="nav__link">
                Profile
              </NavLink>
            </li>
            <li className="nav__item">
              <Link to="/about" className="nav__link">
                About Us
              </Link>
            </li>
            <li className="nav__item">
              <NavLink to="/favorite" className="nav__link">
                Feedback
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/location" className="nav__link">
                Contact Us
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/get-started" className="nav__link nav__cta">
                FAQs
              </NavLink>
            </li>
          </ul>
          <div className="nav__close" id="nav-close">
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <IoMenu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
