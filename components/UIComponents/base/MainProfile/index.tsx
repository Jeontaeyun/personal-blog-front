import React from "react";
import styled from "styled-components";

import { Image, Icon } from "public";
import config from "config";

type Props = {};

const MainProfile: React.FC<Props> = props => {
    return (
        <Container>
            <ProfileImage src={Image.profile} alt={"프로필 이미지"} />
            <ButtonContainer>
                <SnsButton href={config.sns.linkedIn} src={Icon.sns.linkedIn} />
                <SnsButton href={config.sns.medium} src={Icon.sns.medium} />
                <SnsButton href={config.sns.instagram} src={Icon.sns.instagram} />
                <SnsButton href={config.sns.facebook} src={Icon.sns.facebook} />
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

const SnsButton = styled.a<{ src: string }>`
    display: inline-block;
    width: 40px;
    height: 40px;
    margin: 0px 8px;
    mask: url('${props => props.src}');
    mask-size: contain;
    background: ${props => props.theme.color.white};
`;

export default MainProfile;
