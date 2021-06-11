import { Request, Response } from "express";
import {
  makeDeposit,
  makeWithdrawal,
  makePayment,
  TransactionRepository,
  calculateBalance,
} from ".";
import { withdraw } from "./TransactionService";

export async function getHistory(req: Request, res: Response) {
  const username = req.query["username"] as string;
  const transactions = await TransactionRepository.getHistory(username);
  // TODO: Store balance in the DB or, at least, cache the calculation result
  const balance = calculateBalance(transactions);
  return res.json({ transactions, balance });
}

export async function postDeposit(req: Request, res: Response) {
  const { centsAmount, username } = req.body;
  const deposit = makeDeposit(username, centsAmount);
  await TransactionRepository.insert(deposit);
  return res.json(deposit);
}

export async function postWithdraw(req: Request, res: Response) {
  const { centsAmount, username } = req.body;
  let withdrawal;
  try {
    withdrawal = await withdraw(username, centsAmount);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
  return res.json(withdrawal);
}

export async function postPayment(req: Request, res: Response) {
  const { centsAmount, username, destination, description } = req.body;
  const payment = makePayment(username, destination, centsAmount, description);
  await TransactionRepository.insert(payment);
  res.json(payment);
}
