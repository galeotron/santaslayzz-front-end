import React, { useState } from "react";
import Footer from "../components/Footer";
import Sidebar from "../Sidebar";
import Navbar from "../components/Navbar";
import HomePage from "../components/HomePage";
import SidebarCart from "../SidebarCart";

const HomePages = () => {
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
      <HomePage></HomePage>
      <Footer />
    </div>
  );
};

export default HomePages;
