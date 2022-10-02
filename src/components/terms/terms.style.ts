import { ArrowIcon } from 'assets/images/icons/ArrowIcon';
import styled from 'styled-components';

export const SectionWrapper = styled('div')`
    background: #F5F6FB;
    color: ${({ theme }): string => theme.mainSection.dark.txtColorSecondary};
    position: relative;
    padding: 20px;
    @media ${({ theme }): string => theme.mediaQuery.desktop} {
        padding: 50px;
    }
   
`;

export const Title = styled('p')`
    font-weight: 700;
    color: #000;
    font-size: 20px;
    @media ${({ theme }): string => theme.mediaQuery.desktop} {
        font-size: 28px;
    }
`;

export const Img = styled('img')`
    cursor: pointer;
    width: 25px;
    height: auto;

    @media ${({ theme }): string => theme.mediaQuery.desktop} {
        width: 30px;
    }
`;

export const Wrapper = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
`;