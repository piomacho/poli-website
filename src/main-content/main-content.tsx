import React from 'react';
import { CommissionPlan } from '../components/poli-vision/poli-vision';
import { Main } from '../components/main/main';

import { MainWrapper } from './main-content.style';



export const MainContent = (): JSX.Element => {
    return (
      
        <MainWrapper>
            <Main />

            <CommissionPlan/>
        </MainWrapper>
    );
};
