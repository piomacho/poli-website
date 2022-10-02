import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as theme from './theme.config';

interface ThemePropsType {
    children: React.ReactNode;
}

export const Theme = ({ children }: ThemePropsType): JSX.Element => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

