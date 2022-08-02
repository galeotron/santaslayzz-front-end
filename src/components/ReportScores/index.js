import React from "react";
import { useForm } from "react-hook-form";
import { AboutBg } from "../AboutBg/AboutElements";
import BgPic from "../../images/stock-background.jpg";
import {
  Description,
  PageContainer,
  PageWrapper,
  ItemContainer,
  ItemWrapper,
  Title,
  TourneyDrop,
  ReportBtn,
  TourneyInput,
  FootSpacer,
  DropText
} from "./ReportScoresElements";
import axios from "axios";

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



const ReportScores = () => {

  const { register, handleSubmit } = useForm();

  function handleErrors(err) {
    if (err.response) {
      if (err.response.status === 500) {
      console.log(err.response)
      console.log(err.response.statusText)
      window.alert("No team with that name registered.")
      window.location.href = "http://localhost:3000/tournaments/scores"
    }
      else if (err.response.status === 401) {
        window.alert("Incorrect passcode")
      window.location.href = "http://localhost:3000/tournaments/scores"
      }
      else {
        window.alert("Something went wrong, please try again")
        window.location.href = "http://localhost:3000/tournaments/scores"
      }
  }
}

  const onSubmit = async (data) => {



    const TournamentDB = editTournament(data);
    const response = await axios.put(
      "http://localhost:5000/tournament/reporting/" + data.teamName,
      TournamentDB
    )

    .then(window.location.href = "http://localhost:3000/tournament/success")
    .catch(handleErrors)

  };

  const editTournament = (data) => {
    let localTournamentDB = localStorage.getItem("localTournamentDB");
    if (!localTournamentDB) {
      localTournamentDB = TournamentDB;
    } else {
      TournamentDB = JSON.parse(localStorage.getItem("localTournamentDB"));
    }




    TournamentDB.teamName = data.teamName;
    TournamentDB.game1Kills = data.game1Kills;
    TournamentDB.game1Placement = data.game1Placement;
    TournamentDB.game2Kills = data.game2Kills;
    TournamentDB.game2Placement = data.game2Placement;
    TournamentDB.game3Kills = data.game3Kills;
    TournamentDB.game3Placement = data.game3Placement;
    TournamentDB.game4Kills = data.game4Kills;
    TournamentDB.game4Placement = data.game4Placement;
    TournamentDB.discordName = data.discordName;
    TournamentDB.passcode = data.passcode;

    localTournamentDB = { ...TournamentDB };

    localStorage.setItem("localTournamentDB", JSON.stringify(localTournamentDB));
    
    
    
    return localTournamentDB;
  }



  return (
    <>
      <AboutBg style={{ backgroundImage: `url(${BgPic})` }}></AboutBg>
      <PageContainer>
        <PageWrapper >
          <Title>Report Scores</Title>
          <Description>
            One player from each team reports scores for team
          </Description>
          <label htmlFor="passcode">Team Passcode:</label>
            <TourneyInput
              maxLength="4"
              {...register("passcode", {
                required: <p>Must enter passcode</p>
              })}
              placeholder="passcode"
              id="passcode"
              type="number"
              
            >
              {/* <option value="Warzone">Warzone</option>
              <option value="Apex">Apex</option> */}
            </TourneyInput>
          <ItemContainer>
            <ItemWrapper>
              <DropText>Team Name:</DropText>
              <TourneyInput
                maxLength="14"
                {...register("teamName", {
                  required: <p>Must enter team name</p>
                })}
                placeholder="Team Name"
                id="teamName"
                type="text"
                
              ></TourneyInput>
            </ItemWrapper>
            <ItemWrapper>
              <DropText>Discord Name:</DropText>
              <TourneyInput
                maxLength="14"
                {...register("discordName", {
                  required: <p>Must enter discord name</p>
                })}
                placeholder="Discord Name"
                id="discordName"
                type="text"
                
              ></TourneyInput>
            </ItemWrapper>
            <ItemWrapper>
              <DropText>Game 1 Total Kills:</DropText>
              <TourneyInput
                {...register("game1Kills", {
                  required: <p>Must enter game 1 kills</p>
                })}
                placeholder="Game 1 Kills"
                id="game1Kills"
                
                type="number"
              ></TourneyInput>
            </ItemWrapper>
            <ItemWrapper>
              <label htmlFor="game1Placement">Game 1 Placement:</label>
              <TourneyDrop
                {...register("game1Placement")}
                id="game1Placement"
                placeholder="Game1Placement"
                type="number"
                
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6+</option>
              </TourneyDrop>
            </ItemWrapper>
            <ItemWrapper>
              <DropText>Game 2 Total Kills:</DropText>
              <TourneyInput
                {...register("game2Kills", {
                  required: <p>Must enter game 2 kills</p>
                })}
                id="game2Kills"
                placeholder="Game 2 Kills"
                type="number"
                
              ></TourneyInput>
            </ItemWrapper>
            <ItemWrapper>
              <label htmlFor="game2Placement">Game 2 Placement:</label>
              <TourneyDrop
                {...register("game2Placement")}
                id="game2Placement"
                placeholder="Game2Placement"
                type="number"
                
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6+</option>
              </TourneyDrop>
            </ItemWrapper>
            <ItemWrapper>
              <DropText>Game 3 Total Kills:</DropText>
              <TourneyInput
                
                {...register("game3Kills", {
                  required: <p>Must enter game 3 kills</p>
                })}
                id="game3Kills"
                placeholder="Game 3 Kills"
                type="number"
                
              ></TourneyInput>
            </ItemWrapper>
            <ItemWrapper>
              <label htmlFor="game3Placement">Game 3 Placement:</label>
              <TourneyDrop
                {...register("game3Placement")}
                id="game3Placement"
                placeholder="Game3Placement"
                type="number"
                
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6+</option>
              </TourneyDrop>
            </ItemWrapper>
            <ItemWrapper>
              <DropText>Game 4 Total Kills:</DropText>
              <TourneyInput
                type="number"
                {...register("game4Kills", {
                  required: <p>Must enter game 4 kills</p>
                })}
                id="game4Kills"
                placeholder="Game 4 Kills"
                
              ></TourneyInput>
            </ItemWrapper>
            <ItemWrapper>
              <label htmlFor="game4Placement">Game 4 Placement:</label>
              <TourneyDrop
                {...register("game4Placement")}
                name="game4Placement"
                id="game4Placement"
                placeholder="Game4Placement"
                type="number"

              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6+</option>
              </TourneyDrop>
            </ItemWrapper>
          </ItemContainer>
          <ReportBtn onClick={handleSubmit(onSubmit)} >
            Submit
          </ReportBtn>
          
        </PageWrapper>
      </PageContainer>
      <FootSpacer></FootSpacer>
    </>
  );
};

export default ReportScores;
