import React, { useState } from "react";
import SuccessTourney from "../components/SuccessTourney";
import SidebarCart from "../SidebarCart";
import Sidebar from "../Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SuccessTourneyPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <SidebarCart isCartOpen={isCartOpen} toggleCart={toggleCart} />
      <Sidebar
        isCartOpen={isCartOpen}
        toggleCart={toggleCart}
        isOpen={isOpen}
        toggle={toggle}
      />
      <Navbar toggle={toggle} />
      <SuccessTourney></SuccessTourney>
      <Footer />
    </div>
  );
};

export default SuccessTourneyPage;
