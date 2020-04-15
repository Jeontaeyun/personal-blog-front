import React from "react";
import styled from "styled-components";

interface IProps {
    children?: React.ReactChild;
}

const Modal: React.FC<IProps> = props => {
    const { children } = props;
    return (
        <Container>
            <Background />
            <ModalContainer>
                <ModalLeftGrid></ModalLeftGrid>
                {children}
            </ModalContainer>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
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

const ModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    box-sizing: border-box;
    padding: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 600px;
    width: 100%;
    height: 100%;
    max-height: 480px;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 12px 0px;
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        max-height: 100%;
    }
`;

const ModalLeftGrid = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 210px;
    height: 100%;
    background: #f1f3f5;
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        display: none;
    }
`;

export default Modal;
