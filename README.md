# 타입스크립트 + 넥스트 + 그래프 큐엘을 이용한 퍼스널 브랜딩 블로그

## 프로젝트 목적

2019년 떠오르는 기술인 타입스크립트와 그래프 큐엘을 사용하여 개인 블로그를 만들기 위한 프로젝트입니다. 이를 통해 다음과 같은 목적을 달성할 것입니다.

1. 동적 타입 언어인 자바스크립트의 타입 취약성을 보완해주는 타입스크립트 도입

2. REST API를 대체하는 GraphQL의 설계 패턴을 익힌 후 프론트 엔드에 적용

3. 아키텍쳐 설계 - 프로젝트 환경 설정 - 개발 - 배포의 과정

## 프로젝트 Setting

NEXT+타입스크립트+스타일드 컴포넌트+스토리북(UI 스냅샷테스트)를 위한 프로젝트의 설정은 다음과 같습니다.

```bash
   $mkdir (projectName)
   $cd (projectName)
   $npm init -y
   $npm i next react react-dom
   $npm i -D @zeit/next-typescript @zeit/next-css @types/next
   $npm i -D typescript
   $npm i -D awesome-typescript-loader
   $npm i -D @storybook/react
   $npm i -D @types/storybook__react @types/node
   $npm i -D fork-ts-checker-webpack-plugin
```

다음은 package.json파일의 스크립트 부분입니다.

```javascript
   "scripts": {
       "dev": "nodemon",
       "build": "next build",
       "start": "next start"
       "storybook": "start-storybook -p 6006 -c .storybook"
 }
```

프로젝트의 진행을 위해 nodemon을 설치한 후 다음과 같이 설정해줍니다.

```javascript

{
   "watch" : [
       "./*"
   ],
   "exec" : "ts-node server.ts",
   "ext" : "js ts json jsx tsx"
}

```

나중에 NEXT의 SSR을 위해 server.ts를 생성해주어야 합니다. 다음은 next.config.json설정입니다.

```javascript
const withTypescript = require("@zeit/next-typescript");
const withCss = require("@zeit/next-css");

module.exports = withTypescript(
  withCss({
    webpack: config => {
      return config;
    },
  }),
);
```

Next는 내부적으로 Babel.js를 이용하며, next와 typescript를 이용하기 위해서 next/babel과 zeit프로젝트에서 제공하는 next-typescript/babel을 프리셋으로 사용해야합니다.

#### .babelrc

```json
{
  "presets": ["next/babel", "@zeit/next-typescript/babel"],
  "plugins": [
    "babel-plugin-styled-components",
    [
      "module-resolver",
      {
        "root": ["./"],
        "alias": {
          "@components": ["./components"]
        },
        "extensions": [".wasm", ".mjs", ".js", ".jsx", ".json", ".ts", ".tsx"]
      }
    ]
  ]
}
```

#### tsconfig.json

```javascript
    {
  "compileOnSave": false,
  "compilerOptions": {
    "target": "esnext",
    "module": "commonjs",
    "jsx": "preserve",
    "allowJs": true,
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "lib": [
      "es6",
      "dom"
    ],
    "baseUrl": ".",
    "paths": {
      "@components/*": [
        "components/*"
      ]
    },
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "isolatedModules": true
  }
```

#### server.ts

```typescript
/*
Server.js는 Node.js 언어 기반 프레임워크인 Express 위에서 Next를 돌리기 위해
두 프레임 워크를 연결해주는 파일입니다.
*/
import Express from "express";
import next, { NextApiRequest, NextApiResponse } from "next";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import expressSession from "express-session";
import dotenv from "dotenv";
import path from "path";
import { parse } from "url";

dotenv.config();

const __DEV__ = process.env.NODE_ENV === "development";
const app = next({ dev: __DEV__ });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // NEXT와 EXPRESS를 연결해주는 코드
  const server = Express();

  server.use("/", Express.static(path.join(__dirname, "public")));

  /**
   * Dev Configure
   */
  if (__DEV__) {
    server.use(morgan("dev"));
  }
  server.use(Express.json());
  server.use(Express.urlencoded({ extended: true }));
  server.use(cookieParser(process.env.COOKIE_SECRET));
  server.use(
    expressSession({
      resave: false,
      saveUninitialized: false,
      secret: process.env.COOKIE_SECRET,
      cookie: {
        httpOnly: true,
        secure: false,
      },
    }),
  );

  server.get("*", (req: Express.Request, res: Express.Response) => {
    const parsedURL = parse(req.url, true);
    const { pathname, query } = parsedURL;
    console.log(pathname, query);
    return handle(req, res, parsedURL);
  });

  server.get("/post/:postId", (req: Express.Request, res: Express.Response) => {
    return app.render(req, res, "/post", { postId: req.params.postId });
  });

  server.listen(3060, () => {
    console.log(
      `next+express running on port 3060 on ${__DEV__ ? "dev" : "production"}`,
    );
  });
});
```

다만, typescript를 도입한 후 express를 사용하는 부분에서 tsconfig.json의 module부분을 commonjs로 설정해야하는데, next에서는 esnext를 사용하기에 이 부분에 대한 해결방안이 필요하다.

#### .storybook/consfig.ts

```typescript
import { configure } from "@storybook/react";

const req = require.context("../components", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
```

#### .storybook/webpack.config.js

```javacriptc
const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = ({config}) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [require.resolve('babel-preset-react-app')],
    },
  })

  config.resolve.extensions.push('.ts', '.tsx')

  config.plugins.push(
    new ForkTsCheckerWebpackPlugin({
      async: false,
      checkSyntacticErrors: true,
      formatter: require('react-dev-utils/typescriptFormatter'),
    })
  )
  return config
}
```

이후 components파일과 pages파일을 생성해 프로젝트를 진행하면 된다. components는 자동적으로 @components라는 네임스페이스를 가지며 절대 경로를 사용할 수 있다.

### GraphQL | Apollo-client

클라이언트 측에서 그래프 큐엘을 사용하기 위해서 다음의 패키지를 설치해준다.

```bash
$npm i apollo-boost react-apollo graphql
```

- apollo-boost 는 Apollo Client를 설정하는데 필요한 것들이 들어있는 패키지
- react-apollo 는 React를 위한 apollo 서버입니다
- graphqll 은 GraphQL 쿼리를 사용할 수 있게 해주는 패키지입니다.

```bash
$npm i react-apollo-hooks
$npm i @apollo/react-hooks
```

- react-apollo-hooks는 Apollo Client에서 Hooks를 사용하려는 프로젝트입니다.
- Apollo Hooks인 **@apollo/react-hooks**가 출시되어 현재는 이를 도입합니다.
- @apollo/react-hooks는 useQuery, useMutation, useApolloClient와 같은 React Hooks 함수를 제공하며, 이 함수들을 활용하면 React 앱에서 GraphQL API를 훨씬 쉽게 호출할 수 있습니다.
- 클래스 대신에 함수 컴포넌트를 사용하게 되면서 **가독성**이나 **유지보수** 측면에서도 이점이 있습니다.

### GraphQL SSR | @apollo/react-ssr

Next를 사용한다고 해서 Apollo의 데이터가 바로 서버측에서 렌더링되는 것은 아니다. Next에서도 서버측에서 데이터를 넣은 후 렌더링을 하기 위한 조작을 따로 해주어야한다.

```bash
$npm i @apollo/react-ssr
```
