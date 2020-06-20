import React from "react";
import styled from "styled-components";
import MainProfile from "components/UIComponents/base/MainProfile";

type Props = {};

const AboutPage: React.FC<Props> = props => {
    return (
        <Container>
            <ContentsContainer>
                <IntroduceContainer>
                    <MainIntroduceWrapper>
                        <IntroduceText>{`I'm Stark Jeon`}</IntroduceText>
                        <IntroduceDescriptionText>
                            {
                                "Typescript and Node service developer focusing on make world better with enthusiastic people"
                            }
                        </IntroduceDescriptionText>
                        <IntroduceDescriptionText>
                            {
                                "Under this description, You can check my portfolio and article. Although that is written with english or korean or whatever, you can read with google."
                            }
                        </IntroduceDescriptionText>
                        <IntroduceDescriptionText>
                            {"So, if you want to know about me, just contact please"}
                        </IntroduceDescriptionText>
                    </MainIntroduceWrapper>
                </IntroduceContainer>
            </ContentsContainer>
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
    background: #e57273;
    vertical-align: top;
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        display: none;
    }
`;

const DescriptionContainer = styled.div`
    display: inline-block;
    width: 40%;
    min-height: 1200px;
    background: ${props => props.theme.color.black99};
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

const IntroduceContainer = styled.div`
    display: flex;
    justify-content: flex-end;
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

const MainIntroduceWrapper = styled.div`
    width: 420px;
    height: auto;
    margin-right: 40px;
    text-align: left;
`;

const IntroduceText = styled.p`
    font-size: 48px;
    font-weight: 900;
    line-height: 1.6;
`;

const IntroduceDescriptionText = styled.p`
    font-size: 16px;
    text-align: left;
    margin: 24px 0px;
    line-height: 1.6;
    white-space: pre-line;
`;

export default AboutPage;
