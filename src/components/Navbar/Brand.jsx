import React from "react";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

import Logo from "../../assets/logo.png";
import { useMediaQuery } from "@mui/material";

const Brand = ({ hideName, color }) => {
  const isLargeScreen = useMediaQuery("(min-width:768px)");
  const size = isLargeScreen ? "32px" : "24px";
  const navigate = useNavigate();
  return (
    <div className="navbar-brand">
      <div
        style={{
          width: size,
          height: size,
        }}
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
          src={Logo || "https://via.placeholder.com/40"}
          alt="Brand Logo"
          className="navbar-logo"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>

      {!hideName && (
        <Typography
          variant={isLargeScreen ? "h4" : "h5"}
          color={color ? color : "black"}
          className="navbar-brand-name"
        >
          Kapoor Industry
        </Typography>
      )}
    </div>
  );
};

export default Brand;
