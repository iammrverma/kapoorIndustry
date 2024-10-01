import React from "react";
import Typography from "@mui/material/Typography";
import Logo from "../../assets/logo.png";

const Brand = () => {
  return (
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
  );
};

export default Brand;
