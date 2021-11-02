import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarWrapper,
  SideBtnWrap,
  SidebarRoute,
  SidebarLine,
  SidebarFooterWrapper,
  SidebarFooterIcon,
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
  CounterWrapper,
  CounterButtons,
  CounterContainer,
  CounterInput,
  CartPic,
  CheckoutBtnLink
} from "./SidebarCartElements";
import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaTwitch,
  FaDiscord,
} from "react-icons/fa";



const SidebarCart = ({ isCartOpen, toggleCart }) => {



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
          <CartItemWrapper>
            <CartPicWrapper>
                <CartPic></CartPic>
            </CartPicWrapper>
            <CartTextContainer>
                <CartTextWrapper>
                    <DescriptionText>Name of product</DescriptionText>
                </CartTextWrapper>
                    <DescriptionText>size</DescriptionText>
                <CartTextWrapper>
                    <DescriptionText>price</DescriptionText>
                </CartTextWrapper>
                <CartTextWrapper>
                    <CounterRemoveContainer>
                        <CounterContainer>
                            <CounterWrapper>
                                <CounterButtons /*onClick={decreaseQuantity}*/>-</CounterButtons>
                            </CounterWrapper>
                            <CounterWrapper>
                                <CounterInput>
                                {/* {quantity} */}
                                </CounterInput>
                            </CounterWrapper>
                            <CounterWrapper>
                            <CounterButtons /*onClick={increaseQuantity}*/>+</CounterButtons>
                            </CounterWrapper>
                        </CounterContainer>
                        <RemoveLinkWrap>
                            <RemoveLinkTxt>Remove</RemoveLinkTxt>
                        </RemoveLinkWrap>
                    </CounterRemoveContainer>
                </CartTextWrapper>
            </CartTextContainer>
          </CartItemWrapper>
          <CartItemWrapper>
              <CheckoutBtnLink to="/checkout">Checkout add quantity here</CheckoutBtnLink>
          </CartItemWrapper>
        </CartContainer>
        
        <SidebarFooterWrapper>
          <SidebarFooterIcon
            href="//www.twitter.com/SantaSlayzz"
            target="_blank"
            aria-label="Twitter"
          >
            <FaTwitter />
          </SidebarFooterIcon>
          <SidebarFooterIcon
            href="//www.youtube.com/channel/UCA0PgwN-39IuyxBua2kUkNw"
            target="_blank"
            aria-label="Youtube"
          >
            <FaYoutube />
          </SidebarFooterIcon>
          <SidebarFooterIcon
            href="//www.twitch.tv/santaslayzz"
            target="_blank"
            aria-label="Twitch"
          >
            <FaTwitch />
          </SidebarFooterIcon>
          <SidebarFooterIcon
            href="//www.instagram.com/santaslayzz/"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram />
          </SidebarFooterIcon>
          <SidebarFooterIcon
            href="//discord.gg/kgAsbXWF"
            target="_blank"
            aria-label="Discord"
          >
            <FaDiscord />
          </SidebarFooterIcon>
        </SidebarFooterWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SidebarCart;
