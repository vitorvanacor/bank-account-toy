type TransactionKind = "DEPOSIT" | "WITHDRAWAL" | "PAYMENT";

type TransactionBase = {
  kind: TransactionKind;
  // TODO: Use a Money ValueObject instead of number
  centsAmount: number;
  createdAt: Date;
};

interface Deposit extends TransactionBase {
  kind: "DEPOSIT";
  destination: string;
}

interface Withdrawal extends TransactionBase {
  kind: "WITHDRAWAL";
  source: string;
}

interface Payment extends TransactionBase {
  kind: "PAYMENT";
  source: string;
  destination: string;
  description: string;
}

export type Transaction = Deposit | Withdrawal | Payment;

export interface MovementRequest {
  username: string;
  centsAmount: number;
}

export interface PaymentRequest {
  username: string;
  destination: string;
  centsAmount: number;
  description: string;
}

export interface TransactionHistory {
  username: string;
  transactions: Transaction[];
  balance: number;
}
