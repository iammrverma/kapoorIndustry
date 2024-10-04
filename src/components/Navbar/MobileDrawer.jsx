import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Brand from "./Brand";
import { NavLink } from "react-router-dom";

const MobileDrawer = ({ drawerOpen, toggleDrawer }) => {
  const links = [
    { path: "/", name: "Home" },
    { path: "/categories", name: "Categories" }
  ];

  return (
    <Drawer
      anchor="right"
      open={drawerOpen}
      onClose={toggleDrawer(false)}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "transparent", //imp to make the paper color transparein order to make it morph
          backdropFilter: "blur(10px)",
        },
      }}
    >
      {/* Drawer content container */}
      <div className="drawer-content morph">
        {/* Display brand image and name aligned left */}
        <div className="drawer-header">
          <Brand />
        </div>

        {/* Nav Links inside Drawer */}
        <List className="drawer-list">
          {links.map((link) => (
            <ListItem
              button
              className="ul-button"
              key={link.name}
              component={NavLink}
              to={link.path}
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary={link.name} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default MobileDrawer;
