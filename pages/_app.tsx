import * as React from "react";
import AppLayout from "@components/UIComponents/CommonComponents/AppLayout";
import {Container} from 'next/app'
import {ThemeProvider} from 'styled-components';
import theme from '../styles/theme';
import GlobalStyles from '../styles/globalStyle';

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