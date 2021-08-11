import React from 'react'
import { AboutBg } from '../AboutBg/AboutElements'
import BgPic from '../../images/stock-background.jpg'
import { BannerText, BtnWrapper, DateText, LogoImg, TourneyBtn, TourneyContainer, PrevTourneyContainer, TourneyWrapper, Triangle, PrevTourneyWrapper, PrevTourneyPoster, TourneyBtnRules } from './TournamentsElements'
import wzLogo from '../../images/warzone-logo.png'
import tourneyBanner1 from '../../images/tourney-banner.jpg'
import tourneyBanner2 from '../../images/tourney-banner2.jpg'
import tourneyBanner3 from '../../images/tourney-banner-may.jpg'
import rules from '../../pdf/Tourney_rules.pdf'

const Tournaments = () => {
    return (
        <>
            <AboutBg style={{ backgroundImage: `url(${BgPic})`}}></AboutBg>
            <Triangle></Triangle>
            <TourneyContainer>
                <TourneyWrapper>
                    <LogoImg src={wzLogo}></LogoImg>
                    <BannerText>Tournament</BannerText>
                </TourneyWrapper>
                <TourneyWrapper>
                    <DateText>Sunday, August 3rd</DateText>
                    <BtnWrapper>
                            <TourneyBtnRules href={rules}>Rules</TourneyBtnRules>
                            <TourneyBtn to="/tournaments/signup">Sign Up</TourneyBtn>
                            <TourneyBtn to="/tournaments/scores">Report Scores</TourneyBtn>
                    </BtnWrapper>
                    <PrevTourneyContainer>
                        <PrevTourneyWrapper to="/tournaments/1">
                            <PrevTourneyPoster src={tourneyBanner1}></PrevTourneyPoster>
                        </PrevTourneyWrapper>
                        <PrevTourneyWrapper to="/tournaments/2">
                            <PrevTourneyPoster src={tourneyBanner2}></PrevTourneyPoster>
                        </PrevTourneyWrapper>
                        <PrevTourneyWrapper to="/tournaments/3">
                            <PrevTourneyPoster src={tourneyBanner3}></PrevTourneyPoster>
                        </PrevTourneyWrapper>
                    </PrevTourneyContainer>
                </TourneyWrapper>
            </TourneyContainer>
        </>    
    )
}

export default Tournaments
