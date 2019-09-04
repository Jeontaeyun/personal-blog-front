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

/*production이 아닐 때만 개발환경이다.*/
const dev = process.env.NODE_ENV !== 'production';
const prod = process.env.NODE_ENV === 'production';

const app = next({dev});
const handle = app.getRequestHandler();
/*dotenv는 환경변수를 저장하는 환경입니다. 보안이 중요한 환경 변수 등을 따로 분리해 다음과 같이 호출할 수 있습니다.*/
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

    server.get('/post/:postId', (req, res) => {
        return app.render(req, res, '/post', { postId: req.params.postId });
      });

    server.get('/hashtag/:tag', (req,res)=>{
        /*Qeury를 설정해서 넘겨주어야 한다.*/
        return app.render(req, res, '/hashtag',{tag: req.params.tag});
    });
    server.get('/user/:id', (req,res)=>{
        /*Qeury를 설정해서 넘겨주어야 한다.*/
        return app.render(req, res, '/user',{id: req.params.id});
    });
    
    server.get('*', (req, res)=>{
        return handle(req, res);
    });

    server.listen(3060, () =>{
        console.log('next+express running on port 3060');
    })
});