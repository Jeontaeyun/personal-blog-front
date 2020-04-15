import React, { MouseEvent, KeyboardEvent, TouchEvent, useState, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import styled, { keyframes, css } from "styled-components";
import { useScrollLock, useScrollCenter } from "lib/hooks/utils";

interface IProps {
    children?: React.ReactChild;
    onClickClose?: (event: MouseEvent<any>) => void;
    onClickBackground?: (event: MouseEvent<any>) => void;
}

const TAB_KEY = 9;
const ESC_KEY = 27;

const Modal: React.FC<IProps> = props => {
    const { children, onClickBackground } = props;
    const [visible, setVisble] = useState<boolean>(true);
    const [shouldClose, setShouldClose] = useState<boolean>(false);

    useScrollLock(visible);
    const [centerRef] = useScrollCenter(visible);

    const overlayRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(centerRef.current);

    const onHandleKeyDown = useCallback((event: KeyboardEvent<HTMLDivElement>) => {
        if (event.keyCode === ESC_KEY) {
            event.stopPropagation();
            console.log("ESC");
        }
    }, []);

    const onHandleMouseDown = useCallback(
        (event: MouseEvent<HTMLDivElement>) => {
            if (event.target === overlayRef.current) {
                event.preventDefault();
                setShouldClose(true);
                setTimeout(() => {
                    setVisble(false);
                    onClickBackground?.(event);
                }, 300);
            }
        },
        [onClickBackground]
    );

    const onHandleTouchStart = useCallback((event: TouchEvent<HTMLDivElement>) => {
        event.stopPropagation();
    }, []);

    if (!visible) {
        return null;
    }
    return (
        <Container onTouchStart={onHandleTouchStart} onMouseDown={onHandleMouseDown}>
            <Background ref={overlayRef} onKeyPress={onHandleKeyDown} />
            <ModalContainer shouldClose={shouldClose} ref={modalRef}>
                {children}
            </ModalContainer>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10000;
`;

const Background = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    opacity: 0.4;
    z-index: -10;
`;

const showUpAnimation = keyframes`
    0%{
        transform: scale(0) 
    }
    80%{
        transform: scale(1.1)
    }
    90%{
        transform: scale(0.9)
    }
    100%{
        transform: scale(1);
    }
`;

const showDownAnimation = keyframes`
    0%{
        transform: scale(1) 
    }
    10%{
        transform: scale(0.9)
    }
    20%{
        transform: scale(1.1)
    }
    100%{
        transform: scale(0);
    }
`;

const ModalContainer = styled.div<{ shouldClose: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    box-sizing: border-box;
    max-width: 600px;
    width: 100%;
    height: 100%;
    max-height: 480px;
    background: white;
    -webkit-overflow-scrolling: touch;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 12px 0px;
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        max-width: 100%;
        max-height: 100%;
    }
    ${props =>
        props.shouldClose
            ? css`
                  animation: ${showDownAnimation} forwards 0.4s ease-out;
              `
            : css`
                  animation: ${showUpAnimation} 0.4s backwards ease-in;
              `}
`;

export default Modal;
