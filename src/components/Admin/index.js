import React, { useState, useEffect } from "react";
import { AboutBg } from "../AboutBg/AboutElements";
import BgPic from "../../images/stock-background.jpg";
import {
  PageContainer,
  TeamContainer,
  TeamInfoWrapper,
  TeamWrapper,
  TournamentTable,
} from "./AdminElements";
import axios from "axios";
import Table from "../Table";


const Admin = () => {
  const [TournamentDB, setTournamentDB] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "http://localhost:5000/tournament/tournamentData"
        // { headers: { "Content-Type": "text/plain" } }
      );

      setTournamentDB(response.data);
    };
    getData();
  }, []);


  var columns = [
    { key: "teamName", label: "Team" },
    { key: "discordName", label: "Discord" },
    { key: "playerName1", label: "Player 1" },
    { key: "officialName1", label: "Player 1 Official Name" },
    { key: "playerName2", label: "Player 2" },
    { key: "officialName2", label: "Player 2 Official Name" },
    { key: "playerName3", label: "Player 3" },
    { key: "officialName3", label: "Player 3 Official Name" },
    { key: "playerName4", label: "Player 4" },
    { key: "officialName4", label: "Player 4 Official Name" },
    { key: "game1Kills", label: "Game 1 Kills" },
    { key: "game1Placement", label: "Game 1 Placement" },
    { key: "game2Kills", label: "Game 2 Kills" },
    { key: "game2Placement", label: "Game 2 Placement" },
    { key: "game3Kills", label: "Game 3 Kills" },
    { key: "game3Placement", label: "Game 3 Placement" },
    { key: "game4Kills", label: "Game 4 Kills" },
    { key: "game4Placement", label: "Game 4 Placement" },
    { key: "passcode", label: "Code" },
  ];



  return (
    <>
      {/* <AboutBg style={{ backgroundImage: `url(${BgPic})` }}></AboutBg>
      <PageContainer>
        <TeamContainer>
          <TeamWrapper>
            <TeamInfoWrapper>
                <ul>
                    {TournamentDB.map((item, index)=>{
                        return <li key={index}>{item}</li>
                    })}
                </ul>
            </TeamInfoWrapper>
          </TeamWrapper>
        </TeamContainer>
      </PageContainer> */}

      {TournamentDB.length === 0 ? (
        "loading"
      ) : (
        <Table columns={columns} data={TournamentDB} />
        // <TournamentTable columns={columns} data={TournamentDB} />
      )}
    </>
  );
};

export default Admin;
