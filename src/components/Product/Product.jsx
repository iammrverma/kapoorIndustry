import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { product } = useParams();
  return <div>Product: {product}</div>;
};

export default Product;
