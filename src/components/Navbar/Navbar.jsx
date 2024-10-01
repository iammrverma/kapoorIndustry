import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import Brand from "./Brand";
import NavLinks from "./NavLinks";
import MobileDrawer from "./MobileDrawer";
import "../../Navbar.css";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isLargeScreen = useMediaQuery("(min-width:768px)");

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <AppBar position="static" style={{ backgroundColor: "transparent" }}>
      <Toolbar className="navbar-toolbar">
        {/* Left Section: Brand */}
        <Brand />

        {/* Center Section: Navigation Links (Visible only on large screens) */}
        {isLargeScreen && <NavLinks isLargeScreen={true} toggleDrawer={toggleDrawer} />}

        {/* Right Section: Drawer Menu Icon for Mobile Screens */}
        {!isLargeScreen && (
          <IconButton edge="end" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        )}

        {/* Drawer for Mobile View */}
        <MobileDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
