import React from 'react';
import { observer } from "mobx-react-lite";
import BackIcon from './back-icon.svg';
import { Img, SectionWrapper, Title } from './terms.style';
import { privacy } from './content/terms';
import { Link } from 'react-router-dom';

export const PrivacyPolicy = observer((): JSX.Element =>{ 
    return ( 
        <SectionWrapper>
             <Link to="/">
                <Img src={BackIcon} alt="Back button" />
             </Link>
            <Title>Privacy Policy</Title>
            <div dangerouslySetInnerHTML={{ __html: privacy }} />
        </SectionWrapper>);
    });