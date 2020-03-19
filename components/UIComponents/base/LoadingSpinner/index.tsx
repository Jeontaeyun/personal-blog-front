import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";

interface IProps {
    isLoading: boolean;
    color?: string;
}

const LoadingSpinner: React.FC<IProps> = props => {
    const { isLoading } = props;
    const containerRef = useRef<HTMLDivElement>(null);
    const [gooeyWidth, setgooeyWidth] = useState<number>(0);

    useEffect(() => {
        setgooeyWidth(containerRef.current.clientWidth);
    }, []);

    if (isLoading) {
        return (
            <Wrapper>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix
                                in="blur"
                                mode="matrix"
                                values="1 0 0 0 0
                                            0 1 0 0 0
                                            0 0 1 0 0  
                                            0 0 0 16 -7"
                                result="goo"
                            />
                            <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
                </svg>
                <MainCircle ref={containerRef}>
                    <Text>라라라라라라라라라ㅏ라라</Text>
                </MainCircle>
                <First width={gooeyWidth} />
                <Second width={gooeyWidth} />
            </Wrapper>
        );
    } else {
        return null;
    }
};

const animationRight = keyframes`
    0%{
        transform:  translateX(0px);
    }
    15%{
        transform: translateX(20px);
    }
    40%{
        transform: translateX(0px)
    }
    60%{
        transform: translateX(0px);
    }
    100%{
        transform: translateX(25px);
    }
`;

const animationLeft = keyframes`
    0%{
        transform:  translateX(0px);
    }
    20%{
        transform: translateX(0px);
    }
    40%{
        transform: translateX(-20px)
    }
    60%{
        transform: translateX(0px);
    }
    100%{
        transform: translateX(-25px);
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

const MainCircle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    padding: 0 24px;
    border-radius: 10px;
    position: absolute;
    background: ${props => props.theme.mainColor};
    transform-origin: center;
`;

const Text = styled.p`
    color: white;
    font-weight: 900;
    font-size: 16px;
    text-align: center;
    letter-spacing: 12px;
    margin: 0;
    margin-left: 12px;
    white-space: nowrap;
`;

const ChildCircle = styled.div<{ width: number }>`
    display: inline-block;
    position: absolute;
    z-index: -10;
    width: ${props => props.width + 20 + "px"};
    height: 40px;
    border-radius: 30px;
    background: ${props => props.theme.mainColor};
    transform-origin: center;
`;

const First = styled(ChildCircle)`
    animation: ${animationRight} 4s cubic-bezier(0.19, 1.01, 0.69, 0) infinite alternate;
`;
const Second = styled(ChildCircle)`
    animation: ${animationLeft} 4s cubic-bezier(0.19, 1.01, 0.69, 0) infinite alternate;
`;
const Third = styled(ChildCircle)``;

export default LoadingSpinner;
