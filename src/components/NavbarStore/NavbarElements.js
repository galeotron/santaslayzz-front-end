import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
// import { Link as LinkS} from 'react-scroll'
// import nameLogo from '../../images/name'

export const Nav = styled.nav`
  background: ${({ scrollNav, isMediaPlaying }) => {
    if (scrollNav === true) {
      return "#000";
    }
    // return isMediaPlaying ? 'transparent' : '#000';
  }};
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.8s all ease;

  @media screen and (max-width: 900px) {
    transition: 0.8s all ease;
  }
  @media screen and (max-width: 900px) {
    background: #000;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`;

export const NavLogo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 12px;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavLogoReal = styled.img`
  height: 100px;
  width: 140px;
`;

export const MobileNavLogo = styled(LinkR)`
  display: none;

  @media screen and (max-width: 900px) {
    width: 85px;
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    /* align-items: center; */
    margin-left: 12px;
  }
`;

export const MobileNavLogoReal = styled.img`
  /* background-color: blue; */
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 900px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }

  transition: all 400ms ease-in-out;

  &:hover {
    transition: all 400ms ease-in-out;
    color: #8dbc00;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkR)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 20px;
  position: relative;

  &:hover,
  &:focus {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
      -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
      0.025em 0.05em 0 rgba(0, 0, 255, 0.75);

    animation: glitch 750ms;

    @keyframes glitch {
      0% {
        text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
          -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
          -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
      }
      14% {
        text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
          -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
          -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
      }
      15% {
        text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
          0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
          -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
      }
      49% {
        text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
          0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
          -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
      }
      50% {
        text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
          0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
      }
      99% {
        text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
          0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
      }
      100% {
        text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
          -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
          -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
      }
    }
  }

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavLinksSpan1 = styled.span`
  border: 5px solid red;

  /* visibility: hidden; */
  color: red;

  position: absolute;
  align-items: center;

  clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
  transform: translate(-0.1em, -0.05em);

  &:hover,
  &:focus {
    visibility: visible;
    z-index: 999;
    color: red;

    animation: glitch 2000ms;

    @keyframes glitch {
      0% {
        text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
          -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
          -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
      }
      14% {
        text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
          -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
          -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
      }
      15% {
        text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
          0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
          -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
      }
      49% {
        text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
          0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
          -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
      }
      50% {
        text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
          0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
      }
      99% {
        text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
          0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
      }
      100% {
        text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
          -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
          -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
      }
    }
  }
`;

export const NavLinksSpan2 = styled.span`
  display: none;

  position: absolute;
  align-items: center;

  clip-path: polygon(0 70%, 100% 33%, 100% 100%, 0% 100%);
  transform: translate(0.5em, 0.5em);

  &:hover,
  &:focus {
    animation: glitch 500ms;

    @keyframes glitch {
      0% {
        text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
          -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
          -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
      }
      14% {
        text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
          -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
          -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
      }
      15% {
        text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
          0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
          -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
      }
      49% {
        text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
          0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
          -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
      }
      50% {
        text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
          0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
      }
      99% {
        text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
          0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
      }
      100% {
        text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
          -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
          -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
      }
    }
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavBtnLink = styled.div`
  /* border-radius: 50px; */
  /* background: #fe212d; */

  cursor: pointer;
  display: inline-block;
  border: #fe212d 0.125em solid;
  padding: 0.25em 1em;
  border-radius: 0.25em;

  text-shadow: 0 0 0.1em hsl(0 0% 100% / 0.5), 0 0 0.5em currentColor;

  box-shadow: inset 0 0 0.5em 0 #fe212d, 0 0 0.5em 0 #fe212d;

  white-space: nowrap;
  /* padding: 10px 22px; */
  color: white;
  font-size: 18px;
  outline: none;
  /* border: none; */
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

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
