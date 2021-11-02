import React, { useState } from "react";
import Store from "../store";
import Sidebar from "../Sidebar";
import Footer from "../components/Footer";
import NavbarStore from "../components/NavbarStore";
import SidebarCart from "../SidebarCart";

const StorePage = () => {
  const [displayType, setDisplayType] = useState("none");

  const setStyle = (displayType) => {
    setDisplayType(displayType);
  };

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
      <NavbarStore toggle={toggle} toggleCart={toggleCart} />
      <Store setStyle={setStyle} displayType={displayType}></Store>
      <Footer />
    </div>
  );
};

export default StorePage;
