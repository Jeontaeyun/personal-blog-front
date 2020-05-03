import React, { useRef, useCallback, useState, MouseEvent } from "react";
import Modal, { IModal } from "components/UIComponents/base/modal/Modal";
import styled from "styled-components";

enum MODAL_STATE {
    LOGIN = "LOGIN",
    SIGN_UP = "SIGN_UP"
}

interface IProps {}

const LoginModal: React.FC<IProps> = props => {
    const [modalState, setModalState] = useState(MODAL_STATE.LOGIN);
    const modalRef = useRef<IModal>(null);

    const onToggleModalState = useCallback(
        (event: MouseEvent<HTMLSpanElement>) => {
            switch (modalState) {
                case MODAL_STATE.LOGIN:
                    return setModalState(MODAL_STATE.SIGN_UP);
                case MODAL_STATE.SIGN_UP:
                    return setModalState(MODAL_STATE.LOGIN);
            }
        },
        [modalState]
    );

    const stateButtonText = () => {
        switch (modalState) {
            case MODAL_STATE.LOGIN:
                return "회원가입";
            case MODAL_STATE.SIGN_UP:
                return "로그인";
        }
    };

    const stateInfoText = () => {
        switch (modalState) {
            case MODAL_STATE.LOGIN:
                return "아직 회원이 아니신가요?";
            case MODAL_STATE.SIGN_UP:
                return "계정이 이미 있으신가요?";
        }
    };

    const loginText = () => {
        switch (modalState) {
            case MODAL_STATE.LOGIN:
                return "로그인";
            case MODAL_STATE.SIGN_UP:
                return "회원가입";
        }
    };

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
                    <RightGrid>
                        <LoginTitle>{loginText()}</LoginTitle>
                        <LoginSectionTitle>{`이메일로 ${loginText()}`}</LoginSectionTitle>
                        <LoginSectionTitle>{`소셜 계정으로 ${loginText()}`}</LoginSectionTitle>
                        <ChangeStateText>
                            {stateInfoText()}
                            <ChangeStateButton onClick={onToggleModalState}>{stateButtonText()}</ChangeStateButton>
                        </ChangeStateText>
                    </RightGrid>
                </Container>
            </Modal>
            <div onClick={onClickButton}>{"Sign Up"}</div>
        </>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`;

const LeftGrid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 210px;
    height: 100%;
    background: #f1f3f5;
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        display: none;
    }
`;

const RightGrid = styled.div`
    display: flex;
    display: inline-block;
    min-width: 390px;
    height: 100%;
    box-sizing: border-box;
    padding: 24px;
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        max-width: 100%;
    }
`;

const LoginTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-top: 36px;
`;

const LoginSectionTitle = styled.div`
    font-size: 16px;
    font-weight: bold;
    color: #adb5bd;
    margin: 18px 0;
`;

const ChangeStateText = styled.div`
    position: absolute;
    right: 24px;
    bottom: 24px;
`;

const ChangeStateButton = styled.span`
    cursor: pointer;
    color: ${props => props.theme.color.main};
    font-weight: bolder;
    margin-left: 8px;
`;

const BearIcon = styled.object`
    display: flex;
    width: 60%;
`;

export default LoginModal;
