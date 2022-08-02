import React, { useEffect, useState } from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  // SidebarMenu,
  SidebarWrapper,
  SideBtnWrap,
  // SidebarRoute,
  SidebarLine,
  Title,
  CartContainer,
  CartItemWrapper,
  CartPicWrapper,
  CartTextContainer,
  CartTextWrapper,
  DescriptionText,
  CounterRemoveContainer,
  RemoveLinkWrap,
  RemoveLinkTxt,
  CartPic,
  CheckoutBtnLink,
} from "./SidebarCartElements";

import axios from "axios";
import { useForm } from "react-hook-form";
import hoodiePic from "../images/front-hoodie.webp";
import sweatsPic from "../images/front-sweats.webp";
import shirtPic from "../images/front-shirt.webp";
import mousepadPic from "../images/mousepad-front.jpg";

const SidebarCart = ({ isCartOpen, toggleCart }) => {
  const [localCart, setLocalCart] = useState([]);

  useEffect(() => {
    setLocalCart(JSON.parse(localStorage.getItem("localCart")));
  }, []);

  // const itemNameComponent = localCart.Items.map((item) => <DescriptionText key={item.Name}>{item.Name}</DescriptionText>)

  const { handleSubmit } = useForm({});

  const onSubmit = async (data) => {
    const response = await axios.post(
      "http://localhost:5000/store/create-checkout-session",
      localCart
      // { headers: { "Content-Type": "text/plain" } }
    );

    // console.log(response);
    // window.location.href = response2.data.url;
    window.location.href = response.data.url;

    // console.log(data);
  };

  function removeQuantity(itemToRemove) {

    const tempItems = localCart.Items.map((item) => {

      if (item.Name === itemToRemove) {
        item.Quantity = 0;
      } 
      return item;
    });
    const tempLocalCart = {Items: tempItems}
    localStorage.setItem("localCart", JSON.stringify(tempLocalCart));
    setLocalCart(tempLocalCart);

  }

  var itemNameComponent;

  function sizeCheck(item) {
    if (item.Quantity > 0) {
      if (item.Name.startsWith("Small")) {
        return <DescriptionText key={item.Name}>Size: sm</DescriptionText>;
      } else if (item.Name.startsWith("Medium")) {
        return <DescriptionText key={item.Name}>Size: md</DescriptionText>;
      } else if (item.Name.startsWith("Large")) {
        return <DescriptionText key={item.Name}>Size: lg</DescriptionText>;
      } else if (item.Name.startsWith("X")) {
        return <DescriptionText key={item.Name}>Size: xl</DescriptionText>;
      }
    }
  }

  function typeCheck(item) {
    if (item.Quantity > 0) {
      if (item.Name.endsWith("Hoodie")) {
        return (
          <DescriptionText key={item.Name}>Price: $29.99 ea</DescriptionText>
        );
      } else if (item.Name.endsWith("Shirt")) {
        return (
          <DescriptionText key={item.Name}>Price: $15.99 ea</DescriptionText>
        );
      } else if (item.Name.endsWith("Sweats")) {
        return (
          <DescriptionText key={item.Name}>Price: $19.99 ea</DescriptionText>
        );
      } else if (item.Name.startsWith("Mouse")) {
        return (
          <DescriptionText key={item.Name}>Price: $19.99 ea</DescriptionText>
        );
      } else if (item.Name.startsWith("Tournament")) {
        return (
          <DescriptionText key={item.Name}>Price: $10.00 ea</DescriptionText>
        );
      }
    }
  }

  function picCheck(item) {
    if (item.Quantity > 0) {
      if (item.Name.endsWith("Hoodie")) {
        return <CartPic src={hoodiePic} key={item.Name}></CartPic>;
      } else if (item.Name.endsWith("Shirt")) {
        return <CartPic src={shirtPic} key={item.Name}></CartPic>;
      } else if (item.Name.endsWith("Sweats")) {
        return <CartPic src={sweatsPic} key={item.Name}></CartPic>;
      } else if (item.Name.startsWith("Mouse")) {
        return <CartPic src={mousepadPic} key={item.Name}></CartPic>;
      } else if (item.Name.startsWith("Tournament")) {
        return <CartPic></CartPic>;
      }
    }
  }

  function nameCheck(item) {
    if (item.Quantity > 0) {
      if (item.Name.endsWith("Hoodie")) {
        return <DescriptionText key={item.Name}>Hoodie</DescriptionText>;
      } else if (item.Name.endsWith("Shirt")) {
        return <DescriptionText key={item.Name}>Shirt</DescriptionText>;
      } else if (item.Name.endsWith("Sweats")) {
        return <DescriptionText key={item.Name}>Sweats</DescriptionText>;
      } else if (item.Name.startsWith("Mouse")) {
        return <DescriptionText key={item.Name}>Mousepad</DescriptionText>;
      } else if (item.Name.startsWith("Tournament")) {
        return (
          <DescriptionText key={item.Name}>Tournament Ticket</DescriptionText>
        );
      }
    }
  }

  function quantityCheck(item) {
    if (item.Quantity > 0) {
      return (
        <CounterRemoveContainer key={item.Name}>
          <DescriptionText key={item.Name}>
            Qty: {item.Quantity}&nbsp;&nbsp;{" "}
          </DescriptionText>
          <RemoveLinkWrap>
            <RemoveLinkTxt
              key={item.Name}
              onClick={() => {
                removeQuantity(item.Name);
              }}
            >
              Remove
            </RemoveLinkTxt>
          </RemoveLinkWrap>
        </CounterRemoveContainer>
      );
    }
  }

  if (localCart) {
    if (localCart.length === 0) {
      itemNameComponent = "loading";
    } else {
      itemNameComponent = localCart.Items.map((item) => (
        <CartItemWrapper key={item.Name}>
          <CartPicWrapper>{picCheck(item)}</CartPicWrapper>
          <CartTextContainer>
            <CartTextWrapper>{nameCheck(item)}</CartTextWrapper>
            <CartTextWrapper>
              {/* <DescriptionText key = {item.Name}></DescriptionText> */}
              {sizeCheck(item)}
            </CartTextWrapper>

            <CartTextWrapper>{typeCheck(item)}</CartTextWrapper>
            <CartTextWrapper>{quantityCheck(item)}</CartTextWrapper>
          </CartTextContainer>
        </CartItemWrapper>
      ));
    }
  }

  return (
    <SidebarContainer isCartOpen={isCartOpen}>
      <Icon onClick={toggleCart}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SideBtnWrap>
          <Title>Cart</Title>
        </SideBtnWrap>
        <SidebarLine></SidebarLine>
        <CartContainer>
          {itemNameComponent}
          <CartItemWrapper>
            <CheckoutBtnLink onClick={handleSubmit(onSubmit)}>
              Checkout
            </CheckoutBtnLink>
          </CartItemWrapper>
        </CartContainer>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SidebarCart;
