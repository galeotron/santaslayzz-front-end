import styled from 'styled-components'

export const HeroContainer = styled.div`
    z-index: 1;
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;

    @media screen and (max-width: 900px) {
        display: none;
    }

`

export const VideoLoop = styled.video`
    display: none;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;

    @media screen and (max-width: 900px) {
        display: block;
    }
`;