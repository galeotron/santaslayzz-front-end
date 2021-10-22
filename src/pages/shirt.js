import React, { useState } from "react";
import Footer from "../components/Footer";
import Sidebar from "../Sidebar";
import Navbar from "../components/Navbar";
import Shirt from "../components/Clothing";
import { Length } from "../components/Clothing/SliderData";

const ShirtPage = () => {
  const [isLargePic, setLargePic] = useState(false);

  const makeLarge = () => {
    setLargePic(!isLargePic);
  };

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
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

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Shirt
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        currentSlide={currentSlide}
        makeLarge={makeLarge}
        isLargePic={isLargePic}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        quantity={quantity}
      ></Shirt>
      <Footer />
    </div>
  );
};

export default ShirtPage;
