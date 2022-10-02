import styled from 'styled-components';
import bgMain from '../../assets/images/bg.png';

export const BackgroundWrapper = styled('div')`
    background-color:${({ theme }): string => theme.mainSection.dark.bgColorSecondary};
    padding: 0 20px 60px 20px;

    @media ${({ theme }): string => theme.mediaQuery.tablet} {
        padding: 0 35px;
    }

    @media ${({ theme }): string => theme.mediaQuery.xxLargeDesktop} {
        padding: 0 85px;
    }
`;

export const DownloadWrapper = styled('div')`
    display:flex;
    width: 200px;
    justify-content: space-between;
    margin-top: 30px;

    @media ${({ theme }): string => theme.mediaQuery.tablet} {
        margin-top: 100px;
        width: 250px;

    }
`;

export const SectionWrapper = styled('div')`
    background: ${({ theme }): string => theme.mainSection.dark.bgColorSecondary} url(${bgMain}) no-repeat center bottom /
        100% auto;
    color: ${({ theme }): string => theme.mainSection.dark.txtColorSecondary};
    /* padding: 264px 24px 72px; */
    height: 620px;

    @media ${({ theme }): string => theme.mediaQuery.xMobile} {
        background: ${({ theme }): string => theme.mainSection.dark.bgColorSecondary} url(${bgMain}) no-repeat center bottom /
        70% auto;
    }

    @media ${({ theme }): string => theme.mediaQuery.tablet} {
        background-image: url(${bgMain});
        background: ${({ theme }): string => theme.mainSection.dark.bgColorSecondary} url(${bgMain}) no-repeat center right /
        45% auto;
        height: 680px;
    }

    @media ${({ theme }): string => theme.mediaQuery.xxLargeDesktop} {
        background: ${({ theme }): string => theme.mainSection.dark.bgColorSecondary} url(${bgMain}) no-repeat center right /
        35% auto;
    }
    @media screen and (min-width: 2000px){
        background: ${({ theme }): string => theme.mainSection.dark.bgColorSecondary} url(${bgMain}) no-repeat center right /
        28% auto;
    }
`;

export const HeaderWrapper = styled('article')`
    text-align: left;

    padding-top: 30px;

    @media ${({ theme }): string => theme.mediaQuery.tablet} {
        padding-top: 40px;
    }
`;

export const HeaderInfo = styled('span')`
    color: #fa647c;
    font-size: ${({ theme }): string => theme.fontSize.medium};
    font-weight: ${({ theme }): string => theme.fontWeight.bold};
    line-height: 1.3334;
    @media ${({ theme }): string => theme.mediaQuery.desktop} {
        font-size: ${({ theme }): string => theme.fontSize.big};
        line-height: 1.25;
    }
`;

export const ArticleHeader = styled('h1')`
    color:#fff;
    margin: 12px 0;
    text-transform: capitalize;
    @media ${({ theme }): string => theme.mediaQuery.desktop} {
        font-size: ${({ theme }): string => theme.fontSize.xxBig};
        line-height: 1.125;
    }
`;

export const Article = styled('p')`
    color:pink;
    font-size: ${({ theme }): string => theme.fontSize.regular};
    margin: 12px 0;
    max-width: 403px;
`;

export const Img = styled('img')`
    cursor: pointer;
`;