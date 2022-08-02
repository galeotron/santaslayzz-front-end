import React, { useEffect } from 'react'
import { AboutBg } from "../AboutBg/AboutElements";
import BgPic from "../../images/stock-background.jpg";
import {  SuccessBigText, SuccessContainer, SuccessWrapper, SuccessText, TextboxContainer, TextboxWrapper, IconWrapper } from './SuccessElements';
import { BsCheckLg } from "react-icons/bs";
import axios from 'axios';

let TournamentDB = {
    "teamName": "",
    "discordName": "",
    "playerName1": "",
    "officialName1": "",
    "playerName2": "",
    "officialName2": "",
    "playerName3": "",
    "officialName3": "",
    "playerName4": "",
    "officialName4": "",
    "game1Kills": null,
    "game1Placement": null,
    "game2Kills": null,
    "game2Placement": null,
    "game3Kills": null,
    "game3Placement": null,
    "game4Kills": null,
    "game4Placement": null,
    "passcode": null
  }

const Success = () => {




    useEffect(() => {
        TournamentDB = JSON.parse(localStorage.getItem("localTournamentDB"));
        const response2 = axios.put(
          "http://localhost:5000/tournament/register/" + TournamentDB.teamName,
          TournamentDB
          // {headers: { "Access-Control-Allow-Origin": ""}}
          
        );
        localStorage.removeItem("localCart")
    }, []) 


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
                            <SuccessText>Thank you for ordering!</SuccessText>
                        </TextboxWrapper>
                        <TextboxWrapper>
                            <SuccessText>Santa will send your gifts when he fucking feels like it</SuccessText>
                        </TextboxWrapper>
                    </TextboxContainer>
                </SuccessWrapper>
            </SuccessContainer>
        </div>
    )
}

export default Success
