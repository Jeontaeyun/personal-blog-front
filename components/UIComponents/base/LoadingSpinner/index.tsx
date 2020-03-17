import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

interface IProps {
    isLoading: boolean;
    color?: string;
}

const LoadingSpinner: React.FC<IProps> = props => {
    const { isLoading } = props;
    if (isLoading) {
        return (
            <>
                <Wrapper>
                    <CircleTop />
                    <CircleRight />
                    <Circle />
                    <CircleBottom />
                    <CircleLeft />
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <defs>
                            <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                <feColorMatrix
                                    in="blur"
                                    mode="matrix"
                                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 16 -7"
                                    result="goo"
                                />
                                <feBlend in="SourceGraphic" in2="goo" />
                            </filter>
                        </defs>
                    </svg>
                </Wrapper>
            </>
        );
    } else {
        return null;
    }
};

const animationRight = keyframes`
    0%{
        transform: rotate(0);
    }50%{
        transform: rotate(180deg) translateX(40px);
    }
    80% {
        transform: rotate(260deg) translateX(20px);
    }
    100%{
        transform: rotate(360deg);
    }
`;

const animationTop = keyframes`
    0%{
        transform: rotate(0);
    }50%{
        transform: rotate(180deg) translateY(-40px);
    }
    80% {
        transform: rotate(260deg) translateY(-20px);
    }
    100%{
        transform: rotate(360deg);
    }
`;

const animationLeft = keyframes`
    0%{
        transform: rotate(0);
    }50%{
        transform: rotate(180deg) translateX(-40px);
    }
    80% {
        transform: rotate(260deg) translateX(-20px);
    }
    100%{
        transform: rotate(360deg);
    }
`;

const animationBottom = keyframes`
    0%{
        transform: rotate(0);
    }50%{
        transform: rotate(180deg) translateY(40px);
    }
    80% {
        transform: rotate(260deg) translateY(20px);
    }
    100%{
        transform: rotate(360deg) ;
    }
    
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    filter: url("#goo");
`;

const Circle = styled.div`
    display: inline-block;
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background-color: #f03e3e;
    transform-origin: center;
`;

const CircleTop = styled(Circle)`
    width: 20px;
    height: 20px;
    transform-origin: bottom;
    animation: ${animationTop} 3s linear infinite;
`;

const CircleBottom = styled(Circle)`
    width: 20px;
    height: 20px;
    transform-origin: top;
    animation: ${animationBottom} 3s linear infinite;
`;

const CircleRight = styled(Circle)`
    width: 20px;
    height: 20px;
    transform-origin: left;
    animation: ${animationRight} 3s linear infinite;
`;

const CircleLeft = styled(Circle)`
    width: 20px;
    height: 20px;
    transform-origin: right;
    animation: ${animationLeft} 3s linear infinite;
`;

export default LoadingSpinner;
