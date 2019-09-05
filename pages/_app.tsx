import * as React from "react";
import AppLayout from "@components/UIComponents/AppLayout";
import {Container} from 'next/app'
import {ThemeProvider} from 'styled-components';
import theme from '../styles/theme';
import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  body {
    @import url("http://fonts.googleapis.com/earlyaccess/nanumgothic.css"); 
     font-family: 'Nanum Gothic', sans-serif;
     margin: 0;
     a {
        text-decoration: none;
      }
      a:focus{
        text-decoration: none;
      }
  }
`;
interface Props {
    Component: React.FunctionComponent;
    pageProps: any;
}

const Index: React.SFC<Props> = ({Component, pageProps}) => {
  return (
    <Container>
    <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyles />
      <AppLayout MainContents={<Component {...pageProps}/>}/>
      </React.Fragment>
    </ThemeProvider>
    </Container>
  );
};

export default Index;