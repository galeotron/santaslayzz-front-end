import React from "react";
import axios from "axios";
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

import { useForm } from "react-hook-form";
import { AboutBg } from "../AboutBg/AboutElements";
import BgPic from "../../images/stock-background.jpg";
import frontPic from "../../images/front-hoodie.webp";
import backPic from "../../images/back-hoodie.webp";
// import backPic from "../../images/back-hoodie.webp";
// import ImageSlider from "./ImageSlider";
// import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Hoodie = ({
  nextSlide,
  prevSlide,
  currentSlide,
  makeLarge,
  isLargePic,
  // quantity,
  // increaseQuantity,
  // decreaseQuantity,
}) => {
  const picProps = {
    src: currentSlide === 0 ? frontPic : backPic,
  };

  const { register, watch, handleSubmit, setValue } = useForm({
    defaultValues: {
      hoodieQuantity: 1,
    },
  });
  const onSubmit = async (data) => {
    const cart = editCart()
    const response = await axios.post("http://localhost:5000/store/create-checkout-session", cart, {headers: {"Content-Type": "text/plain"}})
    console.log(response)
    window.location.href = response.data.url
    console.log(data);
  };

  const hoodieQuantity = watch("hoodieQuantity");
  const increaseQuantity = () =>
    setValue("hoodieQuantity", hoodieQuantity + 1);
  const decreaseQuantity = () => {
    if (hoodieQuantity > 1) {
      setValue("hoodieQuantity", hoodieQuantity - 1);
    }
  };





  console.log(hoodieQuantity);
  const editCart = () => {
    let cart = localStorage.getItem("cart") 
    if (
      !cart
    ) {
      cart = {}
    } else {
      cart = JSON.parse(cart)
    }
    cart = {...cart, hoodieQuantity: (cart.hoodieQuantity ? cart.hoodieQuantity: 0) + hoodieQuantity}
    localStorage.setItem("cart", JSON.stringify(cart))
    return (cart)
  };

  // const wrapperFunction = () => {
  //   handleSubmit();
  //   editCart("Hoodie", hoodieQuantity);

  // }



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

            <ClothingImg {...picProps} onClick={makeLarge}></ClothingImg>
          </ClothingImgWrapper>
        </ClothingWrapper>
        <ClothingWrapper>
          <DescriptionButtonsContainer>
            <DescriptionButtonsWrapper>
              <Title>POKIMANE COZY COLOR BLOCK SWEATER</Title>
            </DescriptionButtonsWrapper>
            <DescriptionButtonsWrapper>
              <Price>$29.99</Price>
            </DescriptionButtonsWrapper>
            <DescriptionButtonsWrapper>
              <SizeSelector
                {...register("size")}
                placeholder="Size"
                id="size"
                type="text"
              >
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
                  <CounterInput
                    // quantity={quantity}
                    {...register("hoodieQuantity")}
                    placeholder="HoodieQuantity"
                    id="hoodieQuantity"
                    type="number"
                  >
                    {hoodieQuantity}
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
              {/* <Btn onClick={handleSubmit(onSubmit)}>Add to Cart</Btn> */}
              <Btn onClick={editCart} /*[handleSubmit(onSubmit), editCart("Hoodie", hoodieQuantity)]*/>Add to Cart</Btn>
            </DescriptionButtonsWrapper>
            <DescriptionButtonsWrapper>
              {/* <Btn onClick={handleSubmit(onSubmit)}>Buy now</Btn> */}
              <Btn onClick={handleSubmit(onSubmit)}>Buy now</Btn>
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

export default Hoodie;
