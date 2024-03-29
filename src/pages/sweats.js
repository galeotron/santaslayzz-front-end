import React, { useState } from "react";
import Footer from "../components/Footer";
import Sweats from "../components/Clothing/Sweats";
import { Length } from "../components/Clothing/SliderData";
import SidebarCart from "../SidebarCart";
import NavbarStore from "../components/NavbarStore";

const SweatsPage = () => {
  const [isLargePic, setLargePic] = useState(false);

  const makeLarge = () => {
    setLargePic(!isLargePic);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === Length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? Length - 1 : currentSlide - 1);
  };

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <SidebarCart isCartOpen={isCartOpen} toggleCart={toggleCart} />
      {/* <Sidebar
        isCartOpen={isCartOpen}
        toggleCart={toggleCart}
        isOpen={isOpen}
        toggle={toggle}
      /> */}
      <NavbarStore toggle={toggle} toggleCart={toggleCart} />
      <Sweats
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        currentSlide={currentSlide}
        makeLarge={makeLarge}
        isLargePic={isLargePic}
        // increaseQuantity={increaseQuantity}
        // decreaseQuantity={decreaseQuantity}
        // quantity={quantity}
      ></Sweats>
      <Footer />
    </div>
  );
};

export default SweatsPage;
