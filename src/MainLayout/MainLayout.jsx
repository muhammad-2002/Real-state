import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sell from "../pages/Sell/Sell";
const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Sell></Sell>
    </div>
  );
};

export default MainLayout;
