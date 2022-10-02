import styled, { createGlobalStyle } from 'styled-components';

import Poppins400 from '../assets/fonts/poppins-regular.woff2';
import Poppins600 from '../assets/fonts/poppins-semibold.woff2';
import Poppins700 from '../assets/fonts/poppins-bold.woff2';

export const GlobalStyleReset = createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: url(${Poppins400}) format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Poppins';
        src: url(${Poppins600}) format('woff2');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Poppins';
        src: url(${Poppins700}) format('woff2');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    :root {
        --font-size: 10px;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    *:focus {
        outline: none;
    }

    html,
    body,
    #___gatsby,
    #gatsby-focus-wrapper {
        height: 100%;
    }

    html {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        font-size: var(--font-size);
        text-rendering: optimizelegibility;
        scroll-behavior: smooth;
        scroll-snap-type: y mandatory;
        scroll-padding-top: 46px;
        @media ${({ theme }): string => theme.mediaQuery.largeDesktop} {
            scroll-padding-top: 86px;
        }
    }

    body {
        background-color: #cdcdcd;
        color: white;
        font-family: 'Poppins', Arial, Helvetica, sans-serif;
        font-size: 1.4rem;
        font-weight: ${({ theme }): string => theme.fontWeight.regular};
        line-height: 1.5;
        margin: 0;
        overflow-x: hidden;
        padding: 0;
    }

    ol, ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    b, strong {
        font-weight: 700;
    }
    
    p {
        margin: 16px 0;
    }

    h1 {
        font-size: ${({ theme }): string => theme.fontSize.xBig};
        font-weight: ${({ theme }): string => theme.fontWeight.bold};
        line-height: 1.2;
    }

    h2 {
        font-size: ${({ theme }): string => theme.fontSize.big};
        font-weight: ${({ theme }): string => theme.fontWeight.bold};
        line-height: 1.25;
    }

    h3 {
        font-size: ${({ theme }): string => theme.fontSize.medium};
        font-weight: ${({ theme }): string => theme.fontWeight.bold};
        line-height: 1.3334;
    }

    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit;
    }
    
    a {
        color: ${({ theme }): string => theme.links.light.txtColor};
        text-decoration: none;
        transition: color 0.2s ease;
        &:hover {
            color: ${({ theme }): string => theme.links.light.txtColorSecondary};
        }
    }
`;

export const PageWrapper = styled('div')`
    height: 100%;
`;

export const ContentWrapper = styled('div')`
    margin: 0 auto;
    max-width: 1144px;
    padding: 0;
`;
