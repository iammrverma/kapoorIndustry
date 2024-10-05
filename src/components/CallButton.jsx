import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhoneIcon from "@mui/icons-material/Phone";

const CallButton = ({ title, variant, style }) => {
  const makeCall = () => {
    console.log("Making call...");
  };

  // Common styles for both button types
  const commonStyles = {
    backgroundColor: "var(--primary-bg-color)",
    color: "var(--secondary)",
    ...style, // Apply user-provided custom styles
  };

  return variant === "round" ? (
    <IconButton onClick={makeCall} aria-label="call" sx={commonStyles}>
      <PhoneIcon />
    </IconButton>
  ) : (
    <Button
      onClick={makeCall}
      variant="contained"
      size="small"
      endIcon={<PhoneIcon />}
      sx={{
        ...commonStyles,
        textTransform: "none", // Prevent text capitalization
        whiteSpace: "nowrap", // Ensure the text doesn't wrap
      }}
      aria-label={`Call ${title}`}
    >
      {title}
    </Button>
  );
};

// Set default props in case none are provided
CallButton.defaultProps = {
  title: "Call Us",
  variant: "normal",
  style: {},
};

// Prop validation
CallButton.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.oneOf(["normal", "round"]),
  style: PropTypes.object,
};

export default CallButton;
