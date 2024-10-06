import React from "react";
import { useNavigate } from "react-router-dom";

import { Typography } from "@mui/material";

import ProductList from "./ProductList";
import PrimaryBtn from "../PrimaryBtn";

const ProductSection = () => {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="h2" align="center" marginBottom={"2rem"}>
        Popular Products
      </Typography>

      <ProductList products={[{}, {}, {}, {}, {}]} />

      <div style={{ display: "grid", placeItems: "center" }}>
        <PrimaryBtn
          title={"View All Products"}
          size={"large"}
          callBack={() => navigate("/categories")}
        />
      </div>
    </div>
  );
};

export default ProductSection;
