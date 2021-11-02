import styled from "styled-components";
// import { Link as LinkR } from "react-router-dom";

export const ClothingContainer = styled.div`
  margin-top: 30px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 80px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    flex-direction: ${({ isLargePic }) => (isLargePic ? "row" : "column")};
    align-items: ${({ isLargePic }) => (isLargePic ? "stretch" : "center")};
  }
`;

export const ClothingWrapper = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  max-width: 100%;

  @media screen and (max-width: 900px) {
    position: ${({ isLargePic }) => (isLargePic ? "relative" : "static")};
  }
`;

export const ClothingImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  display: flex;
  align-items: center;
  transition: 200ms;

  position: ${({ isLargePic }) => (isLargePic ? "absolute" : "relative")};
  z-index: ${({ isLargePic }) => (isLargePic ? "3" : "auto")};

  @media screen and (max-width: 900px) {
    height: ${({ isLargePic }) => (isLargePic ? "100vh" : "auto")};
    width: ${({ isLargePic }) => (isLargePic ? "100vw" : "auto")};
    top: ${({ isLargePic }) => (isLargePic ? "80px" : "auto")};
    left: ${({ isLargePic }) => (isLargePic ? "0px" : "auto")};
  }
`;

export const LargePicBg = styled.div`
  background: grey;
  opacity: ${({ isLargePic }) => (isLargePic ? "0.9" : "0")};
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: ${({ isLargePic }) => (isLargePic ? "2" : "-1")};
`;

export const ClothingImg = styled.img`
  max-width: 750px;
  max-height: 750px;
  width: 100%;
  height: auto;

  @media screen and (max-width: 900px) {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const DescriptionButtonsContainer = styled.div`
  width: 450px;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

export const DescriptionButtonsWrapper = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const Title = styled.h1`
  font-size: 22px;
  color: white;
`;

export const Price = styled.h2`
  font-size: 18px;
  color: white;
`;

export const SizeSelector = styled.select`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
`;

export const Btn = styled.div`
  cursor: pointer;
  display: inline-block;
  border: #fe212d 0.125em solid;
  padding: 0.25em 1em;
  border-radius: 0.25em;
  width: 100%;
  display: flex;
  justify-content: center;

  text-shadow: 0 0 0.1em hsl(0 0% 100% / 0.5), 0 0 0.5em currentColor;

  box-shadow: inset 0 0 0.5em 0 #fe212d, 0 0 0.5em 0 #fe212d;

  white-space: nowrap;
  /* padding: 10px 22px; */
  color: white;
  font-size: 20px;
  outline: none;
  /* border: none; */
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-top: 18px;

  &:hover {
    background: #fe212d;
    color: black;
    text-shadow: none;
    box-shadow: inset 0 0 0.5em 0.1em #fe212d, 0 0 2em 0.22em #fe212d;
    opacity: 1;
    /* transition: 500ms; */
    transition: color 2000ms;
    transition: background 350ms;
  }
`;

export const DescriptionText = styled.p`
  font-size: 15px;
  color: white;
  line-height: 25px;
`;

export const ArrowContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 98%;
`;

export const ArrowWrapper = styled.div`
  font-size: 2em;
  cursor: pointer;
  transition: 100ms ease-in-out;

  &:hover {
    color: #fe212d;
    transition: 100ms ease-in-out;
  }
`;

export const CounterContainer = styled.div`
  display: flex;
  width: 140px;
  height: 40px;
  background: #e6e6ea;;
`;

export const CounterWrapper = styled.div`
  width: 46px;
  height: 40px;
`;

export const CounterButtons = styled.p`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: default;
  }
`;

export const CounterInput = styled.span`

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
