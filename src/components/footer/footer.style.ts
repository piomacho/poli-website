import { PoliLogo } from '../../assets/images/icons/PoliLogo1';
import styled from 'styled-components';

export const FooterWrapper = styled('footer')`
    background: ${({ theme }): string => theme.footer.bgColor};
    padding: 56px 24px 40px;
    @media ${({ theme }): string => theme.mediaQuery.largeDesktop} {
        padding: 64px 24px 51px;
    }
`;

export const Wrapper = styled('div')`
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    @media ${({ theme }): string => theme.mediaQuery.desktop} {
        flex-direction: row;
        justify-content: space-between;
        padding: 0 8px;
    }
`;

export const FooterLogo = styled(PoliLogo)`
    width: 50px;
`;

export const Hr = styled('hr')`
    background: ${({ theme }): string => theme.footer.bgColorSecondary};
    border: 0;
    display: block;
    height: 1px;
    margin: 24px 0;
`;

export const Copyright = styled('p')`
    color: ${({ theme }): string => theme.footer.txtColorSecondary};
    font-size: ${({ theme }): string => theme.fontSize.small};
    margin: 0 auto;
    text-align: center;
    @media ${({ theme }): string => theme.mediaQuery.desktop} {
        text-align: left;
    }
`;
