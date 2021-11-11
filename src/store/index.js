import React from "react";
import frontShirt from "../images/front-shirt.webp";
import frontSweats from "../images/front-sweats.webp";
import frontHoodie from "../images/front-hoodie.webp";
import BgPic from "../images/stock-background.jpg";
import mousepadFront from "../images/mousepad-front.jpg";
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
    </>
  );
};

export default Store;
