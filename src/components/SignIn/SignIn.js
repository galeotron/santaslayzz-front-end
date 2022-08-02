import React from "react";
import { AboutBg } from "../AboutBg/AboutElements";
import BgPic from "../../images/stock-background.jpg";
import axios from "axios";
import {
  BoxContainer,
  BoxItemWrapper,
  ButtonWrapper,
  SignInButton,
  TextBox,
} from "./SignInElements";
import { PageContainer } from "../ReportScores/ReportScoresElements";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";

const SignIn = (props) => {
  console.log(props)
  const {setIsAuth, isAuth} = props
  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });

  const authentication = (response) => {
    setIsAuth(true);
  }

  const onSubmit = async (data) => {

    const response = await axios.post(
        "http://localhost:5000/tournament/admin",
        data
        // { headers: { "Content-Type": "text/plain" } }
        
      );
  
      if(response.data === "http://localhost:3000/tournament/admin") {
        authentication(response);
      }
      else {
        console.log(response)
        window.alert("Incorrect username or password")
      }

    };
    console.log(isAuth)
    
  if (isAuth) {
    return <Redirect to="/tournament/admin" />
  }


  return (
    <div>
      <AboutBg style={{ backgroundImage: `url(${BgPic})` }}></AboutBg>
      <PageContainer>
        <BoxContainer>
          <BoxItemWrapper>
            <TextBox
              {...register("username", {
                required: <p>username required</p>,
              })}
              placeholder="Username"
              id="username"
              type="text"
            ></TextBox>
          </BoxItemWrapper>
          <BoxItemWrapper>
            <TextBox
              {...register("password", {
                required: <p>password required</p>,
              })}
              placeholder="Password"
              id="password"
              type="password"
            ></TextBox>
          </BoxItemWrapper>
          <BoxItemWrapper>
            <ButtonWrapper>
              <SignInButton onClick={handleSubmit(onSubmit)}>Sign in</SignInButton>
            </ButtonWrapper>
          </BoxItemWrapper>
        </BoxContainer>
      </PageContainer>
    </div>
  );
};

export default SignIn;
