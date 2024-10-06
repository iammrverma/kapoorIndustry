import React from "react";
import { Button } from "@mui/material";

const PrimaryBtn = ({title, callBack, size}) => {
  return (
    <Button
      onClick={callBack}
      variant="contained"
      size={size}
      sx={{
        backgroundColor: "var(--secondary-bg-color)",
        color: "var(--secondary)",
        textTransform:"none",
        whiteSpace:"none",
      }}
    >
      {title}
    </Button>
  );
};

export default PrimaryBtn;
