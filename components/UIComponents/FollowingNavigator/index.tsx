import * as React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
interface Props {
  children?: React.FunctionComponent;
}

const FollowingNavigator: React.SFC<Props> = props => {
  return (
    <>
      <Container>
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

FollowingNavigator.defaultProps = {};

const Container = styled.div<Props>`
  position: fixed;
  z-index: 200;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  background: white;
  -webkit-box-shadow: 0px 0px 30px 0px rgba(148, 148, 148, 1);
  -moz-box-shadow: 0px 0px 30px 0px rgba(148, 148, 148, 1);
  box-shadow: 0px 0px 30px 0px rgba(148, 148, 148, 1);
  @media (max-width: ${props => props.theme.smallPoint}) {
    height: 100px;
  }
`;

const MenuContainer = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  @media (max-width: ${props => props.theme.smallPoint}) {
    width: 100%;
    text-align: center;
  }
`;

const IconList = styled.span`
  display: inline-block;
  position: absolute;
  right: 0;
  height: 100%;
  @media (max-width: ${props => props.theme.smallPoint}) {
    position: static;
  }
`;

const Logo = styled.div`
  display: inline-block;
  height: 100%;
  width: 150px;
  background: url('./title.png');
  border-radius: 0.1rem;
  @media (max-width: ${props => props.theme.smallPoint}) {
    display: block;
    margin: 0 auto;
    width: 150px;
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
  @media (max-width: ${props => props.theme.smallPoint}) {
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
    background: url("${props => props.src}");
  }
  &:hover{
    background: ${props => props.theme.achromaticColor};
  }
  @media(max-width:${props => props.theme.smallPoint}){
      height: 50px;
  }
`;

export default FollowingNavigator;
