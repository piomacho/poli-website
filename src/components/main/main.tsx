import React from 'react';
import { ContentWrapper } from '../layout.style';
import { SectionWrapper, BackgroundWrapper, HeaderWrapper, DownloadWrapper, Img, ArticleHeader, HeaderInfo } from '../main/main.style';
import { observer } from 'mobx-react-lite';
import AppleLogo from './apple_badge.svg';
import QRCode from 'react-qr-code';
import useWindowDimensions from 'state/getWindowDimensions';

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

export const Main = observer((): JSX.Element => {
    const { height, width } = useWindowDimensions();
    const goToAppStore = () => {
        window.location.href = 'https://apps.apple.com/us/app/twitter/id333903271';
    }
    return (
        <BackgroundWrapper>
        <SectionWrapper>
            <ContentWrapper>
                <HeaderWrapper>
                    <HeaderInfo>Poli</HeaderInfo>
                    <ArticleHeader>Simplifying Politics
                    </ArticleHeader>
                    <DownloadWrapper>
                        <Img src={AppleLogo} alt="App store logo" onClick={goToAppStore} />
                        <QRCode size={width > 768 ? 100 : 60} value="https://apps.apple.com/us/app/twitter/id333903271"/>
                    </DownloadWrapper>
                   
                   
                </HeaderWrapper>
            </ContentWrapper>
                        
        </SectionWrapper >
        </BackgroundWrapper>
        );
});
