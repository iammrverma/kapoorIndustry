import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Logo from "../assets/logo.png";
import "../Navbar.css";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width:768px)");

  // Function to toggle the drawer on mobile screens
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  // Navbar links component
  const navLinks = (
    <>
      <li>
        <NavLink to="/">
          {({ isActive }) => (
            <Button
              className={`${isActive ? "active" : ""} ul-button`}
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
              className={`${isActive ? "active" : ""} ul-button`}
              variant={isActive ? "contained" : "text"}
            >
              Categories
            </Button>
          )}
        </NavLink>
      </li>
    </>
  );

  return (
    <AppBar position="static" style={{ backgroundColor: "transparent" }}>
      <Toolbar className="navbar-toolbar">
        {/* Left Section: Brand Image and Name */}
        <div className="navbar-brand">
          <img
            src={Logo || "https://via.placeholder.com/40"}
            alt="Brand Logo"
            className="navbar-logo"
          />
          <Typography variant="h6" className="navbar-brand-name">
            Kapoor Industry
          </Typography>
        </div>

        {/* Center Section: Navigation Links (Visible only on large screens) */}
        {isLargeScreen && <ul className="navbar-menu">{navLinks}</ul>}

        {/* Right Section: Drawer Menu Icon for Mobile Screens */}
        {!isLargeScreen && (
          <IconButton
            edge="end"
            // color="black"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        )}

        {/* Drawer for Mobile View */}
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <div className="drawer-content">
            {/* Display brand image and name aligned left */}
            <div className="drawer-header">
              <img
                src="https://via.placeholder.com/40"
                alt="Brand Logo"
                className="drawer-logo"
              />
              <Typography variant="h6" className="drawer-brand-name">
                BrandName
              </Typography>
            </div>

            {/* Nav Links inside Drawer */}
            <List className="drawer-list">
              <ListItem
                button className="ul-button"
                component={NavLink}
                to="/"
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem
                button className="ul-button"
                component={NavLink}
                to="categories"
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary="Categories" />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
