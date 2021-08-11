import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";


export const StoreContainer = styled.div`
  /* border: 2px solid red; */
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`;

export const StoreWrapper = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h1`
  /* border: 2px solid green; */
  color: white;
`;

export const ItemsContainer = styled.div`
  /* border: 2px solid yellow; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  padding-top: 30px;
`;

export const ItemWrapper = styled.div`
  /* border: 2px solid orange; */
  position: relative;
`;

export const ImgWrapper = styled.div`
  /* border: 2px dotted red; */
  margin-bottom: 10px;
`;

export const ImgLink = styled(LinkR)``;

export const MerchImg = styled.img`
  width: 260px;
`;

export const TextWrapper = styled.div`
  /* border: 2px dotted green; */
  padding-bottom: 40px;
`;

export const MerchText = styled.h4`
  color: white;
`;

export const HoodiePriceText = styled.h4`
  color: white;
  position: absolute;
  top: 365px;
  transition: 0.8s all ease;

  display: ${({ displayType }) => {
    if (displayType === "hoodie") {
      return "block";
    } else { 
      return "none";
    }
  }};
`;

export const ShirtPriceText = styled.h4`
  color: white;
  position: absolute;
  top: 365px;
  transition: 0.8s all ease;

  display: ${({ displayType }) => {
    if (displayType === "shirt") {
      return "block";
    } else { 
      return "none";
    }
  }};
`;

export const MousepadPriceText = styled.h4`
  color: white;
  position: absolute;
  top: 365px;
  transition: all 0.8s all ease;

  display: ${({ displayType }) => {
    if (displayType === "mousepad") {
      return "block";
    } else { 
      return "none";
    }
  }};
`;

export const SweatsPriceText = styled.h4`
  color: white;
  position: absolute;
  top: 365px;
  transition: 0.8s all ease;

  display: ${({ displayType }) => {
    if (displayType === "sweats") {
      return "block";
    } else { 
      return "none";
    }
  }};
`;
