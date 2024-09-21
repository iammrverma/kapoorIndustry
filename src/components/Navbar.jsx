import React from "react";
import { NavLink } from "react-router-dom";
import "../Navbar.css";
const Navbar = () => {
  return (
    <ul>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/categories"
        >
          Categories
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
