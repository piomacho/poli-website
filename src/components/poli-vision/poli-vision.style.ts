import styled from 'styled-components';

export const SectionWrapper = styled('div')`
    background: #F5F6FB;
    color: ${({ theme }): string => theme.mainSection.dark.txtColorSecondary};
    position: relative;
    padding: 44px 24px 72px;

`;

export const ViewWrapper = styled('div')`
    @media ${({ theme }): string => theme.mediaQuery.desktop} {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
    }
`;

export const SectionHeader = styled('h2')`
    color: ${({ theme }): string => theme.mainSection.dark.txtColor};
    font-size: ${({ theme }): string => theme.fontSize.big};
    line-height: 1.25;
    text-align: center;
    margin-bottom: 24px;
    margin-top: 0;

    &::first-letter {
        text-transform: capitalize;
    }

    @media ${({ theme }): string => theme.mediaQuery.desktop} {
        margin-top: 113px;
        text-align: left;
        max-width: 450px;
        font-size: ${({ theme }): string => theme.fontSize.xBig};
        line-height: 1.2;
    }
`;

export const SubHeaderWrapper = styled('article')``;

// export const SubHeaderArticle = styled('p')`
//     color: ${({ theme }): string => theme.mainSection.dark.txtColorSecondary};
//     margin: 24px auto;
//     text-align: center;
//     max-width: 600px;

//     @media ${({ theme }): string => theme.mediaQuery.desktop} {
//         text-align: left;
//         max-width: 450px;
//         font-size: ${({ theme }): string => theme.fontSize.regular};
//         line-height: 1.5;
//         margin: 0 0 40px 0;
//     }
// `;

// export const List = styled('ul')`
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     margin: 16px auto 0;
//     max-width: 320px;

//     @media ${({ theme }): string => theme.mediaQuery.desktop} {
//         display: block;
//         margin: 0;
//         max-width: none;
//     }
// `;

// export const ListItem = styled('li')`
//     align-items: center;
//     color: ${({ theme }): string => theme.mainSection.dark.txtColorQuaternary};
//     display: inline-flex;
//     flex-flow: column nowrap;
//     font-weight: ${({ theme }): string => theme.fontWeight.bold};
//     justify-content: center;
//     margin-bottom: 24px;
//     position: relative;
//     &:nth-child(odd) {
//         &::after {
//             background: ${({ theme }): string => theme.mainSection.dark.borderColor};
//             bottom: 6px;
//             content: '';
//             margin: auto 0;
//             position: absolute;
//             top: 6px;
//             width: 1px;
//             left: 100%;
//         }
//     }
//     @media ${({ theme }): string => theme.mediaQuery.desktop} {
//         padding-right: 24px;
//         margin-right: 24px;
//         margin-bottom: 40px;
//         &:not(:last-of-type) {
//             &::after {
//                 background: ${({ theme }): string => theme.mainSection.dark.borderColor};
//                 bottom: 6px;
//                 content: '';
//                 margin: auto 0;
//                 position: absolute;
//                 top: 6px;
//                 width: 1px;
//                 left: 100%;
//             }
//         }
//     }
// `;

// export const CheckIconWrapper = styled(CheckAllIcon)`
//     margin-bottom: 4px;

//     @media ${({ theme }): string => theme.mediaQuery.desktop} {
//         align-self: flex-start;
//     }
// `;

// export const Item = styled('div')`
//     @media ${({ theme }): string => theme.mediaQuery.desktop} {
//         align-self: flex-start;
//         font-size: 16px;
//     }
// `;

// export const ButtonWrapper = styled(Button)`
//     display: block;
//     margin: 0 auto;
//     max-width: 400px;
//     width: 100%;
//     @media ${({ theme }): string => theme.mediaQuery.desktop} {
//         margin: 0;
//         max-width: 214px;
//     }
// `;

// export const ImageWrapper = styled('div')`
//     max-width: 293px;
//     width: 100%;
//     margin: 0 auto 39px;
//     @media ${({ theme }): string => theme.mediaQuery.desktop} {
//         margin: 100px 0 0;
//         max-width: 100%;
//         padding-right: 100px;
//     }
//     @media ${({ theme }): string => theme.mediaQuery.largeDesktop} {
//         margin-left: -6px;
//         padding-right: 166px;
//     }
// `;

// export const Picture = styled('picture')`
//     display: block;
//     width: 100%;
// `;

// export const Source = styled('source')`
//     display: block;
//     width: 100%;
// `;

export const Img = styled('img')`
    display: block;
    width: 100%;
`;

export const WaveImg = styled('img')`
   position: absolute;
    top: -30px;
    left: 0;
    width: 100%;

    @media screen and (min-width: 630px) {
        top: -42px;
    }

    @media screen and (min-width: 900px) {
        top: -75px;
    }
`;


export const Wrapper = styled('div')`
    margin: 0 auto;
    width: 300px;
    height: auto;
`;

export const TextDesc = styled('p')`
    color: #000;
    white-space: pre-wrap;
`;
export const TextTitle = styled('p')`
    color: #000;
    font-weight: 700;
    @media ${({ theme }): string => theme.mediaQuery.tablet} {
        font-size: 22px;
    }
    @media ${({ theme }): string => theme.mediaQuery.desktop} {
        font-size: 28px;
    }
   
`;