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

interface StatelessPage<P = {}> extends React.SFC<P> {
  getInitialProps?: (ctx: any) => Promise<P>
}


const App : StatelessPage<any> = ({Component, pageProps}) => {
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

App.getInitialProps = async (context) => {
  const {ctx, Component} = context;
  let pageProps = {};
  if(Component.getInitialProps){
      pageProps = await Component.getInitialProps(ctx);
  }
  return {pageProps};
};

export default App;