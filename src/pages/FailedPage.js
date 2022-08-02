import React, { useState } from "react";
import Failed from "../components/Failed";
import SidebarCart from "../SidebarCart";
import Sidebar from "../Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FailedPage = () => {
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
      <Failed></Failed>
      <Footer />
    </div>
  );
};

export default FailedPage;