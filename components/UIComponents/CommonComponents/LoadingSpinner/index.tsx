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

const animation = keyframes`
    0%{
        transform: translateY(0px);
    }50%{
        transform: translateY(-30px);
    }
    100%{
        transform: translateY(0px);
    }
    
`;

const Circle = styled.div`
    display: inline-block;
    margin: 0.6rem;
    width: 20px;
    height: 20px;
    border-radius: 15px;
    background-color: red;
    transform-origin: center;
    animation: ${animation} 3s 6s cubic-bezier(0.86, 0, 0.07, 1) infinite;
`;

const CircleRight = styled(Circle)`
    transform-origin: left;
    animation: ${animation} 3s 3s cubic-bezier(0.86, 0, 0.07, 1) infinite;
`;

const CircleLeft = styled(Circle)`
    transform-origin: right;
    animation: ${animation} 3s cubic-bezier(0.86, 0, 0.07, 1) infinite;
`;

export default LoadingSpinner;
