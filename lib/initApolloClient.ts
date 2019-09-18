import { ApolloClient, InMemoryCache, HttpLink, NormalizedCacheObject } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';

let apolloClient: ApolloClient<any> | null = null;

if (!process.browser) {
	// 타입스크립트를 무시하기 위해서는아래와 같이ㅣ ts-ignore설정을 해준다.
	// @ts-ignore
	global.fetch = fetch;
}

function createApolloClient(initialState: NormalizedCacheObject) {
	return new ApolloClient({
		connectToDevTools: process.browser,
		ssrMode: !process.browser,
		link: new HttpLink({
			uri: process.env.GRAPHQL_URI,
			credentials: 'same-origin'
		}),
		cache: new InMemoryCache().restore(initialState)
	});
}

export default function initApollo(initialState: any = {}) {
	// Make suer to crreate a new Client fo every server-side request so that data
	// isn't shared between connections
	if (!process.browser) {
		return createApolloClient(initialState);
	}

	// Reuse Client on the client-side
	if (!apolloClient) {
		apolloClient = createApolloClient(initialState);
	}

	return apolloClient;
}
