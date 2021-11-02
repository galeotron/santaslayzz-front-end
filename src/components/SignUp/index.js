import React from "react";
import { AboutBg } from "../AboutBg/AboutElements";
import BgPic from "../../images/stock-background.jpg";
import {
  AboutContainer,
  AboutLargeText,
  AboutSmallText,
  AboutSmallTextLink,
  AboutWrapper,
  Divider,
  GridSpecialText,
  SignupBtn,
  SignUpContainer,
  SignUpImg,
  SignupWrap,
  SignUpWrapper,
  SpecialText,
  TicketsContainer,
  TicketsWrapper,
} from "./SignUpElements";
import {
  CounterContainer,
  CounterWrapper,
  CounterButtons,
  CounterInput,
} from "../Clothing/HoodieElements";
import rules from "../../pdf/Tourney_rules.pdf";
import banner from "../../images/tourney-banner-may.jpg";
import { useForm } from "react-hook-form";

const SignUp = () => {

  const { register, watch, handleSubmit, setValue } = useForm({
    defaultValues: {
      quantity: 1
    }
  });
  const onSubmit = (data) => {
    console.log(data);
  };

  const quantity = watch("quantity");
  const increaseQuantity = () => setValue("quantity", quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setValue("quantity", quantity - 1);
    }
  };

  const total = quantity*10;

  return (
    <>
      <AboutBg style={{ backgroundImage: `url(${BgPic})` }}></AboutBg>
      <SignUpContainer>
        <SignUpWrapper>
          <SignUpImg src={banner}></SignUpImg>
        </SignUpWrapper>
        <SignUpWrapper>
          <AboutContainer>
            <AboutWrapper>
              <AboutLargeText>About</AboutLargeText>
            </AboutWrapper>
            <AboutWrapper>
              <AboutSmallText>August 69th</AboutSmallText>
            </AboutWrapper>
            <AboutWrapper>
              <AboutSmallText>8:00 PM EST</AboutSmallText>
            </AboutWrapper>
            <AboutWrapper>
              <AboutSmallText>Trios</AboutSmallText>
            </AboutWrapper>
            <AboutWrapper>
              <AboutSmallText>Prizes TBD</AboutSmallText>
            </AboutWrapper>
            <AboutWrapper>
              <AboutSmallTextLink href={rules}>Full Rules</AboutSmallTextLink>
            </AboutWrapper>
            <Divider></Divider>
            <TicketsContainer>
              <TicketsWrapper>
                <AboutLargeText>Tickets</AboutLargeText>
              </TicketsWrapper>
              <TicketsWrapper>
                <GridSpecialText>Price:</GridSpecialText>
              </TicketsWrapper>
              <TicketsWrapper>
                <GridSpecialText>Quantity:</GridSpecialText>
              </TicketsWrapper>
              <TicketsWrapper>
                <GridSpecialText>Total:</GridSpecialText>
              </TicketsWrapper>
              <TicketsWrapper>
                <SpecialText>Warzone DUOS</SpecialText>
              </TicketsWrapper>
              <TicketsWrapper>
                <GridSpecialText>$10</GridSpecialText>
              </TicketsWrapper>
              <TicketsWrapper>
                <CounterContainer>
                  <CounterWrapper>
                    <CounterButtons onClick={decreaseQuantity}>
                      -
                    </CounterButtons>
                  </CounterWrapper>
                  <CounterWrapper>
                    <CounterInput
                      {...register("quantity")}
                      placeholder="Quantity"
                      id="quantity"
                      type="number"
                    >
                      {quantity}
                    </CounterInput>
                  </CounterWrapper>
                  <CounterWrapper>
                    <CounterButtons onClick={increaseQuantity}>
                      +
                    </CounterButtons>
                  </CounterWrapper>
                </CounterContainer>
              </TicketsWrapper>
              <TicketsWrapper>
                <GridSpecialText>${total}</GridSpecialText>
              </TicketsWrapper>

              {/* <div></div>
              <div></div>
              <TicketsWrapper>
                <GridSpecialText>Total:</GridSpecialText>
              </TicketsWrapper>
              <TicketsWrapper>
                <GridSpecialText>useState thing</GridSpecialText>
              </TicketsWrapper> */}

              <SignupWrap>
                <SignupBtn onClick={handleSubmit(onSubmit)}>Checkout</SignupBtn>
              </SignupWrap>
            </TicketsContainer>
          </AboutContainer>
        </SignUpWrapper>
      </SignUpContainer>
    </>
  );
};

export default SignUp;
