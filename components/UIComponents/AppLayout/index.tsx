import * as React from "react";
import {useEffect,useState} from 'react';
import styled from 'styled-components';
import SideBottomButton from "../SideBottomButton";
import ProfileImage from "../ProfileImage";
import HeaderComponent from "../HeaderComponent";
import FollowingNavigator from "../FollowingNavigator";

interface Props{
  MainContents : any
};

const AppLayout: React.SFC<Props> = (props) => {
  const {MainContents} = props;
  const  [isFollowingNav, setIsFollowingNav] = useState(false);
  useEffect(()=>{
    window.onscroll = (e) => {
      if (document.documentElement.scrollTop > 400) {
        setIsFollowingNav(true);
      }
      else{
        setIsFollowingNav(false);
      }
    };
  }, []);
  return (
    <>
        {isFollowingNav&&<FollowingNavigator/>}
        <Header>
          <HeaderComponent/>
          <LayoutProfile size="200px"/>
        </Header>
        <Main>
          {MainContents}
        </Main>
        <Footer>
        w
        </Footer>
        <SideBottomButton/>
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
  background: ${props=>props.theme.subColor};
`;

const Main = styled.div`
  margin: 8rem auto;
  width: 70%;
  padding: 1rem;
  background: white;
  @media (max-width: 764px){
    width: 90%;
  }
`;

const Footer = styled.div`
  margin: 0;
  width: 100%;
  height: 300px;
  background: ${props=>props.theme.subColor};
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