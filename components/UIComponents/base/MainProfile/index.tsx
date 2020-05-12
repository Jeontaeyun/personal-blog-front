import React from "react";
import styled from "styled-components";

type Props = {};

const MainProfile: React.FC<Props> = props => {
    return (
        <Container>
            <ProfileImage />
            <ButtonContainer>
                <SnsButton />
                <SnsButton />
                <SnsButton />
                <SnsButton />
            </ButtonContainer>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: auto;
`;

const ButtonContainer = styled.div`
    width: auto;
    height: 60px;
    background: white;
`;

const ProfileImage = styled.div`
    width: 160px;
    height: 160px;
    margin-bottom: 40px;
    border-radius: 80px;
    background: white;
`;

const SnsButton = styled.div`
    display: inline-block;
    width: 60px;
    height: 60px;
    background: red;
`;

export default MainProfile;
