import React from "react";
import Typography from "@mui/material/Typography";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Brand = ({ hideName }) => {
  const navigate = useNavigate();
  return (
    <div className="navbar-brand">
      <img
        src={Logo || "https://via.placeholder.com/40"}
        alt="Brand Logo"
        className="navbar-logo"
        onClick={() => {
          navigate("/");
        }}
      />
      {!hideName && (
        <Typography variant="h6" className="navbar-brand-name">
          Kapoor Industry
        </Typography>
      )}
    </div>
  );
};

export default Brand;
