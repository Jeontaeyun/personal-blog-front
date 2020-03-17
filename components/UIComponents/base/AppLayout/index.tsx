import * as React from "react";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import SideBottomButton from "../../post/SideBottomButton";
import ProfileImage from "../ProfileImage";
import HeaderComponent from "../HeaderComponent";
import FollowingNavigator from "../FollowingNavigator";
import FooterCopy from "../FooterCopy";

interface IProps {
    MainContents: any;
}

const AppLayout: React.FC<IProps> = props => {
    const { MainContents } = props;
    const [isFollowingNav, setIsFollowingNav] = useState(false);
    const scrollEvent = (event: any) => {
        const crossBrowsingTop = document.documentElement.scrollTop || document.body.scrollTop;
        const shouldSetVisible = crossBrowsingTop > 400;
        if (shouldSetVisible) setIsFollowingNav(true);
        else setIsFollowingNav(false);
    };
    useEffect(() => {
        window.addEventListener("scroll", scrollEvent);
        return () => {
            window.removeEventListener("scroll", scrollEvent);
        };
    }, []);

    return (
        <>
            <FollowingNavigator isView={isFollowingNav} />
            <Following>{"▼"}</Following>
            <Header>
                <HeaderComponent />
                <LayoutProfile size="200px" />
            </Header>
            <Main>{MainContents}</Main>
            <Footer>
                <FooterCopy />
            </Footer>
            <SideBottomButton size="40px" />
        </>
    );
};

AppLayout.defaultProps = {
    MainContents: "Main"
};

const Header = styled.div`
    position: relative;
    margin: 0;
    width: 100%;
    height: 400px;
    background: ${props => props.theme.backgroundColor};
`;

const Main = styled.div`
    margin: 8rem auto;
    width: 100%;
    background: white;
`;

const boxFade = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Following = styled.div`
    position: absolute;
    color: white;
    z-index: 120;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    animation: ${boxFade} 1s 0s infinite cubic-bezier(0.25, 0.85, 0.55, 0.75) alternate;
`;

const Footer = styled.div`
    position: relative;
    width: 100%;
    padding-top: 1rem;
    font-weight: 700;
    padding-bottom: 1rem;
    background: ${props => props.theme.mainColor};
`;

const LayoutProfile = styled(ProfileImage)`
    position: absolute;
    z-index: 100;
    bottom: -100px;
    left: 50%;
    transform: translate(-50%);
    &:hover {
        cursor: pointer;
    }
`;

export default AppLayout;
