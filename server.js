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

    server.get('/post/:postId', (req, res) => {
        return app.render(req, res, '/post', { postId: req.params.postId });
      });
      
    server.get('*', (req, res)=>{
        return handle(req, res);
    });

    server.listen(3060, () =>{
        console.log('next+express running on port 3060');
    })
});