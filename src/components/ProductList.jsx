import React from "react";
import ProductCard from "./ProductCard";
import { useMediaQuery } from "@mui/material";

const ProductList = ({ products }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        flexWrap: "nowrap",
        gap: isMobile ? "1rem" : "3rem",
        overflowX: "scroll",
        position: "relative",
        padding: isMobile ? "1rem 2rem" : "2rem 4rem",
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      {products?.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          mop={product.mop}
          prominentColor={product.prominentColor}
          id={product.id}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductList;
