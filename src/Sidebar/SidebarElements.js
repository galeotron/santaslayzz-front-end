import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import {Link as LinkR} from 'react-router-dom'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 350px;
    height: 100%;
    background: black;
    display: grid;
    top: 0px;
    right: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    right: ${({isOpen}) => (isOpen ? '0' : '-100%')};

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

export const SidebarRoute = styled(LinkR)`
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