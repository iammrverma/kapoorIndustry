import React, { useMemo, useState } from "react";
import CallButton from "./CallButton";
import HeroImage from "../assets/hero.jpg";
import { Box, Typography } from "@mui/material";

const isColorDark = (color) => {
  // Convert hex color to RGB
  let r, g, b;

  if (color.startsWith("#")) {
    color = color.slice(1);
    if (color.length === 6) {
      r = parseInt(color.slice(0, 2), 16);
      g = parseInt(color.slice(2, 4), 16);
      b = parseInt(color.slice(4, 6), 16);
    } else if (color.length === 3) {
      r = parseInt(color.charAt(0) + color.charAt(0), 16);
      g = parseInt(color.charAt(1) + color.charAt(1), 16);
      b = parseInt(color.charAt(2) + color.charAt(2), 16);
    }
  } else {
    return false; // Default to false if not a valid hex
  }

  // Calculate brightness
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness < 128;
};

const Tag = ({ title }) => {
  return (
    <Box
      sx={{
        padding: ".35rem .65rem",
        background: "var(--base-2)",
        maxWidth: "fit-content",
        borderRadius: ".5rem",
        whiteSpace: "nowrap",
      }}
    >
      {title ? title : "Tag"}
    </Box>
  );
};

const ProductCard = ({ name, mop, tags, prominentColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const borderRadius = "32px";
  const cardStyle = useMemo(
    () => ({
      width: 268,
      height: 392,
      borderRadius: "32px",
      backgroundColor: isHovered ? "var(--base-1)" : "transparent",
      transition: "all ease 0.3s",
      cursor: "pointer",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }),
    [isHovered]
  );

  const imgContainerStyle = useMemo(
    () => ({
      width: "172px",
      height: "220px",
      position: "absolute",
      top: isHovered ? "65%" : "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      transition: "top 0.3s ease",
    }),
    [isHovered]
  );

  const imgStyle = useMemo(
    () => ({
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: isHovered ? "scale(1.5)" : "scale(1)",
      transition: "transform ease 0.3s",
    }),
    [isHovered]
  );

  const callButtonStyle = useMemo(
    () => ({
      position: "absolute",
      top: isHovered ? "100%" : "80%",
      left: isHovered ? "50%" : "100%",
      transform: "translate(-50%, -50%)",
      transition: "top 0.3s ease, left 0.3s ease",
    }),
    [isHovered]
  );

  const textContainerStyle = useMemo(
    () => ({
      width: "100%",
      position: isHovered ? "absolute" : "static",
      color: isHovered
        ? isColorDark(prominentColor)
          ? "white"
          : "black"
        : "black",
      top: isHovered ? "5%" : "auto",
      transition: "top 0.3s ease",
    }),
    [isHovered]
  );

  return (
    <div
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          width: "100%",
          height: "80%",
          backgroundColor: prominentColor,
          borderRadius: borderRadius,
          boxSizing: "border-box",
          padding: "32px 48px",
          position: "relative",
          marginBottom: ".5rem",
        }}
      >
        <div style={imgContainerStyle}>
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                borderRadius: isHovered ? "24px 24px 0 0" : "24px",
                transition: "border-radius 0.3s ease",
              }}
            >
              <img src={HeroImage} alt="product image" style={imgStyle} />
            </div>
            <CallButton
              variant={isHovered ? "normal" : "round"}
              title={isHovered ? "Place Order" : ""}
              style={callButtonStyle}
            />
          </div>
        </div>
      </div>

      <div style={textContainerStyle}>
        <Typography align="center" variant="h5">
          {name}
        </Typography>
        <Typography align="center">Mop - {mop} units</Typography>
      </div>

      <div
        style={{
          display: isHovered ? "flex" : "none",
          overflowY: "scroll",
          gap: "1rem",
          flex: "1",
          alignItems: "center",
          padding: "0 .5rem",

          // removing the scrolbar
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {tags.map((tag, index) => (
          <Tag title={tag} key={index} />
        ))}
      </div>
    </div>
  );
};

// Set default props
ProductCard.defaultProps = {
  name: "Product",
  mop: 69,
  tags: [],
  prominentColor: "#00120b",
};

export default ProductCard;
