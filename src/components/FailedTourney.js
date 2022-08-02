import React from 'react'
import { AboutBg } from "./AboutBg/AboutElements";
import BgPic from "../images/stock-background.jpg"
import {  SuccessBigText, SuccessContainer, SuccessWrapper, SuccessText, TextboxContainer, TextboxWrapper, IconWrapper } from './Success/SuccessElements';
import { BsEmojiFrownFill } from "react-icons/bs";

const FailedTourney = () => {
    return (
        <div>
            <AboutBg style={{ backgroundImage: `url(${BgPic})` }}></AboutBg>
            <SuccessContainer>
                <SuccessWrapper>
                    <TextboxContainer>
                        <TextboxWrapper>
                            <SuccessBigText>Uh oh</SuccessBigText>
                        </TextboxWrapper>
                        <IconWrapper>
                            <BsEmojiFrownFill/>
                        </IconWrapper>
                        <TextboxWrapper>
                            <SuccessText>Something went wrong!</SuccessText>
                        </TextboxWrapper>
                        <TextboxWrapper>
                            <SuccessText>Check that your passcode was correct</SuccessText>
                        </TextboxWrapper>
                    </TextboxContainer>
                </SuccessWrapper>
            </SuccessContainer>
        </div>
    )
}

export default FailedTourney
