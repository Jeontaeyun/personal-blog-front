import React, { useEffect, useState, MouseEvent } from "react";
import styled, { keyframes } from "styled-components";

interface IProps {
    isVisible?: boolean;
    text?: string;
    backgroundColor?: string;
    textColor?: string;
    position?: "topRight" | "topLeft" | "bottomRight" | "bottomLeft";
    onClick?: (event: MouseEvent) => void;
    priority?: number;
}

const TYToast: React.FC<IProps> = props => {
    const { isVisible, text } = props;
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        if (isVisible) {
            setVisible(isVisible);
            setTimeout(() => {
                setVisible(false);
            }, 4000);
        }
    }, [isVisible]);

    if (!isVisible) {
        return null;
    }

    return (
        <>
            <Wrapper visible={visible} {...props}>
                <Text>{text}</Text>
            </Wrapper>
        </>
    );
};

TYToast.defaultProps = {
    isVisible: true,
    text: "default toast",
    backgroundColor: "#e03131",
    position: "topLeft",
    textColor: "#ffffff",
    priority: 0
};

const visibleAnimation = position => {
    const isTop = position.indexOf("top") === 0;
    if (isTop) {
        return keyframes`
 0%{
  transform: translateY(-10px) scale(0.8);
  opacity: 0;
  display: none;
 }
 100%{
 transform: translateY(0) scale(1);
 opacity: 1;
 }
`;
    } else {
        return keyframes`
 0%{
  transform: translateY(10px) scale(0.8);
  opacity: 0;
  display: none;
 }
 100%{
 transform: translateY(0) scale(1);
 opacity: 1;
 }
`;
    }
};

const unVisibleAnimation = position => {
    const isTop = position.indexOf("top") === 0;
    if (isTop) {
        return keyframes`
 0%{
 transform: translateY(0) scale(1);
 opacity: 1;
 }
 100%{
 transform: translateY(-10px) scale(0.8);
 opacity: 0;
 display: none;
 }
`;
    } else {
        return keyframes`
 0%{
 transform: translateY(0) scale(1);
 opacity: 1;
 }
 100%{
 transform: translateY(10px) scale(0.8);
 opacity: 0;
 display: none;
 }
`;
    }
};

const VERTICAL_POSITION_INTERVAL = 40;

const Wrapper = styled.div<Partial<IProps> & { visible?: boolean }>`
    display: inline-block;
    position: fixed;
    ${props => {
        switch (props.position) {
            case "topRight":
                return `
                top : ${props.priority * VERTICAL_POSITION_INTERVAL}px;
                right: 0;
            `;
            case "topLeft":
                return `
                top : ${props.priority * VERTICAL_POSITION_INTERVAL}px;
                left: 0;
            `;
            case "bottomRight":
                return `
                bottom : ${props.priority * VERTICAL_POSITION_INTERVAL}px;
                right: 0;
            `;
            case "bottomLeft":
            default:
                return `
                bottom : ${props.priority * VERTICAL_POSITION_INTERVAL}px;
                left: 0;
            `;
        }
    }};
    padding: 0 1rem;
    margin: 1rem;
    height: 30px;
    width: auto;
    border-radius: 5px;
    background: ${props => props.backgroundColor};
    color: ${props => props.textColor};
    animation: ${props => (props.visible ? visibleAnimation(props.position) : unVisibleAnimation(props.position))}
        alternate 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    animation-fill-mode: forwards;
`;

const Text = styled.p`
    position: relative;
    text-align: center;
    width: 100%;
    margin: 0;
    top: 50%;
    transform: translateY(-50%);
`;

export default TYToast;
