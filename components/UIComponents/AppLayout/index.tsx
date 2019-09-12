import * as React from "react";
import {useEffect,useState} from 'react';
import styled from 'styled-components';
import SideBottomButton from "../SideBottomButton";
import ProfileImage from "../ProfileImage";
import HeaderComponent from "../HeaderComponent";
import FollowingNavigator from "../FollowingNavigator";
import FooterComponent from "../FooterComponent";
import Progressbar from "../Progressbar";

interface Props{
  MainContents : any
};

const AppLayout: React.SFC<Props> = (props) => {
  const {MainContents} = props;
  const  [isFollowingNav, setIsFollowingNav] = useState(false);
  const scrollEvent = (e) => {
    const crossBrowsingTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (crossBrowsingTop > 400) setIsFollowingNav(true);
    else setIsFollowingNav(false);
  };
  useEffect(()=>{
    window.addEventListener('scroll', scrollEvent);
  }, []);
  return (
    <>
        {isFollowingNav&&<FollowingNavigator/>}
        <Progressbar/>
        <Header>
          <HeaderComponent/>
          <LayoutProfile size="200px"/>
        </Header>
        <Main>
          {MainContents}
        </Main>
        <Footer>
          <FooterComponent/>
        </Footer>
        <SideBottomButton size="40px"/>
    </>
  );
};

AppLayout.defaultProps = {
  MainContents: "Main",
}

const Header = styled.div`
  position: relative;
  margin: 0;
  width: 100%;
  height: 400px;
  background: ${props=>props.theme.backgroundColor};
`;

const Main = styled.div`
  margin: 8rem auto;
  width: 100%;
  background: white;
`;

const Footer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background: ${props=>props.theme.mainColor};
`;

const LayoutProfile = styled(ProfileImage)`
  position: absolute;
  z-index: 100;
  bottom: -100px;
  left: 50%;
  transform: translate(-50%);
  &:hover{
    cursor: pointer;
  }
`;

export default AppLayout;