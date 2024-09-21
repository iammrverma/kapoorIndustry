import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import "../Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/">
            {({ isActive }) => (
              <Button
                className="nav-button"
                variant={isActive ? "contained" : "text"}
              >
                Home
              </Button>
            )}
          </NavLink>
        </li>

        <li>
          <NavLink to="/categories">
            {({ isActive }) => (
              <Button
                className="nav-button"
                variant={isActive ? "contained" : "text"}
              >
                Categories
              </Button>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
