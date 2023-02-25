import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo.png";

function Navbar() {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <ul className="nav">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="menu">Menu </NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="contact">Contact</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
