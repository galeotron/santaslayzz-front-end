import React from 'react'
import { HeroContainer, HeroBg  } from '../HeroSection/HeroElements'
import { VideoLoopHome } from './HomePageElements'
import loopVideo from '../../videos/intro-loop.mp4'

const HomePage = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoLoopHome autoPlay loop src={loopVideo} type='/video/mp4'></VideoLoopHome>
            </HeroBg>
        </HeroContainer>
    )
}

export default HomePage
