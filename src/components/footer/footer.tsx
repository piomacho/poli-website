import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link } from 'react-router-dom';
import { FooterMenuItems } from '../footer/menu-items/menu-items';
import { ContentWrapper } from '../layout.style';
import { FooterWrapper, Hr, FooterLogo, Copyright, Wrapper } from './footer.style';


export const Footer = observer((): JSX.Element => (  
    <FooterWrapper>
        <ContentWrapper>
            <Wrapper>
            <Link to="/">
                <FooterLogo  />
            </Link>
                
                <FooterMenuItems />
            </Wrapper>

            <Hr />

            <Copyright>ALL CAPPS 2022</Copyright>
        </ContentWrapper>
    </FooterWrapper>
));
