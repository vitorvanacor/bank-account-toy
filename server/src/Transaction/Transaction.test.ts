import Transaction from "./Transaction";
import TransactionRepository from "./TransactionRepository";
import * as db from "../lib/db";

// https://jestjs.io/docs/mongodb

test("it creates a deposit", async () => {
  await db.client.connect();
  const deposit = Transaction.makeDeposit({
    username: "user-a",
    amount: "100",
  });
  await TransactionRepository.insert(deposit);
  const t = await TransactionRepository.find({ destination: "user-a" });
  expect(Transaction.fromObject(t)).toMatchObject(deposit);
});

afterAll(async () => {
  await db.client.close();
});
