import React from 'react';
import initApolloClient from './initApolloClient';
import Head from 'next/head';
import { renderToString } from 'react-dom/server';
import { NextAppContext } from 'next/app';
import { ApolloClient } from 'apollo-boost';
import { getMarkupFromTree } from 'react-apollo-hooks';

export default (App: React.ComponentType<any> & { getInitialProps?: Function }) => {
	return class Apollo extends React.Component {
		static displayName = 'withApollo(App)';
		apolloClient: ApolloClient<any>;
		static async getInitialProps(ctx: NextAppContext) {
			const { Component, router } = ctx;

			let appProps = {};
			if (App.getInitialProps) {
				appProps = await App.getInitialProps(ctx);
			}

			const apollo = initApolloClient();
			if (!process.browser) {
				try {
					await getMarkupFromTree({
						renderFunction: renderToString,
						tree: <App {...appProps} Component={Component} router={router} apolloClient={apollo} />
					});
				} catch (e) {
					console.error('Error while running `getDataFromTree`', e);
				}
				Head.rewind();
			}
			const apolloState = apollo.cache.extract();

			return { ...appProps, apolloState };
		}
		constructor(props: any) {
			super(props);
			this.apolloClient = initApolloClient(props.apolloState);
		}
		render() {
			return <App {...this.props} apolloClient={this.apolloClient} />;
		}
	};
};
