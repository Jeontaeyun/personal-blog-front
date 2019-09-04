import * as React from "react";
import styled from 'styled-components';

const Header = styled.div`
  margin: 0;
  width: 100%;
  height: 400px;
  background: black;
`;

const Main = styled.div`
  margin: 0;
  width: 100%;
  height: 400px;
  background: yellow;
`;

const Footer = styled.div`
  margin: 0;
  width: 100%;
  height: 300px;
  background: red;
`;

interface Props{
  HeaderContents : any,
  MainContents : any,
  FooterContents : any 
};

const AppLayout: React.SFC<Props> = ({HeaderContents, MainContents, FooterContents}) => {
  return (
    <>
      <Header>
        {HeaderContents}
      </Header>
      <Main>
        {MainContents}
      </Main>
      <Footer>
        {FooterContents}
      </Footer>
    </>
  );
};

AppLayout.defaultProps = {
  HeaderContents: "Header",
  MainContents: "Main",
  FooterContents: "Footer"
}

export default AppLayout;