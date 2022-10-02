import * as React from 'react';
import styled from 'styled-components';

const SvgElement = styled('svg')`
    height: auto;
`;

interface WarningIconPropsType {
    className?: string;
    onClick?: () => void;
}

export const ArrowIcon = ({ className, onClick }: WarningIconPropsType): JSX.Element => {

    return (
        <SvgElement
            width='122'
            height='122'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className={className}
            onClick={onClick}
            viewBox='0 0 122 122'
        >
            <path 
                d='d="M61.44,0A61.51,61.51,0,1,1,18,18,61.25,61.25,0,0,1,61.44,0Zm5,45.27A7.23,7.23,0,1,0,56.14,35.13L35,56.57a7.24,7.24,0,0,0,0,10.15l20.71,21A7.23,7.23,0,1,0,66.06,77.62l-8.73-8.87,24.86-.15a7.24,7.24,0,1,0-.13-14.47l-24.44.14,8.84-9Z"'
                fill='#000'
            />
        
        </SvgElement>
    );
};

