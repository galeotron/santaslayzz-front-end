import React, { useState } from "react";
import Sidebar from "../../Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ReportScores from "../../components/ReportScores";
import SidebarCart from "../../SidebarCart";

const ReportScoresPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <SidebarCart isCartOpen={isCartOpen} toggleCart={toggleCart} />
      <Sidebar
        isCartOpen={isCartOpen}
        toggleCart={toggleCart}
        isOpen={isOpen}
        toggle={toggle}
      />
      <Navbar toggle={toggle} />
      <ReportScores></ReportScores>
      <Footer />
    </>
  );
};

export default ReportScoresPage;
