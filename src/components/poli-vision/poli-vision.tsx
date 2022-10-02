import React from 'react';
import { SectionWrapper, Img, Wrapper, TextDesc, TextTitle, WaveImg } from './poli-vision.style';
import { ContentWrapper } from '../layout.style';

import { observer } from 'mobx-react-lite';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import FirstImage from './assets/1.png';
import SecondImage from './assets/2.png';
import ThirdImage from './assets/3.png';
import useWindowDimensions from 'state/getWindowDimensions';
import Wave from './assets/wave.svg';
import WaveMobile from './assets/waveMobile.svg';

export const CommissionPlan = observer((): JSX.Element =>{ 
    const { height, width } = useWindowDimensions();
    return (
        <SectionWrapper >
            {width > 1024 ? 
            <WaveImg src={Wave} alt="Wave" /> :
            <WaveImg src={WaveMobile} alt="Wave mobile" /> }
            <ContentWrapper>
            <Carousel interval={6000} swipeable={true} emulateTouch={true} autoPlay infiniteLoop  showArrows={false} showIndicators={true} showThumbs={false} showStatus={false}  
      >
                <Wrapper>
                    <TextTitle>Learn, Vote and Discuss</TextTitle>
                    <TextDesc>Whether it be political, social or environmental issues we will be posting interactive stories daily that users can engage with. Unlike mainstream media we take pride in having no political bias.</TextDesc>
                    <Img src={FirstImage} />
                </Wrapper>
                <Wrapper>
                <TextTitle>Track your Leaders</TextTitle>
                <TextDesc>People often forget that politicians work for them. We track their voting records to not only keep them accountable, but so users can make informed decisions on who is leading them.</TextDesc>
                    <Img src={SecondImage} />
                </Wrapper>
                <Wrapper>
                <TextTitle>Find your Political identity</TextTitle>
                <TextDesc>Data reveals all. We have built an engine that tracks users interactions with the platform that helps aggregate results and reveal their true political identity.{"\n"}{"\n"}</TextDesc>
                {/* <TextDesc>{" gg"}</TextDesc> */}
                    <Img src={ThirdImage} />
                </Wrapper>
                
            </Carousel>
            </ContentWrapper>
        </SectionWrapper>
    );});
