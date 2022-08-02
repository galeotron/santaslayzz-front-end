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
import axios from 'axios';
import { useForm } from "react-hook-form";
import { AboutBg } from "../AboutBg/AboutElements";
import BgPic from "../../images/stock-background.jpg";
import frontPic from "../../images/front-sweats.webp";
import backPic from "../../images/back-sweats.webp";
// import backPic from "../../images/back-hoodie.webp";
// import ImageSlider from "./ImageSlider";
// import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export let cart = {
  "Items": [
    {
      "Name": "SmallHoodie",
      "Quantity": 0
    },
    {
      "Name": "MediumHoodie",
      "Quantity": 0
    },  
    {
      "Name": "LargeHoodie",
      "Quantity": 0
    },
    {
      "Name": "XLargeHoodie",
      "Quantity": 0
    },
    {
      "Name": "SmallShirt",
      "Quantity": 0
    },
    {
      "Name": "MediumShirt",
      "Quantity": 0
    },  
    {
      "Name": "LargeShirt",
      "Quantity": 0
    },
    {
      "Name": "XLargeShirt",
      "Quantity": 0
    },
    {
      "Name": "SmallSweats",
      "Quantity": 0
    },
    {
      "Name": "MediumSweats",
      "Quantity": 0
    },  
    {
      "Name": "LargeSweats",
      "Quantity": 0
    },
    {
      "Name": "XLargeSweats",
      "Quantity": 0
    },
    {
      "Name": "Mousepad",
      "Quantity": 0
    },
    {
      "Name": "TournamentTicket",
      "TournamentName": "WarzoneDuos",
      "Quantity": 0,
      "TeamName": "",
      "PlayerName1": "",
      "OfficialName1": "",
      "PlayerName2": "",
      "OfficialName2": "",
      "PlayerName3": "",
      "OfficialName3": "",
      "PlayerName4": "",
      "OfficialName4": "",
      "DiscordName": ""
    }
    
]}

const Sweats = ({
  nextSlide,
  prevSlide,
  currentSlide,
  makeLarge,
  isLargePic
}) => {
  const picProps = {
    src: currentSlide === 0 ? frontPic : backPic,
  };

  const { register, watch, handleSubmit, setValue } = useForm({
    defaultValues: {
      sweatsQuantity: 1,
      size: "sm"
    },
  });
  const onSubmit = async (data) => {
    const cart = editCart();
    const response = await axios.post(
      "http://localhost:5000/store/create-checkout-session",
      cart
      // { headers: { "Content-Type": "text/plain" } }
    );

    console.log(response);
    window.location.href = response.data.url;
    console.log(data);
  };

  const sweatsQuantity = watch("sweatsQuantity");
  const increaseQuantity = () => setValue("sweatsQuantity", sweatsQuantity + 1);
  const decreaseQuantity = () => {
    if (sweatsQuantity > 1) {
      setValue("sweatsQuantity", sweatsQuantity - 1);
    }
  };

  const size = watch("size");


  const editOnlyCart = () => {
    let localCart = localStorage.getItem("localCart");
    if (!localCart) {
       localCart = cart;
    }
    else {
      cart = JSON.parse(localStorage.getItem('localCart'));
    }

    switch (size) {
      case "sm":
        cart.Items[8].Quantity = cart.Items[8].Quantity + sweatsQuantity;
        break;
      case "md":
        cart.Items[9].Quantity = cart.Items[9].Quantity + sweatsQuantity;
        break;
      case "lg":
        cart.Items[10].Quantity = cart.Items[10].Quantity + sweatsQuantity;
        break;
      case "xl":
        cart.Items[11].Quantity = cart.Items[11].Quantity + sweatsQuantity;
        break;
      default:
    }

    localCart = {...cart};

    localStorage.setItem("localCart", JSON.stringify(localCart));
    window.location.reload();
    return localCart;

  };

  const editCart = () => {
    let localCart = localStorage.getItem("localCart");
    if (!localCart) {
       localCart = cart;
    }
    else {
      cart = JSON.parse(localStorage.getItem('localCart'));
    }


    switch (size) {
      case "sm":
        cart.Items[8].Quantity = cart.Items[8].Quantity + sweatsQuantity;
        break;
      case "md":
        cart.Items[9].Quantity = cart.Items[9].Quantity + sweatsQuantity;
        break;
      case "lg":
        cart.Items[10].Quantity = cart.Items[10].Quantity + sweatsQuantity;
        break;
      case "xl":
        cart.Items[11].Quantity = cart.Items[11].Quantity + sweatsQuantity;
        break;
      default:
    }
    
    localCart = {...cart};
    
    
    localStorage.setItem("localCart", JSON.stringify(localCart));
    return localCart;
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
                value={size}>
                <option value="sm">SM</option>
                <option value="md">MD</option>
                <option value="lg">LG</option>
                <option value="xl">XL</option>
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
                    {sweatsQuantity}
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
              <Btn onClick={editOnlyCart}>Add to Cart</Btn>
            </DescriptionButtonsWrapper>
            <DescriptionButtonsWrapper>
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

export default Sweats;
