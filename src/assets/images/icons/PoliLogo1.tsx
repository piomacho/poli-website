import * as React from 'react';
import styled from 'styled-components';

const SvgElement = styled('svg')`
    height: auto;
`;

interface WarningIconPropsType {
    className?: string;
    onClick?: () => void;
}

export const PoliLogo = ({ className, onClick }: WarningIconPropsType): JSX.Element => {

    return (
        <SvgElement
            width='275'
            height='240'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={className}
            onClick={onClick}
            viewBox='0 0 275 240'
        >
          <path d="M0 85.5134C0 38.5618 38.0618 0.5 85.0134 0.5H170.027V170.527H85.0134C38.0618 170.527 0 132.465 0 85.5134Z" fill="white"/>
          <path d="M274.289 96.7414C274.289 44.0315 231.559 1.30176 178.849 1.30176V102.355H274.289V96.7414Z" fill="white"/>
          <path d="M178.849 170.527C211.184 170.527 237.396 144.314 237.396 111.98V111.178H178.849V170.527Z" fill="white"/>
          <path d="M126.17 193.962L161.425 230.569C164.547 233.81 170.027 231.6 170.027 227.1V150.664C170.027 147.903 167.788 145.664 165.027 145.664H87.9013C83.3861 145.664 81.1837 151.176 84.4554 154.287L126.17 193.962Z" fill="white"/>
          <circle cx="111.48" cy="65.4632" r="24.0604" fill="black"/>
        </SvgElement>
    );
};
