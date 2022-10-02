import React from 'react';
import { GlobalStyleReset, PageWrapper } from './layout.style';
import {Theme} from '../Theme';

interface LayoutPropsType {
    children: React.ReactNode;
}


export const Layout = ({ children }: LayoutPropsType): JSX.Element => {

    return (
        <Theme>
                <PageWrapper>
                    <GlobalStyleReset />
                    {children}
                </PageWrapper>
                </Theme>
    );
};
