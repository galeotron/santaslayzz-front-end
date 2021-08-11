import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'

export const Triangle = styled.div`
    background-color: grey;
    position: fixed;
    clip-path: polygon(0 0, 0% 100%, 100% 0);
    top: 0;
    left: 0;
    width: 220px;
    height: 683px;
    opacity: 0.9;
`;

export const TourneyContainer = styled.div`
    position: relative;
`;

export const TourneyWrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 100%; */
    position: relative;



`;

export const LogoImg = styled.img`
    height: 33%;
    width: 80%;
    position: relative;
    top: -70px;
    max-width: 1100px;

    @media screen and (max-width: 900px) {
        top: 0px;
    }
`;

export const BannerText = styled.h1`
    color: white;
    z-index: 1;
    position: relative;
    top: -200px;
    font-size: 8.2vw;

    @media screen and (min-width: 1200px) {
        font-size: 100px;
    }

    @media screen and (max-width: 1050px) {
        top: -170px;
    }

    @media screen and (max-width: 900px) {
        top: -100px;
    }
    @media screen and (max-width: 800px) {
        top: -90px;
    }
    @media screen and (max-width: 700px) {
        top: -70px;
    }
    @media screen and (max-width: 615px) {
        top: -60px;
    }
    @media screen and (max-width: 500px) {
        top: -50px;
    }
    @media screen and (max-width: 400px) {
        top: -40px;
    }
`;

export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
`;

export const DateText = styled.h1`
    color: white;
    top: -200px;
    position: relative;
    font-size: 4.2vw;

    @media screen and (min-width: 1200px) {
        font-size: 50px;
    }

    @media screen and (max-width: 1050px) {
        top: -170px;
    }

    @media screen and (max-width: 900px) {
        top: -100px;
    }
    @media screen and (max-width: 800px) {
        top: -90px;
    }
    @media screen and (max-width: 700px) {
        top: -70px;
    }
    @media screen and (max-width: 615px) {
        top: -60px;
    }
    @media screen and (max-width: 500px) {
        top: -50px;
    }
    @media screen and (max-width: 400px) {
        top: -40px;
    }
`;

// export const TourneyBtnWrap = styled.nav`
//     display: flex;
//     align-items: center;
// `;

export const TourneyBtn = styled(LinkR)`
    cursor: pointer;
    display: inline-block;
    border: #fe212d 0.125em solid;
    padding: 0.25em 1em;
    border-radius: 0.25em;
    width: 225px;
    display: flex;
    justify-content: center;

    top: -150px;
    position: relative;
    

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

    @media screen and (max-width: 900px) {
        font-size: 20px;
        width: 160px;
        top: -200px;
        position: relative;
    }

    @media screen and (min-width: 1200px) {
        /* font-size: 35px;
        width: 300px; */
        top: -150px;
    }

    @media screen and (max-width: 1050px) {
        top: -130px;
    }

    @media screen and (max-width: 900px) {
        top: -80px;
    }
    @media screen and (max-width: 800px) {
        top: -70px;
    }
    @media screen and (max-width: 700px) {
        top: -60px;
    }
    @media screen and (max-width: 615px) {
        top: -50px;
    }
    @media screen and (max-width: 500px) {
        top: -40px;
    }
    @media screen and (max-width: 400px) {
        top: -30px;
    }
`;

export const TourneyBtnRules = styled.a`
    cursor: pointer;
    display: inline-block;
    border: #fe212d 0.125em solid;
    padding: 0.25em 1em;
    border-radius: 0.25em;
    width: 225px;
    display: flex;
    justify-content: center;

    top: -150px;
    position: relative;
    

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

    @media screen and (max-width: 900px) {
        font-size: 20px;
        width: 160px;
        top: -200px;
        position: relative;
    }

    @media screen and (min-width: 1200px) {
        /* font-size: 35px;
        width: 300px; */
        top: -150px;
    }

    @media screen and (max-width: 1050px) {
        top: -130px;
    }

    @media screen and (max-width: 900px) {
        top: -80px;
    }
    @media screen and (max-width: 800px) {
        top: -70px;
    }
    @media screen and (max-width: 700px) {
        top: -60px;
    }
    @media screen and (max-width: 615px) {
        top: -50px;
    }
    @media screen and (max-width: 500px) {
        top: -40px;
    }
    @media screen and (max-width: 400px) {
        top: -30px;
    }
`;

export const PrevTourneyContainer = styled.div`
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    position: relative;
    bottom: 80px;
 
    @media screen and (min-width: 900px) {
        flex-wrap: nowrap;
    }

    @media screen and (min-width: 1200px) {
        top: -90px;
    }

    @media screen and (max-width: 1050px) {
        top: -80px;
    }

    @media screen and (max-width: 900px) {
        top: -80px;
    }
    @media screen and (max-width: 800px) {
        top: -70px;
    }
    @media screen and (max-width: 700px) {
        top: -60px;
    }
    @media screen and (max-width: 615px) {
        top: -50px;
    }
    @media screen and (max-width: 500px) {
        top: -40px;
    }
    @media screen and (max-width: 400px) {
        top: -30px;
    }
`;

export const PrevTourneyWrapper = styled(LinkR)`
    width: 100%;
    transition: all 400ms ease-in-out;
    opacity: 0.8;
    max-width: 1280px;
    

    &:hover {
    transition: all 400ms ease-in-out;
    transform: scale(1.02);
    opacity: 1;
    }

    object-fit: cover;

`;

export const PrevTourneyPoster = styled.img`
    max-width: 100%;
    height: auto;
    object-fit: cover;
`;
