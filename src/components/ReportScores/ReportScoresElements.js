import styled from "styled-components";
// import { Link as LinkR } from "react-router-dom";

export const PageContainer = styled.div`
    /* border: 2px solid red; */
    position: relative;
    top: 0px;
    bottom: 80px;
    display: flex;
    justify-content: center;
    max-width: 100%;

`;

export const PageWrapper = styled.div`
    /* border: 2px solid blue; */
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;

`;

export const Title = styled.h1`
    /* border: 2px solid yellow; */
    margin: 10px;
`;

export const Description = styled.p`
    /* border: 2px solid green; */
    margin-bottom: 30px;
    max-width: 100%;
`;

export const TourneyDrop = styled.select`
    height: 50px;
    width: 200px;
    border-radius: 5px;
    font-size: 15px;
    padding-left: 10px;

    @media screen and (max-width: 450px) {
    width: 150px;
    font-size: 12px;
  }
`;

export const ItemContainer = styled.div`
    margin-top: 20px;
    /* border: 2px dotted yellow; */
    display: grid;
    grid-template-columns: 200px 200px;
    /* grid-auto-columns: px; */
    grid-auto-rows: 70px;
    row-gap: 10px;
    column-gap: 20px;

    @media screen and (max-width: 450px) {
    grid-template-columns: 150px 150px;
  }
    
`;

export const ItemWrapper = styled.div`
    /* border: 2px dotted red; */
`;

export const DropText = styled.p`

`;

export const ReportBtn = styled.a`
    cursor: pointer;
    display: inline-block;
    border: #fe212d 0.125em solid;
    padding: 0.25em 1em;
    border-radius: 0.25em;
    width: 225px;
    display: flex;
    justify-content: center;

    

    text-shadow: 0 0 0.1em hsl(0 0% 100% / 0.5),
    0 0 0.5em currentColor;

    box-shadow: inset 0 0 0.5em 0 #fe212d,
    0 0 0.5em 0 #fe212d;
    
    white-space: nowrap;
    /* padding: 10px 22px; */
    color: white;
    font-size: 30px;
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
        box-shadow: inset 0 0 0.5em 0.1em #fe212d,
        0 0 2em 0.22em #fe212d;
        opacity: 1;
        /* transition: 500ms; */
        transition: color 2000ms;
        transition: background 350ms;
    }

`;

export const TourneyInput = styled.input`
    height: 50px;
    width: 200px;
    border-radius: 5px;
    font-size: 15px;
    padding-left: 10px;

    @media screen and (max-width: 450px) {
    width: 150px;
    font-size: 12px;
  }
`;

export const FootSpacer = styled.div`
    height: 80px;
    
`;