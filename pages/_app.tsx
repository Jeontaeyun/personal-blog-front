import * as React from "react";
import { Container } from "next/app";
import withApolloCient from "../lib/withApolloClient";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-boost";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles/globalStyle";
import Helmet from "react-helmet";
import AppLayout from "components/UIComponents/CommonComponents/AppLayout";
import { Router } from "next/dist/client/router";
import AdminLayout from "components/UIComponents/AdminComponents/AdminLayout";

interface IProps extends Router {
    Component: React.FC;
    pageProps: any;
}

interface IStatelessPage<P = {}> extends React.FC<P> {
    getInitialProps?: (ctx: P) => Promise<P>;
    apolloClient?: ApolloClient<P>;
}

const App: IStatelessPage<any> = props => {
    const { Component, pageProps, apolloClient } = props;

    const FAVICON_INFO = {
        rel: "shortcut icon",
        href: "/favicon.ico",
        type: "image/x-icon"
    };

    const { pathname }: { pathname: string } = props.router;
    const pathArray = pathname.split("/").filter(item => {
        return item !== "";
    });
    switch (pathArray[0]) {
        case "admin":
            return (
                <Container>
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <GlobalStyles />
                            <ApolloProvider client={apolloClient}>
                                <Helmet
                                    title="Connect Dot | Admin"
                                    htmlAttributes={{ lang: "ko" }}
                                    link={[FAVICON_INFO]}
                                />
                                <AdminLayout contents={<Component {...pageProps} />} />
                            </ApolloProvider>
                        </React.Fragment>
                    </ThemeProvider>
                </Container>
            );
        default:
            return (
                <Container>
                    <ThemeProvider theme={theme}>
                        <React.Fragment>
                            <GlobalStyles />
                            <ApolloProvider client={apolloClient}>
                                <Helmet title="Connect Dot" htmlAttributes={{ lang: "ko" }} link={[FAVICON_INFO]} />
                                <AppLayout MainContents={<Component {...pageProps} />} />
                            </ApolloProvider>
                        </React.Fragment>
                    </ThemeProvider>
                </Container>
            );
    }
};

App.getInitialProps = async context => {
    const { ctx, Component } = context;
    const hasGetInitialProps = Component.getInitialProps;
    let pageProps = {};
    if (hasGetInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
};

export default withApolloCient(App);
