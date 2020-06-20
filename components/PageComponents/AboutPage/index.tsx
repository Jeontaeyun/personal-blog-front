import React from "react";
import styled from "styled-components";
import MainProfile from "components/UIComponents/base/MainProfile";

type Props = {};

const AboutPage: React.FC<Props> = props => {
    return (
        <Container>
            <ContentsContainer></ContentsContainer>
            <DescriptionContainer>
                <ProfileContainer>
                    <MainProfileWrapper>
                        <MainProfile />
                    </MainProfileWrapper>
                </ProfileContainer>
            </DescriptionContainer>
        </Container>
    );
};

AboutPage.defaultProps = {};

const Container = styled.div`
    width: 100%;
    height: 100%;
    min-width: 1020px;
    min-height: 1200px;
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        min-width: 100%;
    }
`;

const ContentsContainer = styled.div`
    display: inline-block;
    width: 60%;
    height: 100%;
    min-height: 1200px;
    background: ${props => props.theme.color.black10};
    vertical-align: top;
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        display: none;
    }
`;

const DescriptionContainer = styled.div`
    display: inline-block;
    width: 40%;
    min-height: 1200px;
    background: ${props => props.theme.color.main100};
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        width: 100%;
    }
`;

const ProfileContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 600px;
    box-sizing: border-box;
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        justify-content: center;
        align-items: center;
    }
`;

const MainProfileWrapper = styled.div`
    width: 320px;
    height: auto;
`;

export default AboutPage;
