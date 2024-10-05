import React from "react";
import ProductList from "./ProductList";
import { Typography } from "@mui/material";
import PrimaryBtn from "../PrimaryBtn";
import { useNavigate } from "react-router-dom";

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
