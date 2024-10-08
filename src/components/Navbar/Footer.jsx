import React from "react";
import { Link, NavLink } from "react-router-dom";
import Brand from "./Brand";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { Divider, Typography, useMediaQuery } from "@mui/material";


const Footer = ({ categories }) => {
  const isLargeScreen = useMediaQuery("(min-width:768px)");
  const direction = isLargeScreen ? "row" : "column";
  const alignment = isLargeScreen ? "flex-start" : "center";
  const socialIconStyle = {
    cursor: "pointer",
    "&:hover": {
      color: "white",
    },
  };
  return (
    <>

    <div
      style={{
        display: "grid",
        placeItems: "center",
        backgroundColor: "#110d0d",
        padding: "4rem 2rem",
      }}
    >
      <div
        className="morph"
        style={{
          display: "flex",
          gap: "2rem",
          flexDirection: direction,
          justifyContent: "space-between",
          alignItems: alignment,
          color: "var(--secondary)",
          padding: "2rem",
          width: "100%",
        }}
      >
        <div>
          <Brand />
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              marginTop: "1rem",
              color: "black",
            }}
          >
            <Typography>Follow along:</Typography>
            <Link href="/"><LinkedInIcon sx={socialIconStyle} /></Link>
            <Link href="/"><XIcon sx={socialIconStyle} /></Link>
            <Link href="/"><InstagramIcon sx={socialIconStyle} /></Link>
          </div>
        </div>
        <div>
          <Typography variant="h5" noWrap>
            Quick Link
          </Typography>
          <Typography>
            <NavLink to="/">Home</NavLink>
          </Typography>
          <Typography>
            <NavLink to="/categories">Categories</NavLink>
          </Typography>
        </div>
        <div>
          <Typography variant="h5" noWrap>
            Categories
          </Typography>
          {categories?.map((type) => (
            <Typography>{type}</Typography>
          ))}
        </div>
      </div>
      <Divider sx={{}} />
    </div>
    </>
  );
};

export default Footer;
