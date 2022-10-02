import React from 'react';
import { Main } from '../main/main';
import { PoliVision } from '../poli-vision/poli-vision';
import { MainWrapper } from './main-content.style';


export const MainContent = (): JSX.Element => {
    return (
      
        <MainWrapper>
            <Main />

            <PoliVision/>
        </MainWrapper>
    );
};
