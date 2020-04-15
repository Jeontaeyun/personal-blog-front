import React from "react";
import Modal from "components/UIComponents/base/modal/Modal";
import styled from "styled-components";

interface IProps {}

const LoginModal: React.FC<IProps> = props => {
    return (
        <Modal>
            <Container>
                <LeftGrid></LeftGrid>
                <RightGrid></RightGrid>
            </Container>
        </Modal>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const LeftGrid = styled.div`
    display: inline-block;
    top: 0;
    left: 0;
    width: 210px;
    height: 100%;
    background: #f1f3f5;
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        display: none;
    }
`;

const RightGrid = styled.div`
    display: inline-block;
    max-width: 390px;
    width: 100%;
    height: 100%;
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        max-width: 100%;
    }
`;

export default LoginModal;
