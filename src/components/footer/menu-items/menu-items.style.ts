import styled from 'styled-components';

export const FooterMenuWrapper = styled('nav')`
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    margin-top: 15px;
    padding: 0 24px;
    @media ${({ theme }): string => theme.mediaQuery.desktop} {
        flex-direction: row;
        margin-right: -42px;
    }
`;

export const Item = styled('div')`
cursor: pointer;
margin-top: 10px;
    @media ${({ theme }): string => theme.mediaQuery.desktop} {
        margin-right: 20px;
        margin-top: 0;
    }
   
`;