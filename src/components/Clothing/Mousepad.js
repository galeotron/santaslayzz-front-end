import React from "react";
import {
  ArrowContainer,
  ArrowWrapper,
  Btn,
  ClothingContainer,
  ClothingImg,
  ClothingImgWrapper,
  ClothingWrapper,
  CounterButtons,
  CounterContainer,
  CounterInput,
  CounterWrapper,
  DescriptionButtonsContainer,
  DescriptionButtonsWrapper,
  DescriptionText,
  LargePicBg,
  Price,
  SizeSelector,
  Title,
} from "./HoodieElements";

import { AboutBg } from "../AboutBg/AboutElements";
import BgPic from "../../images/stock-background.jpg";
import frontPic from "../../images/front-mousepad.webp";
import backPic from "../../images/back-mousepad.webp";
// import backPic from "../../images/back-hoodie.webp";
// import ImageSlider from "./ImageSlider";
// import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Mousepad = ({
  nextSlide,
  prevSlide,
  currentSlide,
  makeLarge,
  isLargePic,
  quantity,
  increaseQuantity,
  decreaseQuantity
}) => {
  const picProps = {
    src: currentSlide === 0 ? frontPic : backPic,
  };

  return (
    <>
      <AboutBg style={{ backgroundImage: `url(${BgPic})` }}></AboutBg>
      <LargePicBg isLargePic={isLargePic}></LargePicBg>
      <ClothingContainer isLargePic={isLargePic}>
        <ClothingWrapper>
          <ClothingImgWrapper isLargePic={isLargePic}>
            
            <ArrowContainer>
              <ArrowWrapper>
                <FaArrowAltCircleLeft onClick={prevSlide} />
              </ArrowWrapper>
              <ArrowWrapper>
                <FaArrowAltCircleRight onClick={nextSlide} />
              </ArrowWrapper>
            </ArrowContainer>

            <ClothingImg {...picProps}  onClick={makeLarge}></ClothingImg>
          </ClothingImgWrapper>
        </ClothingWrapper>
        <ClothingWrapper>
          <DescriptionButtonsContainer>
            <DescriptionButtonsWrapper>
              <Title>POKIMANE MOUSEPAD</Title>
            </DescriptionButtonsWrapper>
            <DescriptionButtonsWrapper>
              <Price>$19.99</Price>
            </DescriptionButtonsWrapper>
            <DescriptionButtonsWrapper>
              <SizeSelector name="hoodieSize" id="hoodieSize">
                <option value="small">SM</option>
                <option value="medium">MD</option>
                <option value="large">LG</option>
                <option value="extraLarge">XL</option>
              </SizeSelector>
            </DescriptionButtonsWrapper>
            <DescriptionButtonsWrapper>
              <CounterContainer>
                <CounterWrapper>
                  <CounterButtons onClick={decreaseQuantity}>
                    -
                  </CounterButtons>
                </CounterWrapper>
                <CounterWrapper>
                  <CounterInput>
                    {quantity}
                  </CounterInput>
                </CounterWrapper>
                <CounterWrapper>
                  <CounterButtons onClick={increaseQuantity}>
                    +
                  </CounterButtons>
                </CounterWrapper>
              </CounterContainer>
            </DescriptionButtonsWrapper>
            <DescriptionButtonsWrapper>
              <Btn>Add to Cart</Btn>
            </DescriptionButtonsWrapper>
            <DescriptionButtonsWrapper>
              <Btn>Buy now</Btn>
            </DescriptionButtonsWrapper>
            <DescriptionButtonsWrapper>
              <DescriptionText>
                Cotton fleece crew sweater with custom color block panels,
                screen print detail, and finished with a woven label. Classic
                crew sweater fit on a 100% premium, soft-to-touch cotton body.
              </DescriptionText>
            </DescriptionButtonsWrapper>
          </DescriptionButtonsContainer>
        </ClothingWrapper>
      </ClothingContainer>
    </>
  );
};

export default Mousepad;
