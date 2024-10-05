import { Button } from "@mui/material";
import React from "react";

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
