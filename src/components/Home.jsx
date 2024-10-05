import React from "react";
import ProductSection from "./Product/ProductSection";
import Hero from "./Hero";
import WhyUs from "./WhyUs";
import Faq from "./Faq";

const Home = () => {
  return (
    <div style={{display:"flex", flexDirection:"column", gap:"5rem"}}>
      <Hero />
      <WhyUs />
      <ProductSection />
      <Faq/>
    </div>
  );
};

export default Home;
