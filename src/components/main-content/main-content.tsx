import React from 'react';
import { Main } from '../main/main';
import { CommissionPlan } from '../poli-vision/poli-vision';
import { MainWrapper } from './main-content.style';


export const MainContent = (): JSX.Element => {
    return (
      
        <MainWrapper>
            <Main />

            <CommissionPlan/>
        </MainWrapper>
    );
};
