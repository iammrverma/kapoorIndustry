import React, { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Typography } from "@mui/material";

import HeroImage from "../../assets/hero.jpg";
import PrimaryBtn from "../PrimaryBtn";
import CallButton from "../CallButton";

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
const useStyles = (isHovered, isDark) => ({
  cardStyle: {
    width: 268,
    height: 392,
    minWidth: 268,
    borderRadius: "32px",
    backgroundColor: isHovered ? "var(--base-1)" : "transparent",
    transition: "all ease 0.3s",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
  },

  imgContainerStyle: {
    width: "172px",
    height: "220px",
    position: "absolute",
    top: isHovered ? "65%" : "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    transition: "top 0.3s ease",
  },

  imgStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transform: isHovered ? "scale(1)" : "scale(1.5)",
    transition: "transform ease 0.3s",
  },

  callButtonStyle: {
    position: "absolute",
    top: isHovered ? "100%" : "80%",
    left: isHovered ? "50%" : "100%",
    transform: "translate(-50%, -50%)",
    transition: "top 0.3s ease, left 0.3s ease",
  },

  textContainerStyle: {
    width: "100%",
    position: isHovered ? "absolute" : "static",
    color: isHovered ? (isDark ? "white" : "black") : "black",
    top: isHovered ? "5%" : "auto",
    transition: "top 0.3s ease",
  },
});

const ProductCard = ({ name, mop, id, prominentColor, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);
  const handleClick = useCallback(
    () => navigate(`/categories/${id}`),
    [navigate, id]
  );

  const isDark = useMemo(() => isColorDark(prominentColor), [prominentColor]);
  const styles = useMemo(
    () => useStyles(isHovered, isDark),
    [isHovered, isDark]
  );
  const borderRadius = "32px";

  return (
    <div
      style={styles.cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
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
        <div style={styles.imgContainerStyle}>
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
                boxShadow: "grey 0 0 8px 0"
              }}
            >
              <img
                src={image}
                alt="product image"
                style={styles.imgStyle}
                loading="lazy"
              />
            </div>
            <CallButton
              variant={isHovered ? "normal" : "round"}
              title={isHovered ? "Place Order" : ""}
              style={styles.callButtonStyle}
            />
          </div>
        </div>
      </div>

      <div style={styles.textContainerStyle}>
        <Typography align="center" variant="h5">
          {name}
        </Typography>
        <Typography align="center">Mop - {mop} units</Typography>
      </div>

      <div
        style={{
          display: isHovered ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          flex: "1",
        }}
      >
        <PrimaryBtn
          title={"View Product"}
          size={"medium"}
          callBack={() => navigate(`/categories/${id}`)}
        />
      </div>
    </div>
  );
};

// Set default props
ProductCard.defaultProps = {
  name: "Product",
  mop: 69,
  id: "123",
  prominentColor: "#00120b",
  image: HeroImage,
};

export default React.memo(ProductCard);
