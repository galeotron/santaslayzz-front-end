import React from 'react'
import BgPic from '../../images/stock-background.jpg'
import { AboutBg, PolygonBg, AboutContainer, AboutContent, PicsContainer, Pics } from './AboutElements'
import TopPic from '../../images/bear.jpg'
import MiddlePic from '../../images/family.jpg'
import BottomPic from '../../images/gamer.jpg'

const About = () => {
    return (
        <>
            <AboutBg style={{ backgroundImage: `url(${BgPic})`}}></AboutBg>
            <AboutContainer>
                <PolygonBg></PolygonBg>
                    <AboutContent>
                        <h1>About me</h1>
                        <p>I'm Henry the eighth, I am
Henry the eighth, I am, I am
I got married to the widow next door
She's been married seven times before

And every one was an Henry (Henry)
She wouldn't have a Willy or a Sam (No Sam)
I'm her eighth old man, I'm Henry
Henry the eighth I am

Second verse, same as the first

I'm Henry the eighth, I am
Henry the eighth, I am, I am
I got married to the widow next door
She's been married seven times before

And every one was an Henry (Henry)
She wouldn't have a Willy or a Sam (No Sam)
I'm her eighth old man, I'm Henry
Henry the eighth I am
</p>
                    </AboutContent>
                <PicsContainer>
                    <Pics src={TopPic}></Pics>
                    <Pics src={MiddlePic}></Pics>
                    <Pics src={BottomPic}></Pics>
                </PicsContainer>
            </AboutContainer>       
        </>    
    )
}

export default About
