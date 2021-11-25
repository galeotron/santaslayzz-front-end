import React from 'react'
import { AboutBg } from "../AboutBg/AboutElements";
import BgPic from "../../images/stock-background.jpg";
import { PageContainer, TeamContainer, TeamInfoWrapper, TeamWrapper } from './AdminElements';
import axios from "axios";



const Admin = () => {

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

      
    const getData = async () => {

        const response = await axios.get(
          "http://localhost:5000/tournament/tournamentData",
          // { headers: { "Content-Type": "text/plain" } }
        );
        
        // console.log(response.data)
        // console.log(Object.keys(response.data).length)
        // console.log(response.data.teamName);
        // console.log(response.data)
        // console.log(Object.keys(response.data))
        // console.log(response.data[0])
        console.log(Object.entries(response.data[0])[1])
        console.log(Object.entries(response.data[0])[0])
        
    }
        getData();

    return (
        <>
            <AboutBg style={{ backgroundImage: `url(${BgPic})` }}></AboutBg>
            <PageContainer>
                <TeamContainer>
                    <TeamWrapper>
                            <TeamInfoWrapper>
                                
                            </TeamInfoWrapper>
                        </TeamWrapper>
                </TeamContainer>


            </PageContainer>
        </>
    )
}

export default Admin
