import React, { useRef, useCallback } from "react";
import Modal, { IModal } from "components/UIComponents/base/modal/Modal";
import styled from "styled-components";

interface IProps {}

const LoginModal: React.FC<IProps> = props => {
    const modalRef = useRef<IModal>(null);
    const onClickButton = useCallback(() => {
        modalRef && modalRef.current && modalRef.current.open();
    }, []);
    return (
        <>
            <Modal ref={modalRef}>
                <Container>
                    <LeftGrid onClick={onClickButton}>
                        <BearIcon data={"icon/bearIcon.svg"} type={"image/svg+xml"} />
                    </LeftGrid>
                    <RightGrid></RightGrid>
                </Container>
            </Modal>
            <div onClick={onClickButton}>wefew</div>
        </>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const LeftGrid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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

const BearIcon = styled.object`
    display: flex;
    width: 60%;
`;

export default LoginModal;
