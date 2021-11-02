import React, { useState } from "react";
import Sidebar from "../../Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SignUp from "../../components/SignUp";
import SidebarCart from "../../SidebarCart";

const SignUpPage = () => {
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
      <SignUp></SignUp>
      <Footer />
    </div>
  );
};

export default SignUpPage;
