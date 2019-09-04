# 타입스크립트 + 넥스트 + 그래프 큐엘을 이용한 퍼스널 브랜딩 블로그

## 프로젝트 목적

 2019년 떠오르는 기술인 타입스크립트와 그래프 큐엘을 사용하여 개인 블로그를 만들기 위한 프로젝트입니다. 이를 통해 다음과 같은 목적을 달성할 것입니다.

 01. 동적 타입 언어인 자바스크립트의 타입 취약성을 보완해주는 타입스크립트 도입

 02. REST API를 대체하는 GraphQL의 설계 패턴을 익힌 후 프론트 엔드에 적용 

 03. 아키텍쳐 설계 - 프로젝트 환경 설정 - 개발 - 배포의 과정 

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
    "exec" : "node server.js",
    "ext" : "js json jsx tsx"
}

 ```
나중에 NEXT의 SSR을 위해 server.js를 생성해주어야 합니다. 다음은 next.config.json설정입니다.

```javascript
    const withTypescript = require("@zeit/next-typescript");
    const withCss = require("@zeit/next-css");

    module.exports = withTypescript(withCss({
    webpack:(config) => {
      return config;
    }
}));
```

#### .babelrc

```javascript
{
    "presets": ["next/babel", "@zeit/next-typescript/babel"],
    "plugins": ["babel-plugin-styled-components", [
        "module-resolver",
        {
          "root": ["./"],
          "alias": {
            "@components": ["./components"]
          },
          "extensions": [ ".wasm", ".mjs", ".js", ".jsx", ".json", ".ts", ".tsx" ]
        }
    ]],
}
```

#### tsconfig.json

```javascript
    {
  "compileOnSave": false,
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
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

#### server.js

```jsavascript
/*
Server.js는 Node.js 언어 기반 프레임워크인 Express 위에서 Next를 돌리기 위해
두 프레임 워크를 연결해주는 파일입니다. 
*/
const express = require('express');
const next = require('next');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const prod = process.env.NODE_ENV === 'production';

const app = next({dev});
const handle = app.getRequestHandler();
dotenv.config();

app.prepare().then( ()=>{
    // NEXT와 EXPRESS를 연결해주는 코드
    const server = express();
    server.use('/',express.static(path.join(__dirname, 'public')));
    server.use(morgan('dev'));
    server.use(express.json());
    server.use(express.urlencoded({extended: true}));
    server.use(cookieParser(process.env.COOKIE_SECRET));
    server.use(expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.COOKIE_SECRET,
        cookie: {
            httpOnly: true,
            secure: false
        }
    }));

    server.get('*', (req, res)=>{
        return handle(req, res);
    });

    server.listen(3060, () =>{
        console.log('next+express running on port 3060');
    })
});
```

#### .storybook/consfig.ts

```typescript
import { configure } from '@storybook/react'

const req = require.context('../components', true, /.stories.tsx$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
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