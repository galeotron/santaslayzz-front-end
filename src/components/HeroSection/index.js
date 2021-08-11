import React from "react";
import { HeroContainer, HeroBg, VideoBg, VideoLoop } from "./HeroElements";
import mainVideo from "../../videos/intro.mp4";
import loopVideo from "../../videos/intro-loop.mp4";

const HeroSection = ({ mainVideoEnded, setMainVideoEnded }) => {
  // const vidLength = Video.duration;

  // var vid = Video;
  // function playVid() {
  //     Video.play();
  //     alert("Playing")
  // }

  // function pauseVid() {
  //     vid.pause();
  //     alert("pausing")
  // }

  const onVideoEnd = () => {
    setMainVideoEnded(true);
  };

  const videoBgProps = {
    autoPlay: true,
    loop: mainVideoEnded,
    src: mainVideoEnded ? loopVideo : mainVideo,
    type: "/video/mp4",
    onEnded: mainVideoEnded ? undefined : onVideoEnd,
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        {/* {mainVideoEnded? (
                <>
                Video2
                <VideoBg autoPlay loop src={Video2} type='/video/mp4'/>
                </>
                ) : (
                <>
                Video1
                <VideoBg onEnded={onVideoEnd} autoPlay src={Video2} type='/video/mp4' />
                </>
                )} */}
        <VideoBg {...videoBgProps} />

        <VideoLoop autoPlay src={loopVideo} type="/video/mp4"></VideoLoop>
      </HeroBg>
    </HeroContainer>
  );
};

export default HeroSection;
