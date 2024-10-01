import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Brand from "./Brand";
import { NavLink } from "react-router-dom";

const MobileDrawer = ({ drawerOpen, toggleDrawer }) => {
  const links = [
    { path: "/", name: "Home" },
    { path: "/categories", name: "Categories" }
  ];

  return (
    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
      <div className="drawer-content">
        {/* Display brand image and name aligned left */}
        <div className="drawer-header">
          <Brand />
        </div>

        {/* Nav Links inside Drawer */}
        <List className="drawer-list">
          {links.map((link) => (
            <ListItem
              button className="ul-button"
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
