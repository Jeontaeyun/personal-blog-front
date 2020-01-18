// Initialize Apollo Client
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
} from "apollo-boost";
import fetch from "isomorphic-unfetch";

let apolloClient: ApolloClient<any> | null = null;

// browser환경이 아니면 서버 환경
if (!process.browser) {
  // 타입스크립트를 무시하기 위해서는아래와 같이ㅣ ts-ignore설정을 해준다.
  // @ts-ignore
  global.fetch = fetch;
}
// Creating ApoloClient InitialState
function createApolloClient(initialState: NormalizedCacheObject) {
  // CreateApoloClient는 ApolloClient를 생성하는 함수
  const { GRAPHQL_URI } = process.env;
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: new HttpLink({
      uri: `${GRAPHQL_URI}/graphql`,
      credentials: "same-origin",
    }),
    cache: new InMemoryCache().restore(initialState),
  });
}
// InitApollo는 initialState를 받아서 AplloClient를 만들어주는 함수이다.
// 브라우저가 아니면 클라이언트를 생성만 해주고
// 브라우저이면서 아폴로 클라이언트가 없으면 생성해준다.
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
