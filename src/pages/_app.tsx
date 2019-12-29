import * as React from 'react';
import AppLayout from 'components/UIComponents/CommonComponents/AppLayout';
import { Container } from 'next/app';
import withApolloCient from '../lib/withApolloClient';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-boost';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyles from '../styles/globalStyle';
import Helmet from 'react-helmet';

interface Props {
  Component: React.FunctionComponent;
  pageProps: any;
}

interface StatelessPage<P = {}> extends React.SFC<P> {
  getInitialProps?: (ctx: P) => Promise<P>;
  apolloClient?: ApolloClient<P>;
}

const App: StatelessPage<any> = ({ Component, pageProps, apolloClient }) => {
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyles />
          <ApolloProvider client={apolloClient}>
            <Helmet
              title="Connect Dot"
              htmlAttributes={{ lang: 'ko' }}
              link={[
                {
                  rel: 'shortcut icon',
                  href: '/favicon.ico',
                  type: 'image/x-icon',
                },
              ]}
            />
            <AppLayout MainContents={<Component {...pageProps} />} />
          </ApolloProvider>
        </React.Fragment>
      </ThemeProvider>
    </Container>
  );
};

App.getInitialProps = async context => {
  const { ctx, Component } = context;
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

export default withApolloCient(App);