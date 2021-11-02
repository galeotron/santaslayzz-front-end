import React, { useState } from "react";
import Footer from "../components/Footer";
import Sidebar from "../Sidebar";
import Navbar from "../components/Navbar";
import Tournaments from "../components/Tournaments";
import SidebarCart from "../SidebarCart";

const TournamentPage = () => {
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
      <Tournaments></Tournaments>
      <Footer />
    </div>
  );
};

export default TournamentPage;
