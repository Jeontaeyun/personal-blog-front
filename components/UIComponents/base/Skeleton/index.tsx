import React from "react";
import styled, { keyframes } from "styled-components";

interface IProps {}

const Skeleton: React.FC<IProps> = props => {
    return <SkeletonContainer />;
};

const SkeletonAnimating = keyframes`
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
`;

const SkeletonContainer = styled.div`
    display: inline-block;
    width: 100%;
    height: 100%;
    background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
    background-size: 400% 400%;
    animation: ${SkeletonAnimating} 2s ease-in-out infinite;
`;

export default Skeleton;
