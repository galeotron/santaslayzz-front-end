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
import rules from "../../pdf/Tourney_rules.pdf";
import banner from "../../images/tourney-banner-may.jpg";

const SignUp = () => {
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
                <GridSpecialText>Price</GridSpecialText>
              </TicketsWrapper>
              <TicketsWrapper>
                <GridSpecialText>Quantity</GridSpecialText>
              </TicketsWrapper>
              <TicketsWrapper>
                <GridSpecialText>Total</GridSpecialText>
              </TicketsWrapper>
              <TicketsWrapper>
                <SpecialText>Warzone DUOS</SpecialText>
              </TicketsWrapper>
              <TicketsWrapper>
                <GridSpecialText>$10</GridSpecialText>
              </TicketsWrapper>
              <TicketsWrapper>
                <GridSpecialText>Change this</GridSpecialText>
              </TicketsWrapper>
              <TicketsWrapper>
                <GridSpecialText>useState thing</GridSpecialText>
              </TicketsWrapper>

              <div></div>
              <div></div>
              <TicketsWrapper>
                <GridSpecialText>Total:</GridSpecialText>
              </TicketsWrapper>
              <TicketsWrapper>
                <GridSpecialText>useState thing</GridSpecialText>
              </TicketsWrapper>

              <SignupWrap>
                <SignupBtn>Checkout</SignupBtn>
              </SignupWrap>
            </TicketsContainer>
          </AboutContainer>
        </SignUpWrapper>
      </SignUpContainer>
    </>
  );
};

export default SignUp;
