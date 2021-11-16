import styled from "styled-components";

export const SignUpContainer = styled.div`
  /* border: 2px solid red; */
  display: flex;
  align-items: center;
  flex-direction: column;
  /* top: 0px;
  bottom: 0px;
  position: relative;
  height: 100%; */
  position: absolute; 
  top: 0; 
  left: 0;
  right: 0;
  bottom: 0;
  margin-top: 80px;
  margin-bottom: 80px;
  overflow: auto;
`;

export const SignUpWrapper = styled.div`
  /* border: 2px solid blue; */
  width: 100%;
  display: flex;
  justify-content: center;
  max-width: 100%;
`;

export const SignUpImg = styled.img`
  max-width: 980px;

  @media screen and (max-width: 980px) {
    width: 100%;
  }
`;

export const AboutContainer = styled.div`
  /* border: 2px solid green; */
  /* margin-left: 80px;
  margin-right: 80px; */
  max-width: 100%;

  @media screen and (max-width: 980px) {
    margin-left: 5px;
    margin-right: 5px;
  }

  
`;

export const AboutWrapper = styled.div`
  /* border: 2px solid yellow; */
  width: 900px;
  max-width: 100%;

  

  @media screen and (max-width: 900px) {
    width: 90vw;
  }
`;

export const AboutLargeText = styled.p`
  color: white;
  font-size: 40px;
  @media screen and (max-width: 650px) {
    font-size: 30px;
  }
  margin-top: 20px;
  margin-bottom: 12px;
`;

export const AboutSmallText = styled.p`
  color: white;
  font-size: 18px;
  padding-bottom: 2px;

  @media screen and (max-width: 650px) {
    font-size: 12px;
  }
`;

export const AboutSmallTextLink = styled.a`
  color: white;
  font-size: 18px;

  @media screen and (max-width: 650px) {
    font-size: 12px;
  }
`;

export const TicketsContainer = styled.div`
    /* border: 2px dotted yellow; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 75px 75px 75px;
    margin-bottom: 80px;
    margin-top: 40px;
    position: relative;

    @media screen and (max-width: 800px) {
    grid-column-gap: 20px;
  }

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TicketsWrapper = styled.div`
    /* border: 2px dotted blue; */
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 800px) {
    justify-content: flex-end;
  }
  @media screen and (max-width: 700px) {
    justify-content: center;
  }
`;

export const SpecialText = styled.p`
    font-size: 22px;
    color: white;
    @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const GridSpecialText = styled.p`
    font-size: 18px;
    color: white;

    @media screen and (max-width: 650px) {
    font-size: 16px;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const Divider = styled.hr`
    background-color: #A1abb1;
    color: #A1abb1;
    border: 0 none;
    height: 2px;
    margin-top: 2vw;
`;

export const SignupWrap = styled.div`
    height: 80px;
`;

export const SignupBtn = styled.div`
    cursor: pointer;
    display: inline-block;
    border: #fe212d 0.125em solid;
    padding: 0.25em 1em;
    border-radius: 0.75em;
    width: 225px;
    display: flex;
    justify-content: center;
    position: absolute;
    margin-left: auto;
    right: 0;
    bottom: 0;
    margin-top: auto;


    

    text-shadow: 0 0 0.1em hsl(0 0% 100% / 0.5),
    0 0 0.5em currentColor;

    box-shadow: inset 0 0 0.5em 0 #fe212d,
    0 0 0.5em 0 #fe212d;
    
    white-space: nowrap;
    color: white;
    font-size: 30px;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;


    &:hover {
        background: #fe212d;
        color: black;
        text-shadow: none;
        box-shadow: inset 0 0 0.5em 0.1em #fe212d,
        0 0 2em 0.22em #fe212d;
        opacity: 1;
        /* transition: 500ms; */
        transition: color 2000ms;
        transition: background 350ms;
    }


    @media screen and (max-width: 700px) {
    width: 100%;
    font-size: 22px;
  }
`;

export const ItemContainer = styled.div`
    margin-top: 20px;
    /* border: 2px dotted yellow; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* grid-auto-columns: px; */
    grid-auto-rows: 70px;
    /* row-gap: 10px;
    column-gap: 20px; */

    @media screen and (max-width: 450px) {
    grid-template-columns: 150px 150px;
  }
    
`;


