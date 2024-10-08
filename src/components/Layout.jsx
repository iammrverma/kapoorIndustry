import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Footer from "./Navbar/Footer";
import Faq from "./Faq";

const Layout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
      <Navbar />
      <Outlet />
      <Faq />
      <Footer />
    </div>
  );
};

export default Layout;
