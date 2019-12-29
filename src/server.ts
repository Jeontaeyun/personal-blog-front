import Express from "express";
import next from "next";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import expressSession from "express-session";
import dotenv from "dotenv";
import path from "path";
import { IncomingMessage, ServerResponse } from "http";

const dev = process.env.NODE_ENV === "development";

const app = next({ dev });
const handle = app.getRequestHandler();

dotenv.config();

app.prepare().then(() => {
  // NEXT와 EXPRESS를 연결해주는 코드
  const server = Express();

  server.use("/", Express.static(path.join(__dirname, "public")));
  server.use(morgan("dev"));
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

  server.get("/post/:postId", (req: Express.Request, res: Express.Response) => {
    return app.render(req, res, "/post", { postId: req.params.postId });
  });

  server.get("*", (req: Express.Request, res: Express.Response) => {
    return handle(req as IncomingMessage, res as ServerResponse);
  });

  server.listen(3060, () => {
    console.log("next+express running on port 3060");
  });
});
