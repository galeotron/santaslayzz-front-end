import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import {Link as LinkR} from 'react-router-dom'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 390px;
    height: 100%;
    background: black;
    display: grid;
    top: 0px;
    /* right: 0; */
    transition: 0.3s ease-in-out;
    opacity: ${({isCartOpen}) => (isCartOpen ? '100%' : '0')};
    right: ${({isCartOpen}) => (isCartOpen ? '0' : '-100%')};
    overflow: scroll;

    @media screen and (max-width: 700px) {
            width: 100%;
            align-content: space-evenly;
        }

`;

export const CloseIcon = styled(FaTimes)`
color: #fff;
`;

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 18.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;

@media screen and (max-width: 700px) {
            left: 3%;
        }
`;

export const SidebarWrapper = styled.div`
    color: #fff;
    /* border: 2px solid red; */
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat()(6, 80px);
    text-align: center;
    
    

    @media screen and (max-width: 700px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(LinkR)`
    top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25rem;
    text-decoration: none;
    list-style: none;
    margin: 20px;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #8dbc00;
        transition: 0.2s ease-in-out;
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    margin: 20px;
    justify-content: center;
`;

export const SidebarRoute = styled.a`
    border-radius: 50px;
    background: #8dbc00;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2 ease-in-out;
        background: #fff;
        color: #010606;
    }
`;

export const SidebarLine = styled.hr`
    background-color: #2B2E30;
    color: #2B2E30;
    border: 0 none;
    height: 2px;
    margin-left: 1rem;
    margin-right: 1rem;
`;

export const SidebarFooterWrapper = styled.footer`
    border-top: 2px solid #2B2E30;
    position: fixed;
    bottom: 0;
    height: 50px;
    width: 350px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 7%;
    padding-right: 7%;

    @media screen and (max-width: 700px) {
            width: 100%;
            justify-content: space-evenly;
        }
`;

export const SidebarFooterIcon = styled.a`
    color: #fff;
    cursor: pointer;
    transition: all 400ms ease-in-out;

    &:hover {
        transition: all 400ms ease-in-out;
        color: #8dbc00;  
    }
`;

export const Title = styled.h1``;

export const CartContainer = styled.div`
    /* border: 2px solid green; */
    height: calc(100vh - 135px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 700px) {
        height: calc(100vh - 180px);
    }
`;

export const CartItemWrapper = styled.div`
    /* border: 2px solid blue; */
    display: flex;
    margin-top: 5px;
    margin-right: 20px;
    margin-left: 20px;
    margin-bottom: 15px;
    justify-content: space-between;
`;

export const CartPicWrapper = styled.div`
    /* border: 2px dotted red; */
    width: 33%;
`;

export const CartPic = styled.img`
    /* border: 2px solid red; */
    max-width: 100%;
`;

export const CartTextContainer = styled.div`
    /* border: 2px dotted orange; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const CartTextWrapper = styled.div`
    /* border: 2px dotted white; */
`;

export const DescriptionText = styled.p`
  font-size: 18px;
  color: white;
  line-height: 25px;
`;

export const CounterContainer = styled.div`
  display: flex;
  width: 100px;
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
  color: black;

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
  color: black;
`;

export const CounterRemoveContainer = styled.div`
    /* border: 2px solid yellow; */
    display: flex;
    align-items: center;
`;

export const RemoveLinkWrap = styled.div`
    /* border: 2px solid red; */

    &:hover {
    cursor: pointer;
  }
`;

export const RemoveLinkTxt = styled.p`
    text-decoration: underline;
`;

export const CheckoutBtnLink = styled.div`
  cursor: pointer;
  display: inline-block;
  border: #fe212d 0.125em solid;
  padding: 0.25em 1em;
  border-radius: 0.25em;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;

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