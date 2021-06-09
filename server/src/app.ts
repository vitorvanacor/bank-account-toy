import express, { Application } from "express";
import morgan from "morgan";

import Transaction from "./Transaction/Transaction";
import { client } from "./lib/db";

const PORT = process.env.PORT || 8080;

const app: Application = express();

app.use(express.json());
app.use(morgan("dev"));

// ### Routes
let i = 0;
app.get("/", async (req, res) => {
  return res.send(`pong ${i++}`);
});

app.post("/deposit", async (req, res) => {
  const { amount } = req.body;
});

// ### Functions

function calculateBalance(transactions: Array<Transaction>) {
  let balance = 0;
  transactions.forEach((transaction) => {
    balance += transaction.centsAmount;
  });
  return balance;
}

app.listen(PORT, async () => {
  await client.connect();
  console.log("Server is running on port", PORT);
});
