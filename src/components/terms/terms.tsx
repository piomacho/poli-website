import React from 'react';
import { observer } from "mobx-react-lite";
import BackIcon from './back-icon.svg';
import { Img, SectionWrapper, Title, Wrapper } from './terms.style';
import { terms } from './content/terms';
import { Link } from 'react-router-dom';

export const Terms = observer((): JSX.Element =>{ 
    return ( 
        <SectionWrapper>
                <Link to="/">
                    <Img src={BackIcon} alt="Back button" />
                </Link>
                <Title>Terms and condtions</Title>
            
            <div dangerouslySetInnerHTML={{ __html: terms }} />
        </SectionWrapper>);
    });