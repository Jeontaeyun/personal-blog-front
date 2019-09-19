import React from 'react';
import initApolloClient from './initApolloClient';
import Head from 'next/head';
import { renderToString } from 'react-dom/server';
import { ApolloClient } from 'apollo-boost';
import { getMarkupFromTree } from 'react-apollo-hooks';

// Apollo Client와 NextAPP을 연결해주는 HOC
export default (App: React.ComponentType<any> & { getInitialProps?: Function }) => {
	return class Apollo extends React.Component {
		static displayName = "withApollo(App)";
		apolloClient: ApolloClient<any>;
		static async getInitialProps(ctx?: any){
			const { Component, router } = ctx;
			let appProps = {};
			// App의 getInitialProps가 있다면 받아서 App.getInitialProps에
			// ctx를 넣은 후 나온 props를 반환받음
			if (App.getInitialProps) {
				appProps = await App.getInitialProps(ctx);
			}
			// apolloClient객체를 생성해 apollo 변수에 넣음
			const apollo = initApolloClient();
			if (!process.browser) {
				// browser가 아니면
				try {
					await getMarkupFromTree({
						renderFunction: renderToString,
						tree: <App {...appProps} 	Component={Component} 
													router={router} 
													apolloClient={apollo}/>
					});
				} catch (e) {
					console.error('Error while running `getDataFromTree`', e);
				}
				Head.rewind();
			}
			// apolloState를 apollo의 cache에서 추출(extract)
			const apolloState = apollo.cache.extract();
			// 각각의 Props와 State를 반환하는 getInitialProps
			return { ...appProps, apolloState };
		}
		constructor(props: any) {
			super(props);
			// 생성할 때 initApolloClient에서 initialState를 넣어줌
			this.apolloClient = initApolloClient(props.apolloState);
		}
		render() {
			return <App {...this.props} 
						apolloClient={this.apolloClient} />;
		}
	};
};
