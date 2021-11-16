import React from "react";
import { AboutBg } from "../AboutBg/AboutElements";
import BgPic from "../../images/stock-background.jpg";
import {
  ItemContainer,
  AboutContainer,
  AboutLargeText,
  AboutSmallText,
  AboutSmallTextLink,
  AboutWrapper,
  Divider,
  GridSpecialText,
  SignupBtn,
  SignUpContainer,
  SignUpImg,
  SignupWrap,
  SignUpWrapper,
  SpecialText,
  TicketsContainer,
  TicketsWrapper,
} from "./SignUpElements";
import {
  CounterContainer,
  CounterWrapper,
  CounterButtons,
  CounterInput,
} from "../Clothing/HoodieElements";
import {
  ItemWrapper,
  DropText,
  TourneyInput,
} from "../ReportScores/ReportScoresElements";
import rules from "../../pdf/Tourney_rules.pdf";
import banner from "../../images/tourney-banner-may.jpg";
import { useForm } from "react-hook-form";
import axios from "axios";

let cart = {
  Items: [
    {
      Name: "SmallHoodie",
      Quantity: 0,
    },
    {
      Name: "MediumHoodie",
      Quantity: 0,
    },
    {
      Name: "LargeHoodie",
      Quantity: 0,
    },
    {
      Name: "XLargeHoodie",
      Quantity: 0,
    },
    {
      Name: "SmallShirt",
      Quantity: 0,
    },
    {
      Name: "MediumShirt",
      Quantity: 0,
    },
    {
      Name: "LargeShirt",
      Quantity: 0,
    },
    {
      Name: "XLargeShirt",
      Quantity: 0,
    },
    {
      Name: "SmallSweats",
      Quantity: 0,
    },
    {
      Name: "MediumSweats",
      Quantity: 0,
    },
    {
      Name: "LargeSweats",
      Quantity: 0,
    },
    {
      Name: "XLargeSweats",
      Quantity: 0,
    },
    {
      Name: "Mousepad",
      Quantity: 0,
    },
    {
      Name: "TournamentTicket",
      Quantity: 0,
      TeamName: "",
      PlayerName1: "",
      OfficialName1: "",
      PlayerName2: "",
      OfficialName2: "",
      PlayerName3: "",
      OfficialName3: "",
      PlayerName4: "",
      OfficialName4: "",
      DiscordName: "",
    },
  ],
};

const SignUp = () => {
  const { register, watch, handleSubmit, setValue } = useForm({
    defaultValues: {
      quantity: 1,
    },
  });
  

  const quantity = watch("quantity");
  const increaseQuantity = () => {
    if (quantity < 4) {
      setValue("quantity", quantity + 1);
    }
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setValue("quantity", quantity - 1);
    }
  };

  const total = quantity * 10;

  const onSubmit = async (data) => {
    const cart = editCart(data);
    const response = await axios.post(
      "http://localhost:5000/store/create-checkout-session",
      cart
      // { headers: { "Content-Type": "text/plain" } }
    );

    console.log(response);
    window.location.href = response.data.url;
    console.log(data);
  };

  const editCart = (data) => {
    let localCart = localStorage.getItem("localCart");
    if (!localCart) {
      localCart = cart;
    } else {
      cart = JSON.parse(localStorage.getItem("localCart"));
    }

    cart.Items[13].Quantity = quantity;
    cart.Items[13].TeamName = data.teamName;
    cart.Items[13].PlayerName1 = data.player1Name;
    cart.Items[13].OfficialName1 = data.player1OfficialName;
    cart.Items[13].PlayerName2 = data.player2Name;
    cart.Items[13].OfficialName2 = data.player2OfficialName;
    cart.Items[13].PlayerName3 = data.player3Name;
    cart.Items[13].OfficialName3 = data.player3OfficialName;
    cart.Items[13].PlayerName4 = data.player4Name;
    cart.Items[13].OfficialName4 = data.player4OfficialName;
    cart.Items[13].DiscordName = data.discordName;

    localCart = { ...cart };

    localStorage.setItem("localCart", JSON.stringify(localCart));
    return localCart;
  };

  return (
    <>
      <AboutBg style={{ backgroundImage: `url(${BgPic})` }}></AboutBg>
      <SignUpContainer>
        <SignUpWrapper>
          <SignUpImg src={banner}></SignUpImg>
        </SignUpWrapper>
        <SignUpWrapper>
          <AboutContainer>
            <AboutWrapper>
              <AboutLargeText>About</AboutLargeText>
            </AboutWrapper>
            <AboutWrapper>
              <AboutSmallText>August 69th</AboutSmallText>
            </AboutWrapper>
            <AboutWrapper>
              <AboutSmallText>8:00 PM EST</AboutSmallText>
            </AboutWrapper>
            <AboutWrapper>
              <AboutSmallText>Trios</AboutSmallText>
            </AboutWrapper>
            <AboutWrapper>
              <AboutSmallText>Prizes TBD</AboutSmallText>
            </AboutWrapper>
            <AboutWrapper>
              <AboutSmallTextLink href={rules}>Full Rules</AboutSmallTextLink>
            </AboutWrapper>
            <AboutWrapper>
              <AboutSmallText>For each ticket purchased: Ensure each text box is filled out correctly. Only include one discord name per team from team captain.</AboutSmallText>
            </AboutWrapper>
            <Divider></Divider>
            <TicketsContainer>
              <TicketsWrapper>
                <AboutLargeText>Tickets</AboutLargeText>
              </TicketsWrapper>
              <TicketsWrapper>
                <GridSpecialText>Price:</GridSpecialText>
              </TicketsWrapper>
              <TicketsWrapper>
                <GridSpecialText>Quantity:</GridSpecialText>
              </TicketsWrapper>
              <TicketsWrapper>
                <GridSpecialText>Total:</GridSpecialText>
              </TicketsWrapper>
              <TicketsWrapper>
                <SpecialText>Warzone DUOS</SpecialText>
              </TicketsWrapper>
              <TicketsWrapper>
                <GridSpecialText>$10</GridSpecialText>
              </TicketsWrapper>
              <TicketsWrapper>
                <CounterContainer>
                  <CounterWrapper>
                    <CounterButtons onClick={decreaseQuantity}>
                      -
                    </CounterButtons>
                  </CounterWrapper>
                  <CounterWrapper>
                    <CounterInput
                      {...register("quantity")}
                      placeholder="Quantity"
                      id="quantity"
                      type="number"
                    >
                      {quantity}
                    </CounterInput>
                  </CounterWrapper>
                  <CounterWrapper>
                    <CounterButtons onClick={increaseQuantity}>
                      +
                    </CounterButtons>
                  </CounterWrapper>
                </CounterContainer>
              </TicketsWrapper>
              <TicketsWrapper>
                <GridSpecialText>${total}</GridSpecialText>
              </TicketsWrapper>

              {/* <div></div>
              <div></div>
              <TicketsWrapper>
                <GridSpecialText>Total:</GridSpecialText>
              </TicketsWrapper>
              <TicketsWrapper>
                <GridSpecialText>useState thing</GridSpecialText>
              </TicketsWrapper> */}

              <ItemContainer>
                <ItemWrapper>
                  <DropText></DropText>
                  <TourneyInput
                    
                    {...register("teamName", {
                      required: <p>Team name required</p>
                    })}
                    placeholder="Team Name"
                    id="teamName"
                    type="text"
                  ></TourneyInput>
                </ItemWrapper>
                <ItemWrapper>
                  <DropText></DropText>
                  <TourneyInput
                    
                    {...register("discordName")}
                    placeholder="Discord Name"
                    id="discordName"
                    type="text"
                  ></TourneyInput>
                </ItemWrapper>
                <ItemWrapper>
                  <DropText></DropText>
                  <TourneyInput
                    
                    {...register("player1Name", {
                      required: <p>Each player name required</p>
                    })}
                    placeholder="Player Name"
                    id="player1Name"
                    type="text"
                  ></TourneyInput>
                </ItemWrapper>
                <ItemWrapper>
                  <DropText></DropText>
                  <TourneyInput
                    
                    {...register("player1OfficialName", {
                      required: <p>Each player's Activision ID required</p>
                    })}
                    placeholder="Player Activision ID"
                    id="player1OfficialName"
                    type="text"
                  ></TourneyInput>
                </ItemWrapper>
                {quantity > 1 && (
                  <ItemWrapper>
                    <DropText></DropText>
                    <TourneyInput
                      
                      {...register("player2Name", {
                        required: <p>Each player name required</p>
                      })}
                      placeholder="Player Name"
                      id="player1Name"
                      type="text"
                    ></TourneyInput>
                  </ItemWrapper>
                )}
                {quantity > 1 && (
                  <ItemWrapper>
                    <DropText></DropText>
                    <TourneyInput
                      
                      {...register("player2OfficialName", {
                        required: <p>Each player's Activision ID required</p>
                      })}
                      placeholder="Player Activision ID"
                      id="player2OfficialName"
                      type="text"
                    ></TourneyInput>
                  </ItemWrapper>
                )}
                {quantity > 2 && (
                  <ItemWrapper>
                    <DropText></DropText>
                    <TourneyInput
                      
                      {...register("player3Name", {
                        required: <p>Each player name required</p>
                      })}
                      placeholder="Player Name"
                      id="player3Name"
                      type="text"
                    ></TourneyInput>
                  </ItemWrapper>
                )}
                {quantity > 2 && (
                  <ItemWrapper>
                    <DropText></DropText>
                    <TourneyInput
                      
                      {...register("player3OfficialName", {
                        required: <p>Each player's Activision ID required</p>
                      })}
                      placeholder="Player Activision ID"
                      id="player3OfficialName"
                      type="text"
                    ></TourneyInput>
                  </ItemWrapper>
                )}
                {quantity > 3 && (
                  <ItemWrapper>
                    <DropText></DropText>
                    <TourneyInput
                      
                      {...register("player4Name", {
                        required: <p>Each player name required</p>
                      })}
                      placeholder="Player Name"
                      id="player4Name"
                      type="text"
                    ></TourneyInput>
                  </ItemWrapper>
                )}
                {quantity > 3 && (
                  <ItemWrapper>
                    <DropText></DropText>
                    <TourneyInput
                      
                      {...register("player4OfficialName", {
                        required: <p>Each player's Activision ID required</p>
                      })}
                      placeholder="Player Activision ID"
                      id="player4OfficialName"
                      type="text"
                    ></TourneyInput>
                  </ItemWrapper>
                )}
              </ItemContainer>

              <SignupWrap>
                <SignupBtn onClick={handleSubmit(onSubmit)}>Checkout</SignupBtn>
              </SignupWrap>
            </TicketsContainer>
          </AboutContainer>
        </SignUpWrapper>
      </SignUpContainer>
    </>
  );
};

export default SignUp;
