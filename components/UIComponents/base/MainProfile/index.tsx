import React from "react";
import styled from "styled-components";
import { Image } from "public";

type Props = {};

const MainProfile: React.FC<Props> = props => {
    return (
        <Container>
            <ProfileImage src={Image.profile} alt={"프로필 이미지"} />
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
`;

const ProfileImage = styled.img`
    width: 160px;
    height: 160px;
    margin-bottom: 40px;
    border-radius: 80px;
    object-fit: cover;
`;

const SnsButton = styled.div`
    display: inline-block;
    width: 60px;
    height: 60px;
    border: 1px solid white;
`;

export default MainProfile;
