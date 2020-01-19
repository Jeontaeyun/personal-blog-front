import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

interface IProps {
    isLoading: boolean;
}

const LoadingSpinner: React.FC<IProps> = props => {
    const { isLoading } = props;
    if (isLoading) {
        return (
            <>
                <CircleRight />
                <Circle />
                <CircleLeft />
            </>
        );
    } else {
        return null;
    }
};

const rotateRightAnimation = keyframes`
    0%{
        transform: rotate(0deg);
    }
    20%{
        transform: rotate(180deg);
    }
`;

const rotateAnimation = keyframes`
    0%{
        transform: translateY(-20px);
    }20%{
        transform: translateY(0px);
    }
    100%{
        transform: translateY(-20px);
    }
`;

const rotateLeftAnimation = keyframes`
    0%{
        transform: rotate(0deg);
    }
    20%{
        transform: rotate(-180deg);
    }
`;

const Circle = styled.div`
    display: inline-block;
    margin: 1rem;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    background-color: red;
    transform-origin: center;
    animation: ${rotateAnimation} 3s cubic-bezier(0.86, 0, 0.07, 1) infinite;
`;

const CircleRight = styled(Circle)`
    transform-origin: right;
    animation: ${rotateRightAnimation} 3s cubic-bezier(0.86, 0, 0.07, 1) infinite;
`;

const CircleLeft = styled(Circle)`
    transform-origin: left;
    animation: ${rotateLeftAnimation} 3s cubic-bezier(0.86, 0, 0.07, 1) infinite;
`;

export default LoadingSpinner;
