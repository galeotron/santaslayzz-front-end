import React from 'react'
import { AboutBg } from "../AboutBg/AboutElements";
import BgPic from "../../images/stock-background.jpg";
import { SuccessContainer, SuccessWrapper, SuccessText, SuccessBigText, TextboxContainer, TextboxWrapper, IconWrapper } from '../Success/SuccessElements';
import { BsEmojiFrownFill } from "react-icons/bs";

const Failed = () => {
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
                            <SuccessText>Something went wrong</SuccessText>
                        </TextboxWrapper>
                        <TextboxWrapper>
                            <SuccessText>Please try again</SuccessText>
                        </TextboxWrapper>
                    </TextboxContainer>
                </SuccessWrapper>
            </SuccessContainer>
        </div>
    )
}

export default Failed