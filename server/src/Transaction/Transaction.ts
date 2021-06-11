import { UserAccount } from "../User/User";

type TransactionKind = "DEPOSIT" | "WITHDRAWAL" | "PAYMENT";

type TransactionBase = {
  kind: TransactionKind;
  // TODO: Use a Money ValueObject instead of number
  centsAmount: number;
  createdAt: Date;
};

export interface Deposit extends TransactionBase {
  kind: "DEPOSIT";
  destination: UserAccount;
}

export interface Withdrawal extends TransactionBase {
  kind: "WITHDRAWAL";
  source: UserAccount;
}

export interface Payment extends TransactionBase {
  kind: "PAYMENT";
  source: UserAccount;
  destination: UserAccount;
  description: string;
}

export type Transaction = Deposit | Withdrawal | Payment;

export function makeDeposit(username: string, centsAmount: number): Deposit {
  return {
    kind: "DEPOSIT",
    destination: `${username}`,
    centsAmount: centsAmount,
    createdAt: new Date(),
  };
}

export function makeWithdrawal(
  username: string,

  centsAmount: number
): Withdrawal {
  return {
    kind: "WITHDRAWAL",
    source: username,
    centsAmount: centsAmount,
    createdAt: new Date(),
  };
}

export function makePayment(
  payer: string,
  destination: string,
  centsAmount: number,
  description = ""
): Payment {
  return {
    kind: "PAYMENT",
    source: payer,
    destination: destination,
    centsAmount: centsAmount,
    description: description,
    createdAt: new Date(),
  };
}

export function calculateBalance(transactions: Transaction[]) {
  return transactions.reduce(
    (acc, current) =>
      current.kind === "DEPOSIT"
        ? acc + current.centsAmount
        : acc - current.centsAmount,
    0
  );
}

export class InsufficientFundsError extends Error {
  constructor(username: string, balance: number, centsAmount: number) {
    super(
      `${username} tried to subtract ${centsAmount} from account, but it only has ${balance}`
    );
  }
}
