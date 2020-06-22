import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

import { Icon } from "public";
import config from "config";

type Props = {
    children?: React.ReactChild;
    isView?: boolean;
};

enum NAVIGATION {
    HOME = "HOME",
    ABOUT = "ABOUT",
    ARCHIVES = "ARCHIVES",
    PORTFOLIO = "PORTFOLIO",
    POST = "POST"
}

const NAVIGATION_TEXT: { [key in keyof typeof NAVIGATION]: string } = {
    [NAVIGATION.HOME]: "home",
    [NAVIGATION.ABOUT]: "About",
    [NAVIGATION.ARCHIVES]: "아카이브",
    [NAVIGATION.PORTFOLIO]: "포트폴리오",
    [NAVIGATION.POST]: "포스트"
};

const NAVIGATION_LINK: { [key in keyof typeof NAVIGATION]: string } = {
    [NAVIGATION.HOME]: "/",
    [NAVIGATION.ABOUT]: "/about",
    [NAVIGATION.ARCHIVES]: "/archives",
    [NAVIGATION.PORTFOLIO]: "/portfolio",
    [NAVIGATION.POST]: "/post"
};

const FollowingNavigator: React.FC<Props> = props => {
    const { isView } = props;
    const [view, setView] = useState(isView);

    const navigation = Object.keys(NAVIGATION).map((key: NAVIGATION) => {
        switch (key) {
            case NAVIGATION.HOME:
                return (
                    <Link href="/" key={key}>
                        <Logo />
                    </Link>
                );
            case NAVIGATION.ABOUT:
            case NAVIGATION.ARCHIVES:
            case NAVIGATION.PORTFOLIO:
            case NAVIGATION.POST:
                return (
                    <Link href={NAVIGATION_LINK[key]} key={key}>
                        <Menu>{NAVIGATION_TEXT[key]}</Menu>
                    </Link>
                );
        }
    });

    useEffect(() => {
        setView(isView);
    }, [isView]);

    return (
        <Container view={view}>
            <MenuContainer>
                {navigation}
                <IconList>
                    <CustomIcon src={Icon.sns.gitRound}>
                        <a href={config.sns.github} />
                    </CustomIcon>
                    <CustomIcon src={Icon.sns.instagramRound}>
                        <a href={config.sns.instagram} />
                    </CustomIcon>
                </IconList>
            </MenuContainer>
        </Container>
    );
};

const Container = styled.div<{ view: boolean }>`
    position: fixed;
    z-index: ${props => props.theme.zIndex.navigation};
    width: 100%;
    height: 50px;
    top: 0;
    left: 0;
    transform: translateY(${props => (props.view ? 0 : "-50px")});
    opacity: ${props => (props.view ? 1 : 0)};
    background: white;
    -webkit-box-shadow: 0px 2px 6px -2px rgba(41, 42, 43, 0.16);
    -moz-box-shadow: 0px 2px 6px -2px rgba(41, 42, 43, 0.16);
    box-shadow: 0px 2px 6px -2px rgba(41, 42, 43, 0.16);
    -webkit-transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    -moz-transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    -ms-transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    -o-transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        height: 100px;
        transform: translateY(${props => (props.view ? 0 : "-100px")});
        background: "red";
    }
    will-change: transform, opacity;
`;

const MenuContainer = styled.div`
    position: relative;
    width: 80%;
    height: 100%;
    margin: 0 auto;
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        width: 100%;
        text-align: center;
    }
`;

const IconList = styled.span`
    display: inline-block;
    position: absolute;
    right: 0;
    height: 100%;
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        position: static;
    }
`;

const Logo = styled.nav`
    cursor: pointer;
    display: inline-block;
    height: 100%;
    width: 150px;
    background: url("./logo_connect_dot.png");
    border-radius: 0.1rem;
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        display: block;
        margin: 0 auto;
        width: 150px;
        height: 50%;
    }
`;

const Menu = styled.nav`
    cursor: pointer;
    font-size: 16px;
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    margin: 0;
    height: 100%;
    padding: 18px 24px;
    border-radius: 2px;
    &:hover {
        background: ${props => props.theme.color.achromatic};
        color: ${props => props.theme.color.main};
    }
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        height: 50px;
        font-size: 16px;
        padding: 18px 12px;
    }
    @media screen and (max-width: ${props => props.theme.smallPoint}) {
        height: 50px;
        font-size: 14px;
        padding: 18px 4px;
    }
`;

const CustomIcon = styled.div<{ src: string }>`
  display: inline-block;
  position:relative;
  height: 100%;
  width: 25px;
  padding: 0 0.3rem;
  border-radius: 0.1rem;
  cursor: pointer;
  a{
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 20px;
    height: 20px;
    -webkit-mask-image: url("${props => props.src}");
    mask-image: url("${props => props.src}");
    background-color: black;
  }
  &:hover{
    background: ${props => props.theme.color.achromatic};
    a{
      background-color: ${props => props.theme.color.main};
    }
  }
  @media screen and (max-width: ${props => props.theme.mediumPoint}) {
      height: 50px;
  }
`;

export default FollowingNavigator;
