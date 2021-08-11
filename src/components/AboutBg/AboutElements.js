import styled from 'styled-components'

export const AboutBg = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
    max-width: 100%;
    height: auto;
    background-repeat: repeat-y;
`;

export const AboutContainer = styled.div`
    /* border: 2px solid red; */
    display: block;
    width: 70%;
    height: calc(100vh - 150px);
    top: 80px;
`;

export const PolygonBg = styled.div`
    /* border: 10px solid red; */
    position: fixed;
    top: 0;
    right: 30%;
    left: 0;
    bottom: 0;
    z-index: 1;
    max-width: 100%;
    height: auto;
    background-color: grey;
    z-index: -1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    opacity: 0.9;

    clip-path: polygon(220px 0, 100% 0, 100% 100%, -50px 100%);

    @media screen and (max-width: 900px) {
        right: 0;
        top: 0;
        clip-path: polygon(0% 30%, 100% 20%, 100% 100%, 0 100%);
    }

    
`;

export const AboutContent = styled.div`
    z-index: 3;
    position: relative;
    /* border: 2px solid blue; */
    top: 100px;
    left: 250px;
    width: 60%;

    @media screen and (max-width: 960px) {
        width: 50%;
    }

    @media screen and (max-width: 900px) {
        top: 250px;
        left: 100px;
        width: 70%;
    }

    @media screen and (max-width: 640px) {
        top: 250px;
        left: 100px;
        width: 100%;
    }

    @media screen and (max-width: 400px) {
        left: 50px;
    }

`

export const PicsContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0px;
    left: 70%;
    bottom: 0;
    right: 0;

    @media screen and (max-width: 640px) {
        flex-direction: row;
        position: relative;
        left: 0;
        top: 300px;
        width: 100vw;
        
    }
`;

export const Pics = styled.img`
    width: 100%;
    object-fit: cover;
    height: 34%;
`;
