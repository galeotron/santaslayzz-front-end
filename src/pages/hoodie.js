import React, { useState } from "react";
import Footer from "../components/Footer";
// import Sidebar from "../Sidebar";
// import Navbar from "../components/Navbar";
import Hoodie from "../components/Clothing/Hoodie";
import { Length } from "../components/Clothing/SliderData";
import SidebarCart from "../SidebarCart";
import NavbarStore from "../components/NavbarStore";

const HoodiePage = () => {
  const [isLargePic, setLargePic] = useState(false);

  const makeLarge = () => {
    setLargePic(!isLargePic);
  };

  // const [quantity, setQuantity] = useState(1);

  // const increaseQuantity = () => {
  //   setQuantity(prevQuantity => prevQuantity + 1);
  // };

  // const decreaseQuantity = () => {
  //   if (quantity > 1) {
  //     setQuantity(prevQuantity => prevQuantity - 1);
  //   }
  // };

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

  // const cartArray = [
  //   {
  //     name: "Hoodie",
  //     quantity: "0"
  //   },
  //   {
  //     name: "Sweats",
  //     quantity: "0"
  //   },
  //   {
  //     name: "Shirt",
  //     quantity: "0"
  //   },
  //   {
  //     name: "Mousepad",
  //     quantity: "0"
  //   },
  // ]

  // const [currentCart, setCurrentCart] = useState(cartArray);

  // const editCart = () => {
  //   setCurrentCart(cartArray.map((cartItem) =>
  //     cartItem.name === "Hoodie" ? { ...cartItem, quantity: {hoodieQuantity} } : { ...cartItem })
  //     // (cartItem.name === "Sweats" ? { ...cartItem, quantity: {sweatsQuantity} } : { ...cartItem })
  //     // (cartItem.name === "Shirt" ? { ...cartItem, quantity: {shirtQuantity} } : { ...cartItem })
  //     // (cartItem.name === "Mousepad" ? { ...cartItem, quantity: {mousepadQuantity} } : { ...cartItem })
      
    
  //   );
  //   console.log(cartArray);
  // };

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
      <Hoodie
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        currentSlide={currentSlide}
        makeLarge={makeLarge}
        isLargePic={isLargePic}
        // increaseQuantity={increaseQuantity}
        // decreaseQuantity={decreaseQuantity}
        // quantity={quantity}
      ></Hoodie>
      <Footer />
    </div>
  );
};

export default HoodiePage;
