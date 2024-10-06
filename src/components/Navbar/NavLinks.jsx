import React from "react";
import { NavLink } from "react-router-dom";

import Button from "@mui/material/Button";

const NavLinks = ({ isLargeScreen, toggleDrawer }) => {
  const links = [
    { path: "/", name: "Home" },
    { path: "/categories", name: "Categories" }
  ];

  return (
    <ul className="navbar-menu">
      {links.map((link) => (
        <li key={link.name}>
          <NavLink to={link.path}>
            {({ isActive }) => (
              <Button
                className={`${isActive ? "active" : ""} ul-button`}
                variant={isActive ? "contained" : "text"}
                onClick={isLargeScreen ? undefined : toggleDrawer(false)}
              >
                {link.name}
              </Button>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
