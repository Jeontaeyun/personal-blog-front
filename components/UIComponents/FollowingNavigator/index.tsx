<<<<<<< HEAD
import * as React from "react";
import styled from "styled-components";
import Link from "next/link";
interface IProps {
  children?: React.FunctionComponent;
}

const FollowingNavigator: React.FC<IProps> = props => {
=======
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
>>>>>>> feature/LoadingSpinner
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
            <Icon src="/icon/git.svg">
              <Link href="https://github.com/Jeontaeyun">
                <a></a>
              </Link>
            </Icon>
            <Icon src="/icon/instagram.svg">
              <Link href="https://www.instagram.com/stark_jeon_/?hl=ko">
                <a></a>
              </Link>
            </Icon>
          </IconList>
        </MenuContainer>
      </Container>
    </>
  );
};

<<<<<<< HEAD
const Container = styled.div<IProps>`
=======
const Container = styled.div<{ view: boolean }>`
>>>>>>> feature/LoadingSpinner
  position: fixed;
  z-index: 200;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  transform: translateY(${props => (props.view ? 0 : "-50px")});
  opacity: ${props => (props.view ? 1 : 0)};
  background: white;
<<<<<<< HEAD
  -webkit-box-shadow: 0px 0px 30px 0px rgba(148, 148, 148, 1);
  -moz-box-shadow: 0px 0px 30px 0px rgba(148, 148, 148, 1);
  box-shadow: 0px 0px 30px 0px rgba(148, 148, 148, 1);

  @media (max-width: ${props => props.theme.mediumPoint}) {
=======
  -webkit-box-shadow: 0px 2px 6px -2px rgba(41, 42, 43, 0.16);
  -moz-box-shadow: 0px 2px 6px -2px rgba(41, 42, 43, 0.16);
  box-shadow: 0px 2px 6px -2px rgba(41, 42, 43, 0.16);
  -webkit-transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  -moz-transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  -ms-transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  -o-transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  @media screen and (max-width: ${props => props.theme.mediumPoint}) {
>>>>>>> feature/LoadingSpinner
    height: 100px;
    background: "red";
  }
  will-change: transform, opacity;
`;

const MenuContainer = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  margin: 0 auto;
<<<<<<< HEAD
  @media (max-width: ${props => props.theme.mediumPoint}) {
=======
  @media screen and (max-width: ${props => props.theme.mediumPoint}) {
>>>>>>> feature/LoadingSpinner
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
  background: url("./title.png");
  border-radius: 0.1rem;
<<<<<<< HEAD
  @media (max-width: ${props => props.theme.mediumPoint}) {
=======
  @media screen and (max-width: ${props => props.theme.mediumPoint}) {
>>>>>>> feature/LoadingSpinner
    display: block;
    margin: 0 auto;
    width: 150px;
    background: "red";
    height: 50%;
  }
`;

const Menu = styled.div`
  font-size: 1rem;
  display: inline-block;
  vertical-align: top;
  margin: 0;
  height: 100%;
  padding: 0 1rem;
  border-radius: 0.1rem;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.achromaticColor};
    color: ${props => props.theme.mainColor};
  }
<<<<<<< HEAD
  @media (max-width: ${props => props.theme.mediumPoint}) {
=======
  @media screen and (max-width: ${props => props.theme.mediumPoint}) {
>>>>>>> feature/LoadingSpinner
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
    background: ${props => props.theme.achromaticColor};
    a{
      background-color: ${props => props.theme.mainColor};
    }
  }
<<<<<<< HEAD
  @media(max-width:${props => props.theme.mediumPoint}){
=======
  @media screen and (max-width: ${props => props.theme.mediumPoint}) {
>>>>>>> feature/LoadingSpinner
      height: 50px;
  }
`;

export default FollowingNavigator;
