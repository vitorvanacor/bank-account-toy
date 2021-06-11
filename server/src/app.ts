import express, { Application, Request, Response } from "express";
import morganBody from "morgan-body";

import * as db from "./lib/db";
import config from "./config";

import { postDeposit, postWithdraw, getHistory, postPayment } from "./Transaction";
import {UserRepository, getUsers, postUser} from "./User";

const app: Application = express();

app.use(express.json());
morganBody(app);

// ### Routes

app.get("/history", getHistory);
app.post("/deposit", postDeposit);
app.post("/withdraw", postWithdraw);
app.post("/payment", postPayment);

app.post("/users", postUser);
app.get("/users", getUsers);

export async function runServer(port = config.PORT) {
  await db.client.connect();
  await UserRepository.setup();
  return app.listen(port, () => {
    console.log("Server is listening on port", port);
  });
}

export default app;
