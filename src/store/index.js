import React, { useState, useEffect } from "react";
import frontShirt from "../images/front-shirt.webp";
import backShirt from "../images/back-shirt.webp";
import frontSweats from "../images/front-sweats.webp";
import backSweats from "../images/back-sweats.webp";
import frontHoodie from "../images/front-hoodie.webp";
import backHoodie from "../images/back-hoodie.webp";
import BgPic from "../images/stock-background.jpg";
import mousepadFront from "../images/mousepad-front.jpg";
import mousepadZoom from "../images/mousepad-zoom.jpg";
import uuid from "react-uuid";
import { AboutBg } from "../components/AboutBg/AboutElements";
import {
  ImgLink,
  ImgWrapper,
  ItemsContainer,
  ItemWrapper,
  MerchImg,
  MerchText,
  StoreContainer,
  TextWrapper,
  StoreWrapper,
  Title,
  ShirtPriceText,
  HoodiePriceText,
  MousepadPriceText,
  SweatsPriceText,
} from "./StoreElements";

const Store = ({ displayType, setStyle }) => {
  // const [displayType, setDisplayType] = useState("none");

  // const setStyle = (displayType) => {
  //   console.log(displayType);
  //   setDisplayType(displayType);
  // };

  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const items = [
    {
      id: uuid(),
      name: "shirt",
      price: 20,
      frontPic: { frontShirt },
      backPic: { backShirt },
    },
    {
      id: uuid(),
      name: "sweats",
      price: 10,
      frontPic: { frontSweats },
      backPic: { backSweats },
    },
    {
      id: uuid(),
      name: "hoodie",
      price: 30,
      frontPic: { frontHoodie },
      backPic: { backHoodie },
    },
    {
      id: uuid(),
      name: "mouspad",
      price: 15,
      frontPic: { mousepadFront },
      backPic: { mousepadZoom },
    },
  ];

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setCartTotal(totalVal);
  };

  const addToCart = (el) => {
    setCart([...cart, el]);
  };

  const removeFromCart = (el) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    setCart(hardCopy);
  };

  const listItems = items.map((el) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <img src={el.frontPic} alt="front pic"></img>
      <input type="submit" value="add" onClick={() => addToCart(el)} />
    </div>
  ));

  const cartItems = cart.map((el) => (
    <div key={el.id}>
      {`${el.name}: $${el.price}`}
      <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
    </div>
  ));

  return (
    <>
      <AboutBg style={{ backgroundImage: `url(${BgPic})` }}></AboutBg>
      <StoreContainer>
        <StoreWrapper>
          <Title>Store</Title>
          <ItemsContainer>
            <ItemWrapper
              onMouseEnter={() => setStyle("hoodie")}
              onMouseLeave={() => setStyle("none")}
            >
              <ImgWrapper>
                <ImgLink to="/store/hoodie">
                  <MerchImg src={frontHoodie}></MerchImg>
                </ImgLink>
              </ImgWrapper>
              <TextWrapper>
                <MerchText>Hoodie text</MerchText>
                <HoodiePriceText displayType={displayType}>
                  $29.99
                </HoodiePriceText>
              </TextWrapper>
            </ItemWrapper>
            <ItemWrapper
              onMouseEnter={() => setStyle("sweats")}
              onMouseLeave={() => setStyle("none")}
            >
              <ImgWrapper>
                <ImgLink to="/store/sweats">
                  <MerchImg src={frontSweats}></MerchImg>
                </ImgLink>
              </ImgWrapper>
              <TextWrapper>
                <MerchText>Sweats text</MerchText>
                <SweatsPriceText displayType={displayType}>
                  $19.99
                </SweatsPriceText>
              </TextWrapper>
            </ItemWrapper>
            <ItemWrapper
              onMouseEnter={() => setStyle("shirt")}
              onMouseLeave={() => setStyle("none")}
            >
              <ImgWrapper>
                <ImgLink to="/store/shirt">
                  <MerchImg src={frontShirt}></MerchImg>
                </ImgLink>
              </ImgWrapper>
              <TextWrapper>
                <MerchText>Shirt text</MerchText>
                <ShirtPriceText displayType={displayType}>$15.99</ShirtPriceText>
              </TextWrapper>
            </ItemWrapper>
            <ItemWrapper
              onMouseEnter={() => setStyle("mousepad")}
              onMouseLeave={() => setStyle("none")}
            >
              <ImgWrapper>
                <ImgLink to="/store/mousepad">
                  <MerchImg src={mousepadFront}></MerchImg>
                </ImgLink>
              </ImgWrapper>
              <TextWrapper>
                <MerchText>mouspad text</MerchText>
                <MousepadPriceText displayType={displayType}>
                  $19.99
                </MousepadPriceText>
              </TextWrapper>
            </ItemWrapper>
          </ItemsContainer>
        </StoreWrapper>
      </StoreContainer>
      <div>
        {listItems}
        {cartItems}
        Total: ${cartTotal}
        {cartItems.length}
      </div>
    </>
  );
};

export default Store;
