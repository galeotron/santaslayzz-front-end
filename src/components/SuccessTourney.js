import React from 'react'
import { AboutBg } from "./AboutBg/AboutElements";
import BgPic from "../images/stock-background.jpg"
import {  SuccessBigText, SuccessContainer, SuccessWrapper, SuccessText, TextboxContainer, TextboxWrapper, IconWrapper } from './Success/SuccessElements';
import { BsCheckLg } from "react-icons/bs";

const SuccessTourney = () => {
    return (
        <div>
            <AboutBg style={{ backgroundImage: `url(${BgPic})` }}></AboutBg>
            <SuccessContainer>
                <SuccessWrapper>
                    <TextboxContainer>
                        <TextboxWrapper>
                            <SuccessBigText>Success!</SuccessBigText>
                        </TextboxWrapper>
                        <IconWrapper>
                            <BsCheckLg/>
                        </IconWrapper>
                        <TextboxWrapper>
                            <SuccessText>Tournament information successfully submitted</SuccessText>
                        </TextboxWrapper>
                    </TextboxContainer>
                </SuccessWrapper>
            </SuccessContainer>
        </div>
    )
}

export default SuccessTourney
