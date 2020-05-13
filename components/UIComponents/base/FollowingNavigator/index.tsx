import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
interface IProps {
    children?: React.ReactChild;
    isView?: boolean;
}

const FollowingNavigator: React.FC<IProps> = props => {
    const { isView } = props;
    const [view, setView] = useState(false);
    useEffect(() => {
        setView(isView);
    }, [isView]);
    return (
        <>
            <Container view={view}>
                <MenuContainer>
                    <Link href="/">
                        <a>
                            <Logo />
                        </a>
                    </Link>
                    <Link href="/about">
                        <a>
                            <Menu>
                                <p>About</p>
                            </Menu>
                        </a>
                    </Link>
                    <Link href="/Archives">
                        <a>
                            <Menu>
                                <p>Archives</p>
                            </Menu>
                        </a>
                    </Link>
                    <Link href="/post">
                        <a>
                            <Menu>
                                <p>Post</p>
                            </Menu>
                        </a>
                    </Link>
                    <IconList>
                        <Icon src="/icon/icon_sns_git.svg">
                            <a href="https://github.com/Jeontaeyun" />
                        </Icon>
                        <Icon src="/icon/icon_sns_instagram.svg">
                            <a href="https://www.instagram.com/stark_jeon_/?hl=ko" />
                        </Icon>
                    </IconList>
                </MenuContainer>
            </Container>
        </>
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

const Logo = styled.div`
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

const Menu = styled.div`
    font-size: 16px;
    display: inline-block;
    vertical-align: top;
    margin: 0;
    height: 100%;
    padding: 0 1rem;
    border-radius: 0.1rem;
    p {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    cursor: pointer;
    &:hover {
        background: ${props => props.theme.color.achromatic};
        color: ${props => props.theme.color.main};
    }
    @media screen and (max-width: ${props => props.theme.mediumPoint}) {
        height: 50px;
        padding: 0 0.5rem;
    }
`;

const Icon = styled.div<{ src: string }>`
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
