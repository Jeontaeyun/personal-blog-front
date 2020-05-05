import Express from "express";
import next from "next";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import expressSession from "express-session";
import dotenv from "dotenv";
import chalk from "chalk";
import path from "path";
import cors from "cors";
import { parse } from "url";

dotenv.config();

const __DEV__ = process.env.NODE_ENV === "development";
const app = next({ dev: __DEV__ });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = Express();

    server.use("/", Express.static(path.join(__dirname, "public")));

    if (__DEV__) {
        server.use(morgan("dev"));
    }

    server.use(
        cors({
            origin: "*",
            credentials: true
        })
    );

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
                secure: false
            }
        })
    );

    server.get("/post/:postId", (req: Express.Request, res: Express.Response) => {
        const { postId } = req.params;
        return app.render(req, res, "/post", { postId });
    });

    server.get("*", (req: Express.Request, res: Express.Response) => {
        const parsedURL = parse(req.url, true);
        return handle(req, res, parsedURL);
    });

    server.listen(3060, () => {
        console.log(
            chalk.bgBlue.black("START"),
            `Next server running on port 3060 on ${__DEV__ ? "development" : "production"} environment`
        );
    });
});
