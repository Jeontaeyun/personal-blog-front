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
                    <LeftGridContainer>
                        <BearIcon data={"icon/bearIcon.svg"} type={"image/svg+xml"} />
                    </LeftGridContainer>
                    <RightGridContainer>
                        <LoginTitle>{loginText()}</LoginTitle>
                        <LoginSectionTitle>{`이메일로 ${loginText()}`}</LoginSectionTitle>
                        <LocalLoginContainer>
                            <EmailInput type={"text"} placeholder={"이메일을 입력하세요."} />
                            <PasswordInput type={"password"} placeholder={"비밀번호를 입력하세요."} />
                            <LocalLoginButton>{"로그인"}</LocalLoginButton>
                        </LocalLoginContainer>
                        <LoginSectionTitle>{`소셜 계정으로 ${loginText()}`}</LoginSectionTitle>
                        <OauthLoginContainer>
                            <LoginButton />
                            <LoginButton />
                            <LoginButton />
                        </OauthLoginContainer>
                        <ChangeStateText>
                            {stateInfoText()}
                            <ChangeStateButton onClick={onToggleModalState}>{stateButtonText()}</ChangeStateButton>
                        </ChangeStateText>
                    </RightGridContainer>
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

const LeftGridContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 210px;
    height: 100%;
    background: #f1f3f5;
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        display: none;
    }
`;

const RightGridContainer = styled.div`
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

const LocalLoginContainer = styled.div`
    width: 100%;
`;

const OauthLoginContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 80px;
`;

const LoginTitle = styled.div`
    font-size: 20px;
    font-weight: bolder;
    margin-top: 36px;
`;

const LoginButton = styled.div`
    cursor: pointer;
    width: 60px;
    height: 60px;
    border-radius: 100px;
    background: red;
`;

const EmailInput = styled.input`
    width: 100%;
    height: 36px;
    font-size: 14px;
    box-sizing: border-box;
    padding: 8px;
    border: 1px solid ${props => props.theme.color.black70};
`;

const PasswordInput = styled.input`
    width: 100%;
    height: 36px;
    font-size: 14px;
    box-sizing: border-box;
    margin: 4px 0;
    padding: 8px;
    border: 1px solid ${props => props.theme.color.black70};
`;

const LocalLoginButton = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 36px;
    color: white;
    font-weight: bolder;
    background: ${props => props.theme.color.main};
`;

const LoginSectionTitle = styled.div`
    color: ${props => props.theme.color.black80};
    font-size: 16px;
    font-weight: bold;
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
    width: 50%;
`;

export default LoginModal;
