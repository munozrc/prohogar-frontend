import express from "express";
import Server from "./Server";

// middleware
import { json, urlencoded } from "body-parser";
import morgan from "morgan";

// Controllers
import Controller from "./Controller";
import AuthController from "./controllers/AuthController";

const app: express.Application = express();
const server: Server = new Server(app, 3000);

const controllers: Array<Controller> = [new AuthController()];

const globalMiddleware: Array<express.RequestHandler> = [
  urlencoded({ extended: false }),
  morgan("dev"),
  json(),
];

Promise.resolve()
  // .then(() => server.database())
  .then(() => {
    server.loadMiddleware(globalMiddleware);
    server.loadControllers(controllers);
    server.run();
  });
